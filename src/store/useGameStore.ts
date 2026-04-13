import { create } from 'zustand';
import { db } from '../lib/firebase';
import {
  ref,
  onValue,
  update,
  set as firebaseSet,
  push,
  get as firebaseGet,
} from 'firebase/database';

type TeamSide = 'home' | 'away';

type Play = {
  id: number;
  team: TeamSide;
  points: number;
  pts: number;
  type: string;
  time: number;
  period: number;
  playerName: string;
};

type Player = {
  id: string;
  name?: string;
  number?: string | number;
  [key: string]: any;
};

type MatchSnapshot = {
  savedAt: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  winner: string;
  isDraw: boolean;
  mvp: {
    name: string;
    points: number;
  };
  stats: Record<string, number>;
  history: Play[];
  homeRoster: Player[];
  awayRoster: Player[];
  homeLogo: string | null;
  awayLogo: string | null;
  period: number;
  currentDown: number;
  homeTimeouts: number;
  awayTimeouts: number;
};

type GameState = {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  homeLogo: string | null;
  awayLogo: string | null;
  timeLeft: number;
  isRunning: boolean;
  isFinished: boolean;
  currentDown: number;
  period: number;
  history: Play[];
  homeRoster: Player[];
  awayRoster: Player[];
  homeTimeouts: number;
  awayTimeouts: number;
  timeoutTimer: number | null;
  viewerPassword: string;
  lastError: string | null;
  teamsList: string[];

  updateTeams: (
    teams: Partial<
      Pick<GameState, 'homeTeam' | 'awayTeam' | 'homeLogo' | 'awayLogo' | 'viewerPassword'>
    >
  ) => Promise<boolean>;
  addPoints: (team: TeamSide, points: number, type: string, playerName?: string) => Promise<boolean>;
  addPlayer: (team: TeamSide, player: Player) => Promise<boolean>;
  removePlayer: (team: TeamSide, id: string) => Promise<boolean>;
  toggleTimer: () => Promise<boolean>;
  updateTime: (seconds: number) => Promise<boolean>;
  nextPeriod: () => Promise<boolean>;
  saveMatchToHistory: () => Promise<boolean>;
  finishGame: (saveToHistory?: boolean) => Promise<boolean>;
  requestTimeout: (team: TeamSide) => Promise<boolean>;
  setTimeoutTimer: (value: number | null) => Promise<boolean>;
  undoLastPlay: () => Promise<boolean>;
  resetGame: () => Promise<boolean>;

  saveRosterTemplate: (team: TeamSide) => Promise<boolean>;
  loadRosterTemplate: (team: TeamSide) => Promise<boolean>;
  loadRosterTemplateByKey: (teamKey: string, side: TeamSide) => Promise<boolean>;

  clearError: () => void;
};

const gameRef = ref(db, 'game');
const matchesRef = ref(db, 'matches');
const teamsRef = ref(db, 'teams');

const initialState = {
  homeTeam: 'LOCAL',
  awayTeam: 'VISITANTE',
  homeScore: 0,
  awayScore: 0,
  homeLogo: null,
  awayLogo: null,
  timeLeft: 1200,
  isRunning: false,
  isFinished: false,
  currentDown: 1,
  period: 1,
  history: [] as Play[],
  homeRoster: [] as Player[],
  awayRoster: [] as Player[],
  homeTimeouts: 2,
  awayTimeouts: 2,
  timeoutTimer: null as number | null,
  viewerPassword: 'corsairs',
  lastError: null as string | null,
  teamsList: [] as string[],
};

