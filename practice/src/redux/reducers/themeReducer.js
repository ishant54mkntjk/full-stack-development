/**
 * Theme Reducer (Day-05 Task 2)
 * Demonstrates managing another state slice in Redux
 * state: 'light' | 'dark'
 * action: { type: 'TOGGLE_THEME' | 'SET_THEME', payload?: string }
 */
export const themeReducer = (state = 'light', action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return state === 'light' ? 'dark' : 'light';
        case 'SET_THEME':
            return action.payload || 'light';
        default:
            return state;
    }
};
