import React, { useEffect, useMemo, useState } from 'react';
import { db } from '../lib/firebase';
import { ref, onValue, remove } from 'firebase/database';
import {
  History,
  Trophy,
  CalendarDays,
  Trash2,
  X,
  BarChart3,
  Share2,
} from 'lucide-react';

type MatchPlay = {
  id?: string | number;
  team?: 'home' | 'away';
  time?: number;
  type?: string;
  playerName?: string;
  pts?: number;
  points?: number;
  period?: number;
};

type SavedMatch = {
  id: string;
  savedAt?: string;
  homeTeam?: string;
  awayTeam?: string;
  homeScore?: number;
  awayScore?: number;
  winner?: string;
  isDraw?: boolean;
  mvp?: {
    name?: string;
    points?: number;
  };
  history?: MatchPlay[];
};

export const MatchHistory: React.FC = () => {
  const [matches, setMatches] = useState<SavedMatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<SavedMatch | null>(null);

  useEffect(() => {
    const matchesRef = ref(db, 'matches');

    const unsubscribe = onValue(matchesRef, (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        setMatches([]);
        setLoading(false);
        return;
      }

      const parsedMatches: SavedMatch[] = Object.entries(data).map(
        ([id, value]: [string, any]) => ({
          id,
          ...value,
        })
      );

      parsedMatches.sort((a, b) => {
        const dateA = new Date(a.savedAt || 0).getTime();
        const dateB = new Date(b.savedAt || 0).getTime();
        return dateB - dateA;
      });

      setMatches(parsedMatches);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const playerStats = useMemo(() => {
    if (!selectedMatch?.history) return [];

    const stats: Record<string, number> = {};

    selectedMatch.history.forEach((play) => {
      const playerName = play.playerName || 'Jugador';
      const pts = play.pts ?? play.points ?? 0;
      stats[playerName] = (stats[playerName] || 0) + pts;
    });

    return Object.entries(stats)
      .map(([name, points]) => ({ name, points }))
      .sort((a, b) => b.points - a.points);
  }, [selectedMatch]);

  const formatDate = (value?: string) => {
    if (!value) return '-';

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '-';

    return date.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatClock = (value?: number) => {
    const seconds = Number(value);
    if (!Number.isFinite(seconds)) return '-';

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getResultText = (match: SavedMatch) => {
    if (match.isDraw) return 'Empate';
    return match.winner || '-';
  };

  const handleDeleteMatch = async (match: SavedMatch) => {
    const confirmDelete = window.confirm(
      `¿Borrar el partido ${match.homeTeam || 'LOCAL'} vs ${match.awayTeam || 'VISITANTE'}?`
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(match.id);
      await remove(ref(db, `matches/${match.id}`));

      if (selectedMatch?.id === match.id) {
        setSelectedMatch(null);
      }
    } catch (error) {
      console.error('Error borrando partido:', error);
      window.alert('No se pudo borrar el partido.');
    } finally {
      setDeletingId(null);
    }
  };

  const shareMatchStats = (match: SavedMatch) => {
    const stats: Record<string, number> = {};

    (match.history || []).forEach((play) => {
      const playerName = play.playerName || 'Jugador';
      const pts = play.pts ?? play.points ?? 0;
      stats[playerName] = (stats[playerName] || 0) + pts;
    });

    const sortedStats = Object.entries(stats).sort((a, b) => Number(b[1]) - Number(a[1]));

    const mvpName = match.mvp?.name || '-';
    const mvpPts = match.mvp?.points ?? 0;

    let resultText = '';
    if (match.isDraw) {
      resultText = '🤝 Empate';
    } else {
      resultText = `🏆 Ganador: ${match.winner || '-'}`;
    }

    let statsText = '\n📊 ESTADÍSTICAS INDIVIDUALES';
    if (sortedStats.length === 0) {
      statsText += '\n- Sin anotadores';
    } else {
      sortedStats.forEach(([name, pts]) => {
        statsText += `\n- ${name}: ${pts} pts`;
      });
    }

    const firstHalf = (match.history || [])
      .filter((play) => (play.period ?? 1) === 1)
      .slice()
      .reverse();

    const secondHalf = (match.history || [])
      .filter((play) => (play.period ?? 1) === 2)
      .slice()
      .reverse();

    const renderPlayLine = (play: MatchPlay) => {
      const pts = play.pts ?? play.points ?? 0;
      const time = formatClock(play.time);
      const player = play.playerName || 'Jugador';
      const type = play.type || 'Anotación';

      return `- ${time} | ${player} | ${type} (+${pts})`;
    };

    let timelineText = '\n⏱ CRONOLOGÍA DEL PARTIDO';

    if (firstHalf.length > 0) {
      timelineText += '\n\n1º TIEMPO';
      firstHalf.forEach((play) => {
        timelineText += `\n${renderPlayLine(play)}`;
      });
    }

    if (secondHalf.length > 0) {
      timelineText += '\n\n2º TIEMPO';
      secondHalf.forEach((play) => {
        timelineText += `\n${renderPlayLine(play)}`;
      });
    }

    if (firstHalf.length === 0 && secondHalf.length === 0) {
      timelineText += '\n- Sin jugadas registradas';
    }

    const message =
      `🏈 ACTA FINAL FLAG FOOTBALL\n\n` +
      `📅 ${formatDate(match.savedAt)}\n\n` +
      `🏠 ${match.homeTeam || 'LOCAL'}: ${match.homeScore ?? 0}\n` +
      `🚩 ${match.awayTeam || 'VISITANTE'}: ${match.awayScore ?? 0}\n\n` +
      `${resultText}\n` +
      `⭐ MVP: ${mvpName} (${mvpPts} pts)\n` +
      `-----------------------------\n` +
      `${statsText}\n` +
      `${timelineText}\n\n` +
      `Generado por Alfonso Scoreboard`;

    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <History size={18} className="text-blue-500" />
          <h3 className="text-sm font-black uppercase text-slate-300">
            Historial de partidos
          </h3>
        </div>
        <p className="text-slate-500 font-bold">Cargando historial...</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
        <div className="flex items-center gap-3 mb-5">
          <History size={18} className="text-blue-500" />
          <h3 className="text-sm font-black uppercase text-slate-300">
            Historial de partidos
          </h3>
        </div>

        {matches.length === 0 ? (
          <p className="text-slate-500 font-bold">Todavía no hay partidos guardados.</p>
        ) : (
          <div className="space-y-4">
            {matches.map((match) => (
              <button
                key={match.id}
                onClick={() => setSelectedMatch(match)}
                className="w-full text-left bg-slate-950 border border-slate-800 rounded-2xl p-4 transition-all active:scale-[0.99]"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase">
                    <CalendarDays size={14} />
                    <span>{formatDate(match.savedAt)}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteMatch(match);
                    }}
                    disabled={deletingId === match.id}
                    className={`p-2 rounded-xl border transition-all ${
                      deletingId === match.id
                        ? 'bg-slate-800 text-slate-600 border-slate-700 cursor-not-allowed'
                        : 'bg-red-950/30 text-red-400 border-red-500/30 active:scale-95'
                    }`}
                    title="Borrar partido"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="text-left">
                    <div className="text-blue-400 text-xs font-black uppercase">
                      {match.homeTeam || 'LOCAL'}
                    </div>
                    <div className="text-red-400 text-xs font-black uppercase mt-1">
                      {match.awayTeam || 'VISITANTE'}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-white text-2xl font-black">
                      {match.homeScore ?? 0} - {match.awayScore ?? 0}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-300 text-sm font-bold mb-2">
                  <Trophy size={14} className="text-yellow-500" />
                  <span>Resultado: {getResultText(match)}</span>
                </div>

                <div className="text-slate-400 text-sm font-bold">
                  MVP: {match.mvp?.name || '-'} ({match.mvp?.points ?? 0} pts)
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedMatch && (
        <div className="fixed inset-0 z-[10020] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-white text-xl font-black uppercase">
                  Detalle del partido
                </h2>
                <p className="text-slate-400 text-sm font-bold mt-1">
                  {formatDate(selectedMatch.savedAt)}
                </p>
              </div>

              <button
                onClick={() => setSelectedMatch(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700"
                title="Cerrar"
              >
                <X size={18} />
              </button>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-5">
              <div className="flex items-center justify-between gap-4">
                <div className="text-left">
                  <div className="text-blue-400 text-xs font-black uppercase">
                    {selectedMatch.homeTeam || 'LOCAL'}
                  </div>
                  <div className="text-red-400 text-xs font-black uppercase mt-2">
                    {selectedMatch.awayTeam || 'VISITANTE'}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-white text-3xl font-black">
                    {selectedMatch.homeScore ?? 0} - {selectedMatch.awayScore ?? 0}
                  </div>
                </div>
              </div>

              <div className="mt-4 text-slate-300 text-sm font-bold">
                Resultado: {getResultText(selectedMatch)}
              </div>
              <div className="mt-1 text-slate-400 text-sm font-bold">
                MVP: {selectedMatch.mvp?.name || '-'} ({selectedMatch.mvp?.points ?? 0} pts)
              </div>

              <button
                onClick={() => shareMatchStats(selectedMatch)}
                className="mt-4 w-full bg-green-600 text-white py-3 rounded-2xl font-black flex items-center justify-center gap-2"
              >
                <Share2 size={18} />
                ENVIAR ACTA POR WHATSAPP
              </button>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-5">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 size={16} className="text-blue-400" />
                <h3 className="text-slate-300 text-sm font-black uppercase">
                  Estadísticas por jugador
                </h3>
              </div>

              {playerStats.length === 0 ? (
                <p className="text-slate-500 font-bold">Sin estadísticas disponibles.</p>
              ) : (
                <div className="space-y-3">
                  {playerStats.map((player, index) => (
                    <div
                      key={`${player.name}-${index}`}
                      className="flex items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3"
                    >
                      <div className="text-white font-black uppercase truncate">
                        {player.name}
                      </div>
                      <div className="text-blue-300 font-black text-xl">
                        {player.points} pts
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
              <h3 className="text-slate-300 text-sm font-black uppercase mb-4">
                Cronología
              </h3>

              {!selectedMatch.history || selectedMatch.history.length === 0 ? (
                <p className="text-slate-500 font-bold">Sin jugadas registradas.</p>
              ) : (
                <div className="space-y-3">
                  {selectedMatch.history
                    .slice()
                    .reverse()
                    .map((play, index) => {
                      const pts = play.pts ?? play.points ?? 0;
                      const playerName = play.playerName || 'Jugador';
                      const type = play.type || 'Anotación';
                      const teamName =
                        play.team === 'home'
                          ? selectedMatch.homeTeam || 'LOCAL'
                          : selectedMatch.awayTeam || 'VISITANTE';

                      return (
                        <div
                          key={play.id ?? index}
                          className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="text-white font-black uppercase">
                                {playerName}
                              </div>
                              <div className="text-slate-400 text-sm font-bold">
                                {teamName} · {type}
                              </div>
                            </div>

                            <div className="text-right">
                              <div className="text-yellow-400 font-mono font-black">
                                {formatClock(play.time)}
                              </div>
                              <div className="text-blue-300 font-black">
                                +{pts}
                              </div>
                            </div>
                          </div>

                          <div className="mt-2 text-slate-500 text-xs font-black uppercase">
                            Periodo {play.period ?? 1}
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};