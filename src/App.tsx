import React, { useState, useEffect, useMemo } from 'react';
import { useGameStore } from './store/useGameStore';
import { GameClock } from './components/GameClock';
import { ScoreBoard } from './components/ScoreBoard';
import { ScoringButtons } from './components/ScoringButtons';
import { Roster } from './components/Roster';
import { PlayHistory } from './components/PlayHistory';
import { DownTracker } from './components/DownTracker';
import { ScreenBoard } from './components/ScreenBoard';
import { MatchHistory } from './components/MatchHistory';
import { Settings, Loader2, Lock, History, LogOut, Download, PlusCircle } from 'lucide-react';
import { auth } from './lib/firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';

const formatTeamLabel = (teamKey: string) => {
  return teamKey
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

function App() {
  const state = useGameStore() as any;
  const isViewer = new URLSearchParams(window.location.search).get('viewer') === '1';
  const isScreen = new URLSearchParams(window.location.search).get('screen') === '1';

  const VIEWER_STORAGE_KEY = 'viewer-auth-ok';

  const {
    homeTeam,
    awayTeam,
    homeLogo,
    awayLogo,
    viewerPassword,
    updateTeams,
    isFinished,
    timeoutTimer,
    setTimeoutTimer,
    teamsList = [],
    loadRosterTemplateByKey,
    lastError,
  } = state;

  const [showSettings, setShowSettings] = useState(false);
  const [showMatchHistory, setShowMatchHistory] = useState(false);

  const [hName, setHName] = useState('');
  const [aName, setAName] = useState('');
  const [hLogo, setHLogo] = useState<string | null>(null);
  const [aLogo, setALogo] = useState<string | null>(null);
  const [viewerPasswordSetting, setViewerPasswordSetting] = useState('corsairs');

  const [selectedSavedHomeTeam, setSelectedSavedHomeTeam] = useState('');
  const [selectedSavedAwayTeam, setSelectedSavedAwayTeam] = useState('');
  const [settingsMessage, setSettingsMessage] = useState('');

  const [viewerPasswordInput, setViewerPasswordInput] = useState('');
  const [viewerAuthorized, setViewerAuthorized] = useState(!isViewer);
  const [viewerError, setViewerError] = useState('');

  const [authLoading, setAuthLoading] = useState(!isViewer && !isScreen);
  const [adminUser, setAdminUser] = useState<User | null>(null);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');
  const [adminLoggingIn, setAdminLoggingIn] = useState(false);

  const sortedTeams = useMemo(() => {
    return [...teamsList].sort((a, b) => a.localeCompare(b));
  }, [teamsList]);

  const showSettingsSuccess = (message: string) => {
    setSettingsMessage(message);
    window.setTimeout(() => {
      setSettingsMessage('');
    }, 2500);
  };

  useEffect(() => {
    if (homeTeam) setHName(homeTeam);
    if (awayTeam) setAName(awayTeam);
    setHLogo(homeLogo ?? null);
    setALogo(awayLogo ?? null);
    setViewerPasswordSetting(viewerPassword ?? 'corsairs');
  }, [homeTeam, awayTeam, homeLogo, awayLogo, viewerPassword]);

  useEffect(() => {
    if (!isViewer) {
      setViewerAuthorized(true);
      return;
    }

    const savedAuth = sessionStorage.getItem(VIEWER_STORAGE_KEY);
    if (savedAuth === 'true') {
      setViewerAuthorized(true);
    } else {
      setViewerAuthorized(false);
    }
  }, [isViewer]);

  useEffect(() => {
    if (typeof timeoutTimer !== 'number' || timeoutTimer <= 0) return;

    const interval = window.setInterval(() => {
      const current = useGameStore.getState().timeoutTimer;

      if (typeof current !== 'number') return;

      if (current > 1) {
        useGameStore.getState().setTimeoutTimer(current - 1);
      } else {
        useGameStore.getState().setTimeoutTimer(null);
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, [timeoutTimer, setTimeoutTimer]);

  useEffect(() => {
    if (isViewer || isScreen) {
      setAuthLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAdminUser(user);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, [isViewer, isScreen]);

  const handleLogoChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    team: 'home' | 'away'
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = typeof reader.result === 'string' ? reader.result : null;
      if (!result) return;

      if (team === 'home') {
        setHLogo(result);
      } else {
        setALogo(result);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleViewerLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (viewerPasswordInput === (viewerPassword ?? 'corsairs')) {
      sessionStorage.setItem(VIEWER_STORAGE_KEY, 'true');
      setViewerAuthorized(true);
      setViewerError('');
    } else {
      setViewerError('Contraseña incorrecta');
    }
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminError('');
    setAdminLoggingIn(true);

    try {
      await signInWithEmailAndPassword(auth, adminEmail.trim(), adminPassword);
    } catch (error) {
      console.error('Error login admin:', error);
      setAdminError('Email o contraseña incorrectos');
    } finally {
      setAdminLoggingIn(false);
    }
  };

  const handleAdminLogout = async () => {
    try {
      await signOut(auth);
      setShowSettings(false);
      setShowMatchHistory(false);
      setAdminPassword('');
    } catch (error) {
      console.error('Error cerrando sesión:', error);
    }
  };

  const handleLoadSavedTeam = async (side: 'home' | 'away') => {
    const selectedKey = side === 'home' ? selectedSavedHomeTeam : selectedSavedAwayTeam;

    if (!selectedKey) {
      setSettingsMessage('Selecciona antes un equipo guardado.');
      return;
    }

    const ok = await loadRosterTemplateByKey(selectedKey, side);

    if (!ok) {
      setSettingsMessage('No se pudo cargar el equipo seleccionado.');
      return;
    }

    const current = useGameStore.getState();

    if (side === 'home') {
      setHName(current.homeTeam || '');
      setHLogo(current.homeLogo ?? null);
    } else {
      setAName(current.awayTeam || '');
      setALogo(current.awayLogo ?? null);
    }

    showSettingsSuccess(
      `${side === 'home' ? 'Local' : 'Visitante'} cargado: ${formatTeamLabel(selectedKey)}`
    );
  };

  const handleNewSide = async (side: 'home' | 'away') => {
    const currentState = useGameStore.getState();

    if (side === 'home') {
      setSelectedSavedHomeTeam('');
      setHName('');
      setHLogo(null);

      for (const player of currentState.homeRoster || []) {
        await currentState.removePlayer('home', player.id);
      }

      await updateTeams({
        homeTeam: '',
        homeLogo: null,
      });

      showSettingsSuccess('Equipo local preparado para crear uno nuevo.');
    } else {
      setSelectedSavedAwayTeam('');
      setAName('');
      setALogo(null);

      for (const player of currentState.awayRoster || []) {
        await currentState.removePlayer('away', player.id);
      }

      await updateTeams({
        awayTeam: '',
        awayLogo: null,
      });

      showSettingsSuccess('Equipo visitante preparado para crear uno nuevo.');
    }
  };

  if (!homeTeam && !awayTeam) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
        <p className="text-slate-400 font-bold animate-pulse">CONECTANDO CON BÉLGICA...</p>
      </div>
    );
  }

  if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
        <p className="text-slate-400 font-bold animate-pulse">CARGANDO ACCESO...</p>
      </div>
    );
  }

  if (isViewer && !viewerAuthorized) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white">
        <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-6">
            <Lock className="text-yellow-500 mb-3" size={34} />
            <h1 className="text-xl font-black uppercase">Modo visor protegido</h1>
            <p className="text-slate-400 text-sm mt-2">
              Introduce la contraseña para ver el marcador.
            </p>
          </div>

          <form onSubmit={handleViewerLogin} className="space-y-4">
            <input
              type="password"
              value={viewerPasswordInput}
              onChange={(e) => setViewerPasswordInput(e.target.value)}
              placeholder="Contraseña"
              className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl outline-none focus:border-blue-500"
            />

            {viewerError && (
              <p className="text-red-400 text-sm font-bold">{viewerError}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 py-4 rounded-2xl font-black uppercase"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (isScreen) {
    return <ScreenBoard />;
  }

  if (!isViewer && !adminUser) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white">
        <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-6">
            <Lock className="text-blue-500 mb-3" size={34} />
            <h1 className="text-xl font-black uppercase">Acceso administrador</h1>
            <p className="text-slate-400 text-sm mt-2">
              Inicia sesión para modificar el marcador y el historial.
            </p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <input
              type="email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl outline-none focus:border-blue-500"
            />

            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl outline-none focus:border-blue-500"
            />

            {adminError && (
              <p className="text-red-400 text-sm font-bold">{adminError}</p>
            )}

            <button
              type="submit"
              disabled={adminLoggingIn}
              className={`w-full py-4 rounded-2xl font-black uppercase ${
                adminLoggingIn
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white'
              }`}
            >
              {adminLoggingIn ? 'Entrando...' : 'Entrar como admin'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const saveSettings = () => {
    updateTeams({
      homeTeam: hName,
      awayTeam: aName,
      homeLogo: hLogo,
      awayLogo: aLogo,
      viewerPassword: viewerPasswordSetting || 'corsairs',
    });
    sessionStorage.removeItem(VIEWER_STORAGE_KEY);
    setShowSettings(false);
  };

  const timeoutActive = typeof timeoutTimer === 'number';

  return (
    <div className="min-h-screen bg-slate-950 p-4 flex flex-col gap-4 max-w-md mx-auto text-white pb-10">
      <div className="flex justify-between items-center p-2">
        <div>
          <h1 className="text-blue-500 font-black italic uppercase text-xs tracking-tighter">
            Flag Score Alfonso
          </h1>
          {adminUser?.email && (
            <p className="text-[10px] text-slate-500 font-bold mt-1">
              Admin: {adminUser.email}
            </p>
          )}
        </div>

        {!isViewer && !timeoutActive && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowMatchHistory((prev) => !prev)}
              className="p-2 bg-slate-900 rounded-full border border-slate-800 text-slate-400"
              title="Historial"
            >
              <History size={20} />
            </button>

            <button
              onClick={() => setShowSettings(true)}
              className="p-2 bg-slate-900 rounded-full border border-slate-800 text-slate-400"
              title="Ajustes"
            >
              <Settings size={20} />
            </button>

            <button
              onClick={handleAdminLogout}
              className="p-2 bg-slate-900 rounded-full border border-slate-800 text-slate-400"
              title="Cerrar sesión"
            >
              <LogOut size={20} />
            </button>
          </div>
        )}
      </div>

      {!isViewer && showSettings && !timeoutActive && (
        <div className="fixed inset-0 z-[10001] bg-black/95 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-slate-900 w-full rounded-3xl border border-slate-700 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="mb-6 font-black uppercase text-sm text-slate-400">
              Configurar Equipos
            </h2>

            {(lastError || settingsMessage) && (
              <div
                className={`mb-4 rounded-xl px-3 py-2 text-sm ${
                  lastError
                    ? 'border border-red-700 bg-red-950/40 text-red-300'
                    : 'border border-green-700 bg-green-950/40 text-green-300'
                }`}
              >
                {lastError || settingsMessage}
              </div>
            )}

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-blue-400">
                  Equipo local guardado
                </p>

                <div className="space-y-3">
                  <select
                    value={selectedSavedHomeTeam}
                    onChange={(e) => setSelectedSavedHomeTeam(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white"
                  >
                    <option value="">Selecciona equipo local...</option>
                    {sortedTeams.map((teamKey: string) => (
                      <option key={teamKey} value={teamKey}>
                        {formatTeamLabel(teamKey)}
                      </option>
                    ))}
                  </select>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleLoadSavedTeam('home')}
                      className="bg-cyan-600 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                    >
                      <Download size={16} />
                      Cargar local
                    </button>

                    <button
                      onClick={() => handleNewSide('home')}
                      className="bg-slate-700 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                    >
                      <PlusCircle size={16} />
                      Nuevo local
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-2">
                  Nombre local
                </label>
                <input
                  value={hName}
                  onChange={(e) => setHName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl"
                  placeholder="Local"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-2">
                  Logo local
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleLogoChange(e, 'home')}
                  className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-sm"
                />
                {hLogo && (
                  <div className="mt-3 flex justify-center">
                    <img
                      src={hLogo}
                      alt="Logo local"
                      className="w-20 h-20 object-contain rounded-xl bg-slate-950 p-2 border border-slate-800"
                    />
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-red-400">
                  Equipo visitante guardado
                </p>

                <div className="space-y-3">
                  <select
                    value={selectedSavedAwayTeam}
                    onChange={(e) => setSelectedSavedAwayTeam(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white"
                  >
                    <option value="">Selecciona equipo visitante...</option>
                    {sortedTeams.map((teamKey: string) => (
                      <option key={teamKey} value={teamKey}>
                        {formatTeamLabel(teamKey)}
                      </option>
                    ))}
                  </select>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleLoadSavedTeam('away')}
                      className="bg-orange-500 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                    >
                      <Download size={16} />
                      Cargar visitante
                    </button>

                    <button
                      onClick={() => handleNewSide('away')}
                      className="bg-slate-700 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2"
                    >
                      <PlusCircle size={16} />
                      Nuevo visitante
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-2">
                  Nombre visitante
                </label>
                <input
                  value={aName}
                  onChange={(e) => setAName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl"
                  placeholder="Visitante"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-2">
                  Logo visitante
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleLogoChange(e, 'away')}
                  className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-sm"
                />
                {aLogo && (
                  <div className="mt-3 flex justify-center">
                    <img
                      src={aLogo}
                      alt="Logo visitante"
                      className="w-20 h-20 object-contain rounded-xl bg-slate-950 p-2 border border-slate-800"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-slate-500 mb-2">
                  Contraseña modo visor
                </label>
                <input
                  type="text"
                  value={viewerPasswordSetting}
                  onChange={(e) => setViewerPasswordSetting(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl"
                  placeholder="Contraseña visor"
                />
              </div>

              <button
                onClick={saveSettings}
                className="w-full bg-blue-600 py-4 rounded-2xl font-black"
              >
                GUARDAR
              </button>
            </div>
          </div>
        </div>
      )}

      {showMatchHistory ? (
        <MatchHistory />
      ) : (
        <>
          <ScoreBoard />

          {!isFinished && !timeoutActive && (
            <>
              <DownTracker />
              <GameClock />
              <div className="grid grid-cols-2 gap-2">
                <ScoringButtons team="home" />
                <ScoringButtons team="away" />
              </div>
              <PlayHistory />
              <Roster />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;