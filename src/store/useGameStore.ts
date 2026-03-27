import { create } from 'zustand';
import { db } from '../lib/firebase';
import { ref, onValue, set as firebaseSet } from 'firebase/database';

export const useGameStore = create((set, get) => {
  const gameRef = ref(db, 'currentGame');

  // 1. Escuchar cambios de la nube
  onValue(gameRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      set({
        ...data,
        isRunning: data.isRunning ?? true,
        history: Array.isArray(data.history) ? data.history : [],
        homeRoster: Array.isArray(data.homeRoster) ? data.homeRoster : [],
        awayRoster: Array.isArray(data.awayRoster) ? data.awayRoster : []
      });
    }
  });

  // 2. Función para sincronizar SOLO DATOS (limpia funciones)
  const sync = (newState: any) => {
    const currentState = get() as any;
    // Solo extraemos las variables de datos, NUNCA las funciones
    const dataToSave = {
      homeTeam: newState.homeTeam ?? currentState.homeTeam ?? 'LOCAL',
      awayTeam: newState.awayTeam ?? currentState.awayTeam ?? 'VISITANTE',
      homeLogo: newState.homeLogo ?? currentState.homeLogo ?? null,
      awayLogo: newState.awayLogo ?? currentState.awayLogo ?? null,
      homeScore: newState.homeScore ?? currentState.homeScore ?? 0,
      awayScore: newState.awayScore ?? currentState.awayScore ?? 0,
      timeLeft: newState.timeLeft ?? currentState.timeLeft ?? 1200,
      isRunning: newState.isRunning ?? currentState.isRunning ?? true,
      period: newState.period ?? currentState.period ?? 1,
      history: newState.history ?? currentState.history ?? [],
      homeRoster: newState.homeRoster ?? currentState.homeRoster ?? [],
      awayRoster: newState.awayRoster ?? currentState.awayRoster ?? []
    };
    
    // Usamos firebaseSet (el alias) para guardar en la nube
    firebaseSet(gameRef, dataToSave);
  };

  return {
    // Estado inicial
    homeTeam: 'LOCAL', awayTeam: 'VISITANTE', homeLogo: null, awayLogo: null,
    homeScore: 0, awayScore: 0, timeLeft: 1200, isRunning: true, period: 1,
    history: [], homeRoster: [], awayRoster: [],

    // Acciones (Estas NO se guardan en Firebase)
    updateTeams: (data: any) => sync(data),
    toggleTimer: () => sync({ isRunning: !(get() as any).isRunning }),
    tick: () => {
      const state = get() as any;
      if (state.isRunning && state.timeLeft > 0) {
        sync({ timeLeft: state.timeLeft - 1 });
      }
    },
    resetGame: () => sync({
      homeScore: 0, awayScore: 0, timeLeft: 1200, isRunning: true, 
      period: 1, history: [], homeRoster: [], awayRoster: []
    })
  };
});