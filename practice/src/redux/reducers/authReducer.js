/**
 * authReducer (Day-04 and Day-05)
 * Initializes state from localStorage if available
 */
const initialUser = (() => {
    try {
        const saved = localStorage.getItem('user');
        return saved ? JSON.parse(saved) : null;
    } catch {
        return null;
    }
})();

export const authReducer = (state = initialUser, action) => {
    switch (action.type) {
        case 'LOGIN':
            if (action.payload) {
                localStorage.setItem('user', JSON.stringify(action.payload));
            }
            return action.payload;
        case 'LOGOUT':
            localStorage.removeItem('user');
            return null;
        default:
            return state;
    }
};
