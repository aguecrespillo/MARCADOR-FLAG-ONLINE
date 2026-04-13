import React from 'react';
import { useGameStore } from '../store/useGameStore';
import { History } from 'lucide-react';

export const PlayHistory: React.FC = () => {
  const store = useGameStore() as any;
  const history = store.history ?? [];

  const formatClock = (value: any) => {
    const seconds = Number(value);

    if (!Number.isFinite(seconds)) return '-';

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-900/80 rounded-[2rem] border border-slate-800 overflow-hidden shadow-xl">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-800">
        <History size={18} className="text-blue-500" />
        <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-300">
          Historial de jugadas
        </h3>
      </div>

      <div className="grid grid-cols-[110px_1fr_90px] px-6 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 border-b border-slate-800">
        <div>Reloj</div>
        <div>Jugador</div>
        <div className="text-right">Pts</div>
      </div>

      {history.length === 0 ? (
        <div className="px-6 py-10 text-center text-slate-500 text-sm font-bold">
          Sin jugadas registradas
        </div>
      ) : (
        <div>
          {history.slice(0, 10).map((play: any, index: number) => {
            const pts = play.pts ?? play.points ?? 0;
            const playerName = play.playerName || 'Jugador';
            const type = play.type || 'Anotación';
            const formattedTime = formatClock(play.time);

            return (
              <div
                key={play.id ?? index}
                className="grid grid-cols-[110px_1fr_90px] items-center gap-4 px-6 py-5 border-b border-slate-800/70 last:border-b-0"
              >
                <div>
                  <div className="text-white text-2xl font-black tabular-nums">
                    {formattedTime}
                  </div>
                  <div className="text-[10px] font-black uppercase text-slate-500 mt-1">
                    Tipo: {type}
                  </div>
                </div>

                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0"></div>
                  <div className="text-white text-2xl font-black uppercase truncate">
                    {playerName}
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="min-w-[56px] text-center bg-blue-900/50 text-blue-300 px-4 py-2 rounded-2xl text-2xl font-black">
                    +{pts}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="px-6 py-4 text-center text-[10px] uppercase text-slate-600 border-t border-slate-800">
        Últimas acciones registradas
      </div>
    </div>
  );
};