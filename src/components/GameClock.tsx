import React, { useEffect } from 'react';
import { useGameStore } from '../store/useGameStore';
import { Play, Pause, Timer } from 'lucide-react';

export const GameClock: React.FC = () => {
  const { timeLeft, isRunning, toggleTimer, period, tick } = useGameStore() as any;

  useEffect(() => {
    let interval: any;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => tick(), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, tick]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col items-center w-full">
      <div className="flex items-center gap-2 mb-2">
        <Timer size={16} className="text-blue-500" />
        <span className="text-[10px] font-black uppercase text-slate-500">Periodo {period}</span>
      </div>
      <div className="text-7xl font-mono font-black text-white mb-6 tabular-nums">
        {formatTime(timeLeft)}
      </div>
      <button 
        onClick={() => toggleTimer()}
        className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 ${
          isRunning ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
        }`}
      >
        {isRunning ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
        <span className="font-black text-xs uppercase">{isRunning ? 'Pausa' : 'Iniciar'}</span>
      </button>
    </div>
  );
};