const normalizeTeamKey = (name: string): string => {
  return (name || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
};

export const useGameStore = create<GameState>((set, get) => {
  let initialized = false;

  const setError = (message: string) => {
    console.error(message);
    set({ lastError: message });
  };

  const clearError = () => set({ lastError: null });

  const sync = async (updates: Record<string, any>) => {
    try {
      await update(gameRef, updates);
      set({ lastError: null });
      return true;
    } catch (error) {
      console.error('Error sincronizando con Firebase:', error);
      setError('No tienes permisos o ha fallado la sincronización con Firebase.');
      return false;
    }
  };

  const buildMatchSnapshot = (): MatchSnapshot => {
    const state = get();
    const history = state.history || [];

    const stats: Record<string, number> = {};
    history.forEach((play) => {
      const playerName = play.playerName || 'Jugador';
      const pts = play.pts ?? play.points ?? 0;
      stats[playerName] = (stats[playerName] || 0) + pts;
    });

    const sortedStats = Object.entries(stats).sort((a, b) => Number(b[1]) - Number(a[1]));
    const mvpEntry = sortedStats[0] || ['-', 0];

    let winner = 'EMPATE';
    if ((state.homeScore ?? 0) > (state.awayScore ?? 0)) {
      winner = state.homeTeam ?? 'LOCAL';
    } else if ((state.awayScore ?? 0) > (state.homeScore ?? 0)) {
      winner = state.awayTeam ?? 'VISITANTE';
    }

    return {
      savedAt: new Date().toISOString(),
      homeTeam: state.homeTeam ?? 'LOCAL',
      awayTeam: state.awayTeam ?? 'VISITANTE',
      homeScore: state.homeScore ?? 0,
      awayScore: state.awayScore ?? 0,
      winner,
      isDraw: winner === 'EMPATE',
      mvp: {
        name: String(mvpEntry[0]),
        points: Number(mvpEntry[1]) || 0,
      },
      stats,
      history,
      homeRoster: state.homeRoster || [],
      awayRoster: state.awayRoster || [],
      homeLogo: state.homeLogo ?? null,
      awayLogo: state.awayLogo ?? null,
      period: state.period ?? 1,
      currentDown: state.currentDown ?? 1,
      homeTimeouts: state.homeTimeouts ?? 2,
      awayTimeouts: state.awayTimeouts ?? 2,
    };
  };

  const saveMatchToHistoryInternal = async () => {
    try {
      const matchData = buildMatchSnapshot();
      const newMatchRef = push(matchesRef);
      await firebaseSet(newMatchRef, matchData);
      set({ lastError: null });
      return true;
    } catch (error) {
      console.error('Error guardando partido en historial:', error);
      setError('No se pudo guardar el partido en el historial.');
      return false;
    }
  };

  const applyTemplateToSide = async (teamKey: string, side: TeamSide) => {
    try {
      if (!teamKey?.trim()) {
        setError('Debes seleccionar un equipo válido.');
        return false;
      }

      const snapshot = await firebaseGet(ref(db, `teams/${teamKey}`));

      if (!snapshot.exists()) {
        setError('No existe la plantilla seleccionada.');
        return false;
      }

      const data = snapshot.val();
      const roster = Array.isArray(data?.roster) ? data.roster : [];
      const logo = data?.logo ?? null;
      const teamName = data?.name ?? teamKey;

      const rosterKey = side === 'home' ? 'homeRoster' : 'awayRoster';
      const logoKey = side === 'home' ? 'homeLogo' : 'awayLogo';
      const teamNameKey = side === 'home' ? 'homeTeam' : 'awayTeam';

      const prevState = get();

      set({
        [rosterKey]: roster,
        [logoKey]: logo,
        [teamNameKey]: teamName,
      } as Partial<GameState>);

      const ok = await sync({
        [rosterKey]: roster,
        [logoKey]: logo,
        [teamNameKey]: teamName,
      });

      if (!ok) {
        set({
          [rosterKey]: prevState[rosterKey],
          [logoKey]: prevState[logoKey],
          [teamNameKey]: prevState[teamNameKey],
        } as Partial<GameState>);
        return false;
      }

      set({ lastError: null });
      return true;
    } catch (error) {
      console.error('Error cargando plantilla por clave:', error);
      setError('No se pudo cargar la plantilla seleccionada.');
      return false;
    }
  };

  onValue(gameRef, (snapshot) => {
    const data = snapshot.val();

    if (data) {
      set({
        homeTeam: data.homeTeam ?? 'LOCAL',
        awayTeam: data.awayTeam ?? 'VISITANTE',
        homeScore: data.homeScore ?? 0,
        awayScore: data.awayScore ?? 0,
        homeLogo: data.homeLogo ?? null,
        awayLogo: data.awayLogo ?? null,
        timeLeft: data.timeLeft ?? 1200,
        isRunning: data.isRunning ?? false,
        isFinished: data.isFinished ?? false,
        currentDown: data.currentDown ?? 1,
        period: data.period ?? 1,
        history: data.history || [],
        homeRoster: data.homeRoster || [],
        awayRoster: data.awayRoster || [],
        homeTimeouts: data.homeTimeouts ?? 2,
        awayTimeouts: data.awayTimeouts ?? 2,
        timeoutTimer: data.timeoutTimer ?? null,
        viewerPassword: data.viewerPassword ?? 'corsairs',
      });
      initialized = true;
    } else if (!initialized) {
      set(initialState);
      firebaseSet(gameRef, initialState).catch((error) => {
        console.error('Error creando estado inicial en Firebase:', error);
      });
      initialized = true;
    }
  });

  onValue(teamsRef, (snapshot) => {
    const data = snapshot.val() || {};
    const teams = Object.keys(data).sort((a, b) => a.localeCompare(b));
    set({ teamsList: teams });
  });

  return {
    ...initialState,

    updateTeams: async (teams) => {
      const prev = get();
      set((state) => ({ ...state, ...teams }));

      const ok = await sync(teams);
      if (!ok) {
        set({
          homeTeam: prev.homeTeam,
          awayTeam: prev.awayTeam,
          homeLogo: prev.homeLogo,
          awayLogo: prev.awayLogo,
          viewerPassword: prev.viewerPassword,
        });
      }
      return ok;
    },

    addPoints: async (team, points, type, playerName = 'EQUIPO') => {
      const state = get();
      const scoreKey = `${team}Score` as 'homeScore' | 'awayScore';
      const currentScore = state[scoreKey] || 0;
      const newScore = currentScore + points;

      const newPlay: Play = {
        id: Date.now(),
        team,
        points,
        pts: points,
        type,
        time: state.timeLeft,
        period: state.period ?? 1,
        playerName,
      };

      const newHistory = [newPlay, ...(state.history || [])].slice(0, 50);

      set({
        [scoreKey]: newScore,
        history: newHistory,
      } as Partial<GameState>);

      const ok = await sync({
        [scoreKey]: newScore,
        history: newHistory,
      });

      if (!ok) {
        set({
          [scoreKey]: currentScore,
          history: state.history,
        } as Partial<GameState>);
      }

      return ok;
    },

    addPlayer: async (team, player) => {
      const state = get();
      const rosterKey = `${team}Roster` as 'homeRoster' | 'awayRoster';
      const currentRoster = state[rosterKey] || [];
      const newRoster = [...currentRoster, player];

      set({ [rosterKey]: newRoster } as Partial<GameState>);
      const ok = await sync({ [rosterKey]: newRoster });

      if (!ok) {
        set({ [rosterKey]: currentRoster } as Partial<GameState>);
      }

      return ok;
    },

    removePlayer: async (team, id) => {
      const state = get();
      const rosterKey = `${team}Roster` as 'homeRoster' | 'awayRoster';
      const currentRoster = state[rosterKey] || [];
      const newRoster = currentRoster.filter((p) => p.id !== id);

      set({ [rosterKey]: newRoster } as Partial<GameState>);
      const ok = await sync({ [rosterKey]: newRoster });

      if (!ok) {
        set({ [rosterKey]: currentRoster } as Partial<GameState>);
      }

      return ok;
    },

    toggleTimer: async () => {
      const state = get();
      const newValue = !state.isRunning;

      set({ isRunning: newValue });
      const ok = await sync({ isRunning: newValue });

      if (!ok) {
        set({ isRunning: state.isRunning });
      }

      return ok;
    },

    updateTime: async (seconds) => {
      const state = get();
      const safeSeconds = Math.max(0, seconds);
      const updates = {
        timeLeft: safeSeconds,
        ...(safeSeconds === 0 ? { isRunning: false } : {}),
      };

      set(updates);
      const ok = await sync(updates);

      if (!ok) {
        set({
          timeLeft: state.timeLeft,
          isRunning: state.isRunning,
        });
      }

      return ok;
    },

    nextPeriod: async () => {
      const state = get();

      if ((state.period ?? 1) >= 2) return false;

      const updates = {
        period: 2,
        timeLeft: 1200,
        isRunning: false,
        currentDown: 1,
        homeTimeouts: 2,
        awayTimeouts: 2,
        timeoutTimer: null,
      };

      set(updates);
      const ok = await sync(updates);

      if (!ok) {
        set({
          period: state.period,
          timeLeft: state.timeLeft,
          isRunning: state.isRunning,
          currentDown: state.currentDown,
          homeTimeouts: state.homeTimeouts,
          awayTimeouts: state.awayTimeouts,
          timeoutTimer: state.timeoutTimer,
        });
      }

      return ok;
    },

    saveMatchToHistory: async () => {
      return await saveMatchToHistoryInternal();
    },

    finishGame: async (saveToHistory = false) => {
      if (saveToHistory) {
        const saved = await saveMatchToHistoryInternal();
        if (!saved) return false;
      }

      const state = get();
      const updates = {
        isFinished: true,
        isRunning: false,
        timeoutTimer: null,
      };

      set(updates);
      const ok = await sync(updates);

      if (!ok) {
        set({
          isFinished: state.isFinished,
          isRunning: state.isRunning,
          timeoutTimer: state.timeoutTimer,
        });
      }

      return ok;
    },

    requestTimeout: async (team) => {
      const state = get();
      const key = team === 'home' ? 'homeTimeouts' : 'awayTimeouts';
      const current = state[key] ?? 0;

      if (current <= 0) return false;

      const updates = {
        [key]: current - 1,
        timeoutTimer: 60,
        isRunning: false,
      };

      set(updates as Partial<GameState>);
      const ok = await sync(updates);

      if (!ok) {
        set({
          [key]: current,
          timeoutTimer: state.timeoutTimer,
          isRunning: state.isRunning,
        } as Partial<GameState>);
      }

      return ok;
    },

    setTimeoutTimer: async (value) => {
      const prev = get().timeoutTimer;

      set({ timeoutTimer: value });
      const ok = await sync({ timeoutTimer: value });

      if (!ok) {
        set({ timeoutTimer: prev });
      }

      return ok;
    },

    undoLastPlay: async () => {
      const state = get();
      const history = state.history || [];
      if (history.length === 0) return false;

      const lastPlay = history[0];
      const updatedHistory = history.slice(1);

      const team = lastPlay.team;
      const pts = lastPlay.points ?? lastPlay.pts ?? 0;
      const scoreKey = `${team}Score` as 'homeScore' | 'awayScore';
      const currentScore = state[scoreKey] || 0;
      const newScore = Math.max(0, currentScore - pts);

      set({
        [scoreKey]: newScore,
        history: updatedHistory,
      } as Partial<GameState>);

      const ok = await sync({
        [scoreKey]: newScore,
        history: updatedHistory,
      });

      if (!ok) {
        set({
          [scoreKey]: currentScore,
          history,
        } as Partial<GameState>);
      }

      return ok;
    },

    resetGame: async () => {
      const state = get();
      const resetState = {
        homeScore: 0,
        awayScore: 0,
        timeLeft: 1200,
        isRunning: false,
        isFinished: false,
        currentDown: 1,
        period: 1,
        history: [],
        homeTimeouts: 2,
        awayTimeouts: 2,
        timeoutTimer: null,
      };

      set(resetState);
      const ok = await sync(resetState);

      if (!ok) {
        set({
          homeScore: state.homeScore,
          awayScore: state.awayScore,
          timeLeft: state.timeLeft,
          isRunning: state.isRunning,
          isFinished: state.isFinished,
          currentDown: state.currentDown,
          period: state.period,
          history: state.history,
          homeTimeouts: state.homeTimeouts,
          awayTimeouts: state.awayTimeouts,
          timeoutTimer: state.timeoutTimer,
        });
      }

      return ok;
    },

    saveRosterTemplate: async (team) => {
      try {
        const state = get();
        const teamName = team === 'home' ? state.homeTeam : state.awayTeam;
        const teamLogo = team === 'home' ? state.homeLogo : state.awayLogo;
        const roster = team === 'home' ? state.homeRoster : state.awayRoster;

        const teamKey = normalizeTeamKey(teamName);

        if (!teamName?.trim()) {
          setError('Debes poner antes el nombre del equipo.');
          return false;
        }

        if (!teamKey) {
          setError('El nombre del equipo no es válido.');
          return false;
        }

        if (!roster || roster.length === 0) {
          setError('No puedes guardar una plantilla sin jugadores.');
          return false;
        }

        await firebaseSet(ref(db, `teams/${teamKey}`), {
          name: teamName,
          logo: teamLogo ?? null,
          roster,
          updatedAt: new Date().toISOString(),
        });

        set({ lastError: null });
        return true;
      } catch (error) {
        console.error('Error guardando plantilla del equipo:', error);
        setError('No se pudo guardar la plantilla del equipo.');
        return false;
      }
    },

    loadRosterTemplate: async (team) => {
      try {
        const state = get();
        const teamName = team === 'home' ? state.homeTeam : state.awayTeam;
        const teamKey = normalizeTeamKey(teamName);

        if (!teamName?.trim()) {
          setError('Debes poner antes el nombre del equipo.');
          return false;
        }

        if (!teamKey) {
          setError('El nombre del equipo no es válido.');
          return false;
        }

        return await applyTemplateToSide(teamKey, team);
      } catch (error) {
        console.error('Error cargando plantilla del equipo:', error);
        setError('No se pudo cargar la plantilla del equipo.');
        return false;
      }
    },

    loadRosterTemplateByKey: async (teamKey, side) => {
      return await applyTemplateToSide(teamKey, side);
    },

    clearError,
  };
});