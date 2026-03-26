import { create } from 'zustand';
import { db } from '../lib/firebase';
import { ref, onValue, set as firebaseSet } from 'firebase/database'; // <--- IMPORTANTE: 'set as firebaseSet'

export const useGameStore = create((set, get) => {
  const gameRef = ref(db, 'currentGame');

  // Esto sincroniza lo que hay en la nube con tu pantalla
  onValue(gameRef, (snapshot) => {
    const data = snapshot.val();
    if (data) set(data); 
  });

  // Esto envía tus cambios a la nube
  const sync = (newState: any) => {
    // Usamos 'firebaseSet' aquí para que no haya error
    firebaseSet(gameRef, { ...get() as any, ...newState });
  };

  return {
    homeTeam: 'LOCAL FINAL', 
    awayTeam: 'VISITANTE',
    homeScore: 0,
    awayScore: 0,
    homeTimeouts: 2,
    awayTimeouts: 2,
    timeLeft: 1200,
    isRunning: false,
    period: 1,
    history: [],
    homeRoster: [],
    awayRoster: [],

    updateTeams: (data: any) => sync(data),
    
    recordPlay: (team: 'home' | 'away', pts: number, playerName: string, time: string) => {
      const state = get() as any;
      const scoreKey = team === 'home' ? 'homeScore' : 'awayScore';
      sync({ 
        [scoreKey]: state[scoreKey] + pts,
        history: [{ id: Date.now(), team, playerName, pts, time, period: state.period }, ...state.history]
      });
    },

    toggleTimer: () => sync({ isRunning: !(get() as any).isRunning }),
    
    tick: () => {
      const state: any = get();
      if (state.isRunning && state.timeLeft > 0) {
        sync({ timeLeft: state.timeLeft - 1 });
      }
    },

    resetGame: () => sync({
      homeScore: 0, awayScore: 0, homeTimeouts: 2, awayTimeouts: 2,
      timeLeft: 1200, isRunning: false, period: 1, history: [],
      homeRoster: [], awayRoster: []
    })
  };
});