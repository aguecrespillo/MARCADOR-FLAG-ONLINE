import React, { useState } from 'react';
import { useGameStore } from '../store/useGameStore';

export const ScoringButtons: React.FC<{ team: 'home' | 'away' }> = ({ team }) => {
  const store = useGameStore() as any;
  const isViewer = new URLSearchParams(window.location.search).get('viewer') === '1';

  const addPoints = store.addPoints ?? (() => {});
  const homeRoster = store.homeRoster ?? [];
  const awayRoster = store.awayRoster ?? [];
  const teamName =
    team === 'home' ? store.homeTeam || 'LOCAL' : store.awayTeam || 'VISITANTE';

  const roster = team === 'home' ? homeRoster : awayRoster;

  const [pendingScore, setPendingScore] = useState<{
    points: number;
    type: string;
  } | null>(null);

  const buttons = [
    { label: 'TOUCHDOWN', pts: 6, type: 'Touchdown' },
    { label: 'EXTRA (5Y)', pts: 1, type: 'Extra 1' },
    { label: 'EXTRA (10Y)', pts: 2, type: 'Extra 2' },
    { label: 'SAFETY', pts: 2, type: 'Safety' },
  ];

  const handleScoreClick = (points: number, type: string) => {
    if (isViewer) return;

    if (!roster.length) {
      addPoints(team, points, type, 'EQUIPO');
      return;
    }

    setPendingScore({ points, type });
  };

  const handlePlayerSelect = (playerName: string) => {
    if (isViewer || !pendingScore) return;

    addPoints(team, pendingScore.points, pendingScore.type, playerName);
    setPendingScore(null);
  };

  return (
    <div className="bg-slate-900/80 p-4 rounded-3xl border border-slate-800 flex flex-col gap-3 relative overflow-hidden">
      <h3
        className={`text-[10px] font-black uppercase text-center tracking-widest ${
          team === 'home' ? 'text-blue-500' : 'text-red-500'
        }`}
      >
        {teamName}
      </h3>

      <div className="grid grid-cols-2 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => handleScoreClick(btn.pts, btn.type)}
            disabled={isViewer}
            className={`p-3 rounded-2xl flex flex-col items-center transition-all shadow-md ${
              isViewer
                ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60'
                : team === 'home'
                ? 'bg-blue-600 active:scale-95'
                : 'bg-red-600 active:scale-95'
            }`}
          >
            <span className={`text-xl font-black ${isViewer ? 'text-slate-500' : 'text-white'}`}>
              {btn.pts}
            </span>
            <span className={`text-[7px] font-bold uppercase ${isViewer ? 'text-slate-500' : 'text-white'}`}>
              {btn.label}
            </span>
          </button>
        ))}
      </div>

      {pendingScore !== null && !isViewer && (
        <div className="absolute inset-0 z-50 bg-slate-900 p-4 flex flex-col border-2 border-yellow-500 rounded-3xl">
          <p className="text-[9px] font-black text-center mb-2 text-yellow-500 uppercase">
            ¿Quién anotó?
          </p>

          <div className="flex-1 overflow-y-auto space-y-1 pr-1">
            {roster.map((player: any, index: number) => (
              <button
                key={player.id ?? `${player.name}-${index}`}
                onClick={() => handlePlayerSelect(player.name)}
                className="w-full text-left bg-slate-800 p-2 rounded-xl text-[10px] font-bold hover:bg-slate-700 uppercase"
              >
                {player.number ? `#${player.number} ` : ''}
                {player.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setPendingScore(null)}
            className="mt-2 text-[8px] font-black text-red-500 uppercase tracking-widest"
          >
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
};