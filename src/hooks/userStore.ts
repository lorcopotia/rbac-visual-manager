import create from 'zustand';

interface State {
  // Define el estado global aquí
}

export const useStore = create<State>((set) => ({
  // Define las acciones y el estado inicial
}));
