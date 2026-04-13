import React, { useMemo, useState } from 'react';
import { useGameStore } from '../store/useGameStore';
import { UserPlus, UserMinus, Save, Download, Trash2 } from 'lucide-react';

const formatTeamLabel = (teamKey: string) => {
  return teamKey
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

export const Roster: React.FC = () => {
  const isViewer = new URLSearchParams(window.location.search).get('viewer') === '1';

  const {
    homeRoster = [],
    awayRoster = [],
    addPlayer,
    removePlayer,
    saveRosterTemplate,
    loadRosterTemplate,
    loadRosterTemplateByKey,
    homeTeam,
    awayTeam,
    lastError,
    teamsList = [],
  } = useGameStore() as any;

  const [playerName, setPlayerName] = useState('');
  const [playerNumber, setPlayerNumber] = useState('');
  const [selectedHomeTemplate, setSelectedHomeTemplate] = useState('');
  const [selectedAwayTemplate, setSelectedAwayTemplate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sortedTeams = useMemo(() => {
    return [...teamsList].sort((a, b) => a.localeCompare(b));
  }, [teamsList]);

  const showSuccess = (message: string) => {
    setSuccessMessage(message);
    window.setTimeout(() => {
      setSuccessMessage('');
    }, 2500);
  };

  const onAdd = (team: 'home' | 'away') => {
    if (isViewer) return;
    if (playerName.trim() === '') return;

    const newPlayer = {
      id: Date.now().toString(),
      name: playerName.trim().toUpperCase(),
      number: playerNumber || '00',
    };

    addPlayer(team, newPlayer);
    setPlayerName('');
    setPlayerNumber('');
  };

  const handleRemove = (team: 'home' | 'away', id: string, name: string) => {
    if (isViewer) return;

    if (window.confirm(`¿Seguro que quieres borrar a ${name}?`)) {
      removePlayer(team, id);
    }
  };

  const handleSave = async (team: 'home' | 'away') => {
    const ok = await saveRosterTemplate(team);

    if (ok) {
      showSuccess(
        `Plantilla guardada: ${team === 'home' ? homeTeam || 'LOCAL' : awayTeam || 'VISITANTE'}`
      );
    }
  };

  const handleLoad = async (team: 'home' | 'away') => {
    const ok = await loadRosterTemplate(team);

    if (ok) {
      showSuccess(
        `Plantilla cargada: ${team === 'home' ? homeTeam || 'LOCAL' : awayTeam || 'VISITANTE'}`
      );
    }
  };

  const handleLoadFromSelector = async (side: 'home' | 'away') => {
    const selectedKey = side === 'home' ? selectedHomeTemplate : selectedAwayTemplate;

    if (!selectedKey) return;

    const ok = await loadRosterTemplateByKey(selectedKey, side);

    if (ok) {
      showSuccess(`Plantilla cargada: ${formatTeamLabel(selectedKey)}`);
    }
  };

  const handleClearRoster = async (side: 'home' | 'away') => {
    if (isViewer) return;

    const roster = side === 'home' ? homeRoster : awayRoster;
    const teamName = side === 'home' ? homeTeam : awayTeam;

    if (!roster.length) return;

    const confirmText = `¿Seguro que quieres vaciar el roster de ${
      teamName || (side === 'home' ? 'LOCAL' : 'VISITANTE')
    }?`;

    if (!window.confirm(confirmText)) return;

    for (const player of roster) {
      await removePlayer(side, player.id);
    }

    showSuccess(`Roster vaciado: ${teamName || (side === 'home' ? 'LOCAL' : 'VISITANTE')}`);
  };

  const buttonBase =
    'flex items-center justify-center gap-2 h-12 rounded-xl font-bold text-sm transition-colors';
  const buttonDisabled = 'bg-slate-800 text-slate-500 cursor-not-allowed';

  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
        <div className="flex items-center gap-2.5 mb-5 border-b border-slate-800 pb-3">
          <UserPlus size={18} className="text-yellow-500" />
          <h3 className="text-[11px] font-black uppercase text-slate-400 tracking-widest">
            Gestión de jugadores
          </h3>
        </div>

        {lastError && (
          <div className="mb-4 rounded-xl border border-red-700 bg-red-950/40 px-3 py-2 text-sm text-red-300">
            {lastError}
          </div>
        )}

        {!!successMessage && (
          <div className="mb-4 rounded-xl border border-green-700 bg-green-950/40 px-3 py-2 text-sm text-green-300">
            {successMessage}
          </div>
        )}

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Nombre..."
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            disabled={isViewer}
            className={`flex-1 rounded-xl p-3 text-sm outline-none ${
              isViewer
                ? 'bg-slate-900 border border-slate-800 text-slate-500'
                : 'bg-slate-950 border border-slate-800 text-white'
            }`}
          />
          <input
            type="text"
            placeholder="Nº"
            value={playerNumber}
            onChange={(e) => setPlayerNumber(e.target.value)}
            disabled={isViewer}
            className={`w-16 rounded-xl p-3 text-sm text-center font-bold outline-none ${
              isViewer
                ? 'bg-slate-900 border border-slate-800 text-slate-500'
                : 'bg-slate-950 border border-slate-800 text-white'
            }`}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => onAdd('home')}
            disabled={isViewer}
            className={`${buttonBase} ${
              isViewer ? buttonDisabled : 'bg-blue-600 hover:bg-blue-500 text-white'
            }`}
          >
            <UserPlus size={18} />
            Añadir local
          </button>

          <button
            onClick={() => onAdd('away')}
            disabled={isViewer}
            className={`${buttonBase} ${
              isViewer ? buttonDisabled : 'bg-red-600 hover:bg-red-500 text-white'
            }`}
          >
            <UserPlus size={18} />
            Añadir visitante
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => handleSave('home')}
            disabled={isViewer}
            className={`${buttonBase} ${
              isViewer ? buttonDisabled : 'bg-green-600 hover:bg-green-500 text-white'
            }`}
          >
            <Save size={18} />
            Guardar plantilla local
          </button>

          <button
            onClick={() => handleSave('away')}
            disabled={isViewer}
            className={`${buttonBase} ${
              isViewer ? buttonDisabled : 'bg-green-600 hover:bg-green-500 text-white'
            }`}
          >
            <Save size={18} />
            Guardar plantilla visitante
          </button>

          <button
            onClick={() => handleLoad('home')}
            disabled={isViewer}
            className={`${buttonBase} ${
              isViewer ? buttonDisabled : 'bg-yellow-500 hover:bg-yellow-400 text-black'
            }`}
          >
            <Download size={18} />
            Cargar por nombre local
          </button>

          <button
            onClick={() => handleLoad('away')}
            disabled={isViewer}
            className={`${buttonBase} ${
              isViewer ? buttonDisabled : 'bg-yellow-500 hover:bg-yellow-400 text-black'
            }`}
          >
            <Download size={18} />
            Cargar por nombre visitante
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => handleClearRoster('home')}
            disabled={isViewer}
            className={`${buttonBase} ${
              isViewer ? buttonDisabled : 'bg-slate-700 hover:bg-slate-600 text-white'
            }`}
          >
            <Trash2 size={18} />
            Vaciar local
          </button>

          <button
            onClick={() => handleClearRoster('away')}
            disabled={isViewer}
            className={`${buttonBase} ${
              isViewer ? buttonDisabled : 'bg-slate-700 hover:bg-slate-600 text-white'
            }`}
          >
            <Trash2 size={18} />
            Vaciar visitante
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2">
            <select
              value={selectedHomeTemplate}
              onChange={(e) => setSelectedHomeTemplate(e.target.value)}
              disabled={isViewer}
              className="h-12 rounded-xl px-3 text-sm bg-slate-950 border border-slate-800 text-white outline-none"
            >
              <option value="">Equipo guardado local...</option>
              {sortedTeams.map((teamKey: string) => (
                <option key={teamKey} value={teamKey}>
                  {formatTeamLabel(teamKey)}
                </option>
              ))}
            </select>

            <button
              onClick={() => handleLoadFromSelector('home')}
              disabled={isViewer}
              className={`${buttonBase} ${
                isViewer ? buttonDisabled : 'bg-cyan-600 hover:bg-cyan-500 text-white'
              }`}
            >
              <Download size={18} />
              Cargar selección local
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <select
              value={selectedAwayTemplate}
              onChange={(e) => setSelectedAwayTemplate(e.target.value)}
              disabled={isViewer}
              className="h-12 rounded-xl px-3 text-sm bg-slate-950 border border-slate-800 text-white outline-none"
            >
              <option value="">Equipo guardado visitante...</option>
              {sortedTeams.map((teamKey: string) => (
                <option key={teamKey} value={teamKey}>
                  {formatTeamLabel(teamKey)}
                </option>
              ))}
            </select>

            <button
              onClick={() => handleLoadFromSelector('away')}
              disabled={isViewer}
              className={`${buttonBase} ${
                isViewer ? buttonDisabled : 'bg-orange-500 hover:bg-orange-400 text-white'
              }`}
            >
              <Download size={18} />
              Cargar selección visitante
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <h4 className="text-blue-500 font-bold text-xs mb-3 tracking-wide">
            LOCAL {homeTeam ? `- ${homeTeam}` : ''}
          </h4>

          <div className="flex flex-col gap-2">
            {homeRoster.length === 0 && (
              <p className="text-slate-500 text-xs italic">Sin jugadores</p>
            )}

            {homeRoster.map((p: any) => (
              <div
                key={p.id}
                className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-lg px-3 py-2"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-blue-400 font-bold text-xs w-8 text-center shrink-0">
                    #{p.number}
                  </span>
                  <span className="text-white text-sm font-medium truncate">
                    {p.name}
                  </span>
                </div>

                {!isViewer && (
                  <button
                    onClick={() => handleRemove('home', p.id, p.name)}
                    className="text-slate-400 hover:text-red-400 transition shrink-0"
                  >
                    <UserMinus size={18} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <h4 className="text-red-500 font-bold text-xs mb-3 tracking-wide">
            VISITANTE {awayTeam ? `- ${awayTeam}` : ''}
          </h4>

          <div className="flex flex-col gap-2">
            {awayRoster.length === 0 && (
              <p className="text-slate-500 text-xs italic">Sin jugadores</p>
            )}

            {awayRoster.map((p: any) => (
              <div
                key={p.id}
                className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-lg px-3 py-2"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-red-400 font-bold text-xs w-8 text-center shrink-0">
                    #{p.number}
                  </span>
                  <span className="text-white text-sm font-medium truncate">
                    {p.name}
                  </span>
                </div>

                {!isViewer && (
                  <button
                    onClick={() => handleRemove('away', p.id, p.name)}
                    className="text-slate-400 hover:text-red-400 transition shrink-0"
                  >
                    <UserMinus size={18} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};