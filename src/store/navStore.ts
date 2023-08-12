import { create } from 'zustand';

interface IState {
    topic: String,
    isMainNavbarCollapsed: true | false,
}

interface IAction {
    setTopic: (newTopic: String) => void,
    toggleIsMainNavbarCollapsed: () => void,
}

export const useNavStore = create<IState & IAction>((set) => ({
    topic: '',
    isMainNavbarCollapsed: false,
    setTopic: (newTopic: String) => {
        set({ topic: newTopic })
    },
    toggleIsMainNavbarCollapsed: () => {
        set(state => ({ isMainNavbarCollapsed: !state.isMainNavbarCollapsed }))
    }
}));