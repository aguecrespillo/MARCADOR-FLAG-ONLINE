toggleTimer: () => {
      const state = get() as any;
      const newRunningStatus = !state.isRunning;
      // Actualizamos localmente primero para que la respuesta sea instantánea
      set({ isRunning: newRunningStatus });
      // Luego sincronizamos con la nube
      sync({ isRunning: newRunningStatus });
    },