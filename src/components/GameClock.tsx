import React, { useEffect } from 'react';
import { useGameStore } from '../store/useGameStore';
import { Play, Pause, Timer, SkipForward, Flag } from 'lucide-react';

export const GameClock: React.FC = () => {
  const store = useGameStore() as any;
  const isViewer = new URLSearchParams(window.location.search).get('viewer') === '1';
  const isScreen = new URLSearchParams(window.location.search).get('screen') === '1';

  const timeLeft = store.timeLeft ?? 1200;
  const isRunning = store.isRunning ?? false;
  const period = store.period ?? 1;
  const toggleTimer = store.toggleTimer ?? (() => {});
  const updateTime = store.updateTime ?? (() => {});
  const nextPeriod = store.nextPeriod ?? (() => {});
  const finishGame = store.finishGame ?? (async () => {});

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        const currentState = useGameStore.getState() as any;
        const currentTime = currentState.timeLeft ?? 0;
        const running = currentState.isRunning ?? false;

        if (!running) return;

        if (currentTime > 1) {
          updateTime(currentTime - 1);
        } else if (currentTime === 1) {
          updateTime(0);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, updateTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isScreen) {
    return null;
  }

  return (
    <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col items-center w-full">
      <div className="flex items-center gap-2 mb-2">
        <Timer size={16} className="text-blue-500" />
        <span className="text-[10px] font-black uppercase text-slate-500">
          Periodo {period}
        </span>
      </div>

      <div className="text-7xl font-mono font-black text-white mb-6 tabular-nums">
        {formatTime(timeLeft)}
      </div>

      <div className="grid grid-cols-3 gap-2 w-full">
        <button
          onClick={() => {
            if (!isViewer) toggleTimer();
          }}
          disabled={isViewer}
          className={`py-4 rounded-2xl flex items-center justify-center gap-2 transition-all ${
            isViewer
              ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60'
              : isRunning
              ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20 active:scale-95'
              : 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 active:scale-95'
          }`}
        >
          {isRunning ? (
            <Pause size={20} fill="currentColor" />
          ) : (
            <Play size={20} fill="currentColor" />
          )}
        </button>

        <button
          onClick={() => {
            if (!isViewer) nextPeriod();
          }}
          disabled={isViewer || period >= 2}
          className={`py-4 rounded-2xl flex items-center justify-center gap-2 transition-all ${
            isViewer || period >= 2
              ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60'
              : 'bg-slate-800 text-white border border-slate-700 active:scale-95'
          }`}
          title="Siguiente periodo"
        >
          <SkipForward size={20} />
        </button>

        <button
          onClick={async () => {
            if (isViewer) return;

            const confirmFinish = window.confirm('¿Finalizar partido?');
            if (!confirmFinish) return;

            const saveMatch = window.confirm(
              '¿Guardar resultado en historial para estadísticas?'
            );

            await finishGame(saveMatch);
          }}
          disabled={isViewer}
          className={`py-4 rounded-2xl flex items-center justify-center gap-2 transition-all ${
            isViewer
              ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60'
              : 'bg-red-600 text-white shadow-lg shadow-red-900/40 active:scale-95'
          }`}
          title="Finalizar partido"
        >
          <Flag size={20} />
        </button>
      </div>

      {!isViewer && (
        <div className="mt-3 flex w-full justify-between text-[10px] font-black uppercase text-slate-500 px-1">
          <span>{isRunning ? 'Pausa' : 'Iniciar'}</span>
          <span>{period >= 2 ? 'Último periodo' : 'Periodo 2'}</span>
          <span>Finalizar</span>
        </div>
      )}
    </div>
  );
};