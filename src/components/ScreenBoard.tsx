import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useGameStore } from '../store/useGameStore';

export const ScreenBoard: React.FC = () => {
  const store = useGameStore() as any;

  const homeTeam = store.homeTeam ?? 'LOCAL';
  const awayTeam = store.awayTeam ?? 'VISITANTE';
  const homeScore = store.homeScore ?? 0;
  const awayScore = store.awayScore ?? 0;
  const homeLogo = store.homeLogo ?? null;
  const awayLogo = store.awayLogo ?? null;
  const timeLeft = store.timeLeft ?? 1200;
  const period = store.period ?? 1;
  const currentDown = store.currentDown ?? 1;
  const homeTimeouts = store.homeTimeouts ?? 2;
  const awayTimeouts = store.awayTimeouts ?? 2;
  const isFinished = store.isFinished ?? false;
  const timeoutTimer = store.timeoutTimer ?? null;
  const history = store.history ?? [];

  const [showPlayOverlay, setShowPlayOverlay] = useState(false);

  const latestPlay = history.length > 0 ? history[0] : null;

  const lastSeenPlayIdRef = useRef<string | number | null>(null);
  const initializedRef = useRef(false);
  const overlayTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!latestPlay?.id) return;

    if (!initializedRef.current) {
      initializedRef.current = true;
      lastSeenPlayIdRef.current = latestPlay.id;
      return;
    }

    if (latestPlay.id === lastSeenPlayIdRef.current) return;

    lastSeenPlayIdRef.current = latestPlay.id;
    setShowPlayOverlay(true);

    if (overlayTimerRef.current) {
      window.clearTimeout(overlayTimerRef.current);
    }

    overlayTimerRef.current = window.setTimeout(() => {
      setShowPlayOverlay(false);
      overlayTimerRef.current = null;
    }, 3500);

    return undefined;
  }, [latestPlay?.id]);

  useEffect(() => {
    return () => {
      if (overlayTimerRef.current) {
        window.clearTimeout(overlayTimerRef.current);
      }
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatPlayClock = (value: any) => {
    const seconds = Number(value);
    if (!Number.isFinite(seconds)) return '-';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const renderTimeouts = (count: number, activeClass: string) => (
    <div className="flex gap-2 justify-center mt-3">
      {[0, 1].map((i) => (
        <div
          key={i}
          className={`h-3 w-12 rounded-full ${i < count ? activeClass : 'bg-slate-700'}`}
        />
      ))}
    </div>
  );

  const recentPlays = useMemo(() => history.slice(0, 5), [history]);

  const getTeamStyles = (team: 'home' | 'away') => {
    if (team === 'home') {
      return {
        strongText: 'text-blue-400',
        badge: 'bg-blue-500/15 text-blue-300 border border-blue-500/30',
        row: 'border-l-4 border-blue-500',
        glow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]',
        overlay: 'from-blue-600/30 to-blue-400/10 border-blue-400/30',
      };
    }

    return {
      strongText: 'text-red-400',
      badge: 'bg-red-500/15 text-red-300 border border-red-500/30',
      row: 'border-l-4 border-red-500',
      glow: 'shadow-[0_0_20px_rgba(239,68,68,0.15)]',
      overlay: 'from-red-600/30 to-red-400/10 border-red-400/30',
    };
  };

  const getPlayLabel = (play: any) => {
    const type = (play?.type || 'Anotación').toString().toUpperCase();
    const pts = play?.pts ?? play?.points ?? 0;
    return `${type} +${pts}`;
  };

  const overlayStyles =
    latestPlay?.team === 'home' ? getTeamStyles('home') : getTeamStyles('away');

  if (typeof timeoutTimer === 'number') {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center px-6">
        <div className="text-3xl md:text-5xl font-black uppercase tracking-[0.2em] text-yellow-500 mb-6">
          Tiempo muerto
        </div>
        <div className="text-[8rem] md:text-[12rem] leading-none font-mono font-black text-yellow-400 tabular-nums animate-pulse">
          {timeoutTimer}
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-950 text-white px-8 py-8 flex flex-col justify-center">
        <div className="text-center text-yellow-500 text-4xl md:text-6xl font-black uppercase mb-8">
          Final del partido
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
          <div className="flex flex-col items-center">
            {homeLogo ? (
              <img
                src={homeLogo}
                alt={`Logo ${homeTeam}`}
                className="w-28 h-28 md:w-36 md:h-36 object-contain rounded-3xl bg-slate-900 border border-slate-800 p-3 mb-4"
              />
            ) : (
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 font-black mb-4">
                LOGO
              </div>
            )}
            <div className="text-blue-400 text-xl md:text-2xl font-black uppercase text-center">
              {homeTeam}
            </div>
            <div className="text-white text-7xl md:text-8xl font-black mt-4">{homeScore}</div>
          </div>

          <div className="text-slate-600 text-4xl md:text-5xl font-light px-4">VS</div>

          <div className="flex flex-col items-center">
            {awayLogo ? (
              <img
                src={awayLogo}
                alt={`Logo ${awayTeam}`}
                className="w-28 h-28 md:w-36 md:h-36 object-contain rounded-3xl bg-slate-900 border border-slate-800 p-3 mb-4"
              />
            ) : (
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 font-black mb-4">
                LOGO
              </div>
            )}
            <div className="text-red-400 text-xl md:text-2xl font-black uppercase text-center">
              {awayTeam}
            </div>
            <div className="text-white text-7xl md:text-8xl font-black mt-4">{awayScore}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-6 overflow-hidden">
      {showPlayOverlay && latestPlay && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
          <div
            className={`mx-6 w-full max-w-4xl rounded-[2rem] border bg-gradient-to-br ${overlayStyles.overlay} backdrop-blur-md px-8 py-10 shadow-2xl animate-[pulse_1.1s_ease-in-out_infinite]`}
          >
            <div className="text-center">
              <div className={`text-2xl md:text-3xl font-black uppercase tracking-[0.2em] ${overlayStyles.strongText}`}>
                Nueva anotación
              </div>

              <div className="mt-4 text-4xl md:text-7xl font-black text-white uppercase leading-tight">
                {getPlayLabel(latestPlay)}
              </div>

              <div className="mt-4 text-xl md:text-3xl font-black text-slate-200 uppercase">
                {latestPlay.playerName || 'Jugador'}
              </div>

              <div className={`mt-3 text-lg md:text-2xl font-black uppercase ${overlayStyles.strongText}`}>
                {latestPlay.team === 'home' ? homeTeam : awayTeam}
              </div>

              <div className="mt-4 text-yellow-400 font-mono text-2xl md:text-4xl font-black">
                {formatPlayClock(latestPlay.time)}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex h-full flex-col gap-6">
        <div className="grid grid-cols-[220px_minmax(0,1fr)_220px] items-center gap-6">
          <div className="flex flex-col items-center">
            {homeLogo ? (
              <img
                src={homeLogo}
                alt={`Logo ${homeTeam}`}
                className="w-28 h-28 object-contain rounded-3xl bg-slate-900 border border-slate-800 p-3 mb-4"
              />
            ) : (
              <div className="w-28 h-28 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 font-black mb-4">
                LOGO
              </div>
            )}

            <div className="text-blue-400 text-2xl font-black uppercase text-center leading-tight">
              {homeTeam}
            </div>

            {renderTimeouts(
              homeTimeouts,
              'bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]'
            )}
          </div>

          <div className="flex flex-col items-center min-w-0">
            <div
              className="font-black leading-none tabular-nums text-white whitespace-nowrap"
              style={{ fontSize: 'clamp(4rem, 14vw, 10rem)' }}
            >
              {homeScore} - {awayScore}
            </div>

            <div
              className="mt-4 font-mono font-black text-yellow-400 leading-none tabular-nums whitespace-nowrap"
              style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
            >
              {formatTime(timeLeft)}
            </div>

            <div className="mt-4 flex gap-6 text-base md:text-2xl font-black uppercase text-slate-300">
              <span>Periodo {period}</span>
              <span>{currentDown}º Down</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            {awayLogo ? (
              <img
                src={awayLogo}
                alt={`Logo ${awayTeam}`}
                className="w-28 h-28 object-contain rounded-3xl bg-slate-900 border border-slate-800 p-3 mb-4"
              />
            ) : (
              <div className="w-28 h-28 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 font-black mb-4">
                LOGO
              </div>
            )}

            <div className="text-red-400 text-2xl font-black uppercase text-center leading-tight">
              {awayTeam}
            </div>

            {renderTimeouts(
              awayTimeouts,
              'bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)]'
            )}
          </div>
        </div>

        <div className="w-full bg-slate-900/60 border border-slate-800 rounded-3xl p-5">
          <div className="text-center text-slate-300 text-2xl font-black uppercase mb-4">
            Últimas anotaciones
          </div>

          {recentPlays.length === 0 ? (
            <div className="text-center text-slate-500 font-bold py-6">
              Sin anotaciones todavía
            </div>
          ) : (
            <div className="space-y-3">
              {recentPlays.map((play: any, index: number) => {
                const pts = play.pts ?? play.points ?? 0;
                const playerName = play.playerName || 'Jugador';
                const type = play.type || 'Anotación';
                const teamName = play.team === 'home' ? homeTeam : awayTeam;
                const styles = getTeamStyles(play.team === 'home' ? 'home' : 'away');
                const playTime = formatPlayClock(play.time);
                const isLatest = index === 0;

                return (
                  <div
                    key={play.id ?? `${playerName}-${index}`}
                    className={`grid grid-cols-[110px_minmax(0,1fr)_260px_90px] items-center gap-4 bg-slate-950/70 rounded-2xl px-4 py-3 ${styles.row} ${isLatest ? styles.glow : ''}`}
                  >
                    <div className="text-yellow-400 font-mono font-black text-2xl whitespace-nowrap">
                      {playTime}
                    </div>

                    <div className="text-white font-black text-2xl uppercase truncate">
                      {playerName}
                    </div>

                    <div className="flex items-center justify-start min-w-0">
                      <span
                        className={`px-3 py-1 rounded-full text-base font-black uppercase truncate max-w-full ${styles.badge}`}
                      >
                        {teamName} · {type}
                      </span>
                    </div>

                    <div className="text-white font-black text-3xl text-right whitespace-nowrap">
                      +{pts}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};