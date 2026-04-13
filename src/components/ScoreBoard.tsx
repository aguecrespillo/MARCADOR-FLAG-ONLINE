import React from 'react';
import { useGameStore } from '../store/useGameStore';
import { Trophy, Share2, Zap, Undo2, Timer } from 'lucide-react';

export const ScoreBoard: React.FC = () => {
  const store = useGameStore() as any;
  const isViewer = new URLSearchParams(window.location.search).get('viewer') === '1';

  const {
    homeScore,
    awayScore,
    homeTeam,
    awayTeam,
    homeLogo,
    awayLogo,
    isFinished,
    resetGame,
    history,
  } = store;

  const homeTimeouts = store.homeTimeouts ?? 2;
  const awayTimeouts = store.awayTimeouts ?? 2;
  const requestTimeout = store.requestTimeout ?? (() => {});
  const timeoutTimer = store.timeoutTimer;
  const setTimeoutTimer = store.setTimeoutTimer ?? (() => {});
  const undoLastPlay = store.undoLastPlay ?? (() => {});

  const shareStats = () => {
    const stats: Record<string, number> = {};

    const formatClock = (value: any) => {
      const seconds = Number(value);
      if (!Number.isFinite(seconds)) return '-';

      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    history.forEach((play: any) => {
      const playerName = play.playerName || 'Jugador';
      const pts = play.pts ?? play.points ?? 0;
      stats[playerName] = (stats[playerName] || 0) + pts;
    });

    const sortedStats = Object.entries(stats).sort(
      (a, b) => (b[1] as number) - (a[1] as number)
    );

    const mvpEntry = sortedStats[0] || ['-', 0];
    const mvpName = mvpEntry[0];
    const mvpPts = mvpEntry[1];

    let resultText = '';
    if (homeScore > awayScore) {
      resultText = `🏆 Ganador: ${homeTeam}`;
    } else if (awayScore > homeScore) {
      resultText = `🏆 Ganador: ${awayTeam}`;
    } else {
      resultText = `🤝 Empate`;
    }

    let statsText = '\n📊 ESTADÍSTICAS INDIVIDUALES';
    if (sortedStats.length === 0) {
      statsText += '\n- Sin anotadores';
    } else {
      sortedStats.forEach(([name, pts]) => {
        statsText += `\n- ${name}: ${pts} pts`;
      });
    }

    const firstHalf = history
      .filter((play: any) => (play.period ?? 1) === 1)
      .slice()
      .reverse();

    const secondHalf = history
      .filter((play: any) => (play.period ?? 1) === 2)
      .slice()
      .reverse();

    const renderPlayLine = (play: any) => {
      const pts = play.pts ?? play.points ?? 0;
      const time = formatClock(play.time);
      const player = play.playerName || 'Jugador';
      const type = play.type || 'Anotación';

      return `- ${time} | ${player} | ${type} (+${pts})`;
    };

    let timelineText = '\n⏱ CRONOLOGÍA DEL PARTIDO';

    if (firstHalf.length > 0) {
      timelineText += '\n\n1º TIEMPO';
      firstHalf.forEach((play: any) => {
        timelineText += `\n${renderPlayLine(play)}`;
      });
    }

    if (secondHalf.length > 0) {
      timelineText += '\n\n2º TIEMPO';
      secondHalf.forEach((play: any) => {
        timelineText += `\n${renderPlayLine(play)}`;
      });
    }

    if (firstHalf.length === 0 && secondHalf.length === 0) {
      timelineText += '\n- Sin jugadas registradas';
    }

    const message =
      `🏈 ACTA FINAL FLAG FOOTBALL\n\n` +
      `🏠 ${homeTeam}: ${homeScore}\n` +
      `🚩 ${awayTeam}: ${awayScore}\n\n` +
      `${resultText}\n` +
      `⭐ MVP: ${mvpName} (${mvpPts} pts)\n` +
      `-----------------------------\n` +
      `${statsText}\n` +
      `${timelineText}\n\n` +
      `Generado por Alfonso Scoreboard`;

    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (isFinished) {
    return (
      <div className="bg-slate-900 p-8 rounded-3xl border-4 border-yellow-500 text-center shadow-2xl">
        <Trophy className="mx-auto text-yellow-500 mb-4" size={48} />
        <h2 className="text-white text-2xl font-black uppercase mb-8">Finalizado</h2>

        <div className="flex justify-around items-center mb-10 bg-slate-950 p-6 rounded-2xl border border-slate-800">
          <div className="text-center flex flex-col items-center">
            {homeLogo ? (
              <img
                src={homeLogo}
                alt={`Logo ${homeTeam}`}
                className="w-16 h-16 object-contain mb-2 rounded-xl bg-slate-900 p-2 border border-slate-800"
              />
            ) : (
              <div className="w-16 h-16 mb-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 text-xs font-black">
                LOGO
              </div>
            )}
            <div className="text-blue-400 font-bold text-[10px] uppercase mb-1">{homeTeam}</div>
            <div className="text-5xl font-black text-white">{homeScore}</div>
          </div>

          <div className="text-slate-700 text-3xl font-light px-3">VS</div>

          <div className="text-center flex flex-col items-center">
            {awayLogo ? (
              <img
                src={awayLogo}
                alt={`Logo ${awayTeam}`}
                className="w-16 h-16 object-contain mb-2 rounded-xl bg-slate-900 p-2 border border-slate-800"
              />
            ) : (
              <div className="w-16 h-16 mb-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 text-xs font-black">
                LOGO
              </div>
            )}
            <div className="text-red-400 font-bold text-[10px] uppercase mb-1">{awayTeam}</div>
            <div className="text-5xl font-black text-white">{awayScore}</div>
          </div>
        </div>

        <button
          onClick={shareStats}
          className="w-full bg-green-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 mb-4"
        >
          <Share2 size={20} /> ENVIAR ACTA
        </button>

        {!isViewer && (
          <button
            onClick={() => confirm('¿Resetear?') && resetGame()}
            className="text-slate-500 text-[10px] font-black uppercase"
          >
            Reiniciar
          </button>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#1e293b]/50 p-6 rounded-[2.5rem] border border-slate-800 flex flex-col items-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>

          {homeLogo ? (
            <img
              src={homeLogo}
              alt={`Logo ${homeTeam}`}
              className="w-20 h-20 object-contain mb-3 rounded-2xl bg-slate-900 p-2 border border-slate-800"
            />
          ) : (
            <div className="w-20 h-20 mb-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 text-xs font-black">
              LOGO
            </div>
          )}

          <span className="text-blue-400 font-black text-[10px] uppercase mb-1 text-center">
            {homeTeam}
          </span>
          <span className="text-7xl font-black text-white mb-4">{homeScore}</span>

          <button
            onClick={() => {
              if (!isViewer) requestTimeout('home');
            }}
            disabled={isViewer || homeTimeouts <= 0}
            className={`w-full py-3 rounded-2xl flex flex-col items-center justify-center transition-all ${
              isViewer
                ? 'bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed opacity-60'
                : homeTimeouts > 0
                ? 'bg-blue-600/10 border border-blue-500/30 text-blue-400 active:scale-95'
                : 'bg-slate-800 text-slate-600 border border-transparent'
            }`}
          >
            <div className="flex items-center gap-2 mb-0.5">
              <Timer size={14} className={!isViewer && homeTimeouts > 0 ? 'animate-pulse' : ''} />
              <span className="font-black text-xs">TIMEOUTS</span>
            </div>

            <div className="flex gap-1.5 mt-1">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 w-6 rounded-full ${
                    i < homeTimeouts
                      ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]'
                      : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </button>
        </div>

        <div className="bg-[#1e293b]/50 p-6 rounded-[2.5rem] border border-slate-800 flex flex-col items-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>

          {awayLogo ? (
            <img
              src={awayLogo}
              alt={`Logo ${awayTeam}`}
              className="w-20 h-20 object-contain mb-3 rounded-2xl bg-slate-900 p-2 border border-slate-800"
            />
          ) : (
            <div className="w-20 h-20 mb-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 text-xs font-black">
              LOGO
            </div>
          )}

          <span className="text-red-400 font-black text-[10px] uppercase mb-1 text-center">
            {awayTeam}
          </span>
          <span className="text-7xl font-black text-white mb-4">{awayScore}</span>

          <button
            onClick={() => {
              if (!isViewer) requestTimeout('away');
            }}
            disabled={isViewer || awayTimeouts <= 0}
            className={`w-full py-3 rounded-2xl flex flex-col items-center justify-center transition-all ${
              isViewer
                ? 'bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed opacity-60'
                : awayTimeouts > 0
                ? 'bg-red-600/10 border border-red-500/30 text-red-400 active:scale-95'
                : 'bg-slate-800 text-slate-600 border border-transparent'
            }`}
          >
            <div className="flex items-center gap-2 mb-0.5">
              <Timer size={14} className={!isViewer && awayTimeouts > 0 ? 'animate-pulse' : ''} />
              <span className="font-black text-xs">TIMEOUTS</span>
            </div>

            <div className="flex gap-1.5 mt-1">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 w-6 rounded-full ${
                    i < awayTimeouts
                      ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'
                      : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {!isViewer && history.length > 0 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => confirm('¿Eliminar última jugada?') && undoLastPlay()}
            className="flex items-center gap-2 px-6 py-2 bg-slate-800 text-slate-400 rounded-full text-[10px] font-black uppercase"
          >
            <Undo2 size={12} /> CORREGIR ERROR
          </button>
        </div>
      )}

      {typeof timeoutTimer === 'number' && (
        <div className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center text-center">
          <Zap size={60} className="text-yellow-500 mb-4 animate-pulse" />
          <div className="text-[8rem] font-mono text-yellow-400">{timeoutTimer}</div>

          {!isViewer && (
            <button
              onClick={() => setTimeoutTimer(null)}
              className="bg-red-600 text-white px-8 py-4 rounded-2xl font-black mt-6"
            >
              REANUDAR
            </button>
          )}
        </div>
      )}
    </>
  );
};