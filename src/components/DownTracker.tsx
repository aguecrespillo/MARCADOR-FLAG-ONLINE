import React from 'react';
import { ChevronRight, RefreshCcw } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';

export const DownTracker: React.FC = () => {
  const { currentDown, updateTeams } = useGameStore() as any;
  const isViewer = new URLSearchParams(window.location.search).get('viewer') === '1';

  const safeCurrentDown =
    typeof currentDown === 'number' && currentDown >= 1 && currentDown <= 4
      ? currentDown
      : 1;

  const setDown = (down: number) => {
    if (isViewer) return;
    updateTeams({ currentDown: down });
  };

  const nextDown = () => {
    if (isViewer) return;

    if (safeCurrentDown < 4) {
      setDown(safeCurrentDown + 1);
    } else {
      setDown(1);
    }
  };

  const resetDowns = () => {
    if (isViewer) return;
    setDown(1);
  };

  return (
    <div className="bg-slate-900/80 p-5 rounded-[2.5rem] border border-slate-800 shadow-xl mt-4">
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            Down Progress
          </span>
        </div>

        <button
          onClick={resetDowns}
          disabled={isViewer}
          className={`transition-colors ${
            isViewer
              ? 'text-slate-600 cursor-not-allowed opacity-60'
              : 'text-slate-500 hover:text-white'
          }`}
          title="Reiniciar a 1º Down"
        >
          <RefreshCcw size={16} />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((down) => (
            <button
              key={down}
              onClick={() => setDown(down)}
              disabled={isViewer}
              className={`relative h-14 rounded-2xl font-black text-xl transition-all flex items-center justify-center ${
                safeCurrentDown === down
                  ? isViewer
                    ? 'bg-yellow-500/50 text-slate-200 border border-yellow-500/30 opacity-80'
                    : 'bg-yellow-500 text-slate-900 shadow-[0_0_20px_rgba(234,179,8,0.3)] scale-105 z-10'
                  : isViewer
                  ? 'bg-slate-800 text-slate-600 border border-slate-700/50 cursor-not-allowed opacity-60'
                  : 'bg-slate-800 text-slate-500 border border-slate-700/50'
              }`}
            >
              {down}
              {safeCurrentDown === down && (
                <span className="absolute -bottom-1 w-6 h-1 bg-slate-900 rounded-full opacity-20"></span>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={nextDown}
          disabled={isViewer}
          className={`p-4 rounded-2xl border transition-all ${
            isViewer
              ? 'bg-slate-800 border-slate-700 text-slate-600 cursor-not-allowed opacity-60'
              : 'bg-slate-800 border-slate-700 text-yellow-500 active:scale-90'
          }`}
          title="Siguiente down"
        >
          <ChevronRight size={24} strokeWidth={3} />
        </button>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          {safeCurrentDown === 4 ? '¡ÚLTIMO INTENTO!' : `${safeCurrentDown}º DOWN`}
        </p>
      </div>
    </div>
  );
};