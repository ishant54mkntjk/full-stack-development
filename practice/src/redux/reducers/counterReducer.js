/**
 * Counter Reducer (Day-05 Task 2)
 * Demonstrates managing a second state slice in Redux alongside 'user'
 * state: integer representing the counter value
 * action: { type: 'INCREMENT' | 'DECREMENT' | 'RESET', payload?: number }
 */
export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + (action.payload || 1);
        case 'DECREMENT':
            return state - (action.payload || 1);
        case 'RESET':
            return 0;
        default:
            return state;
    }
};
