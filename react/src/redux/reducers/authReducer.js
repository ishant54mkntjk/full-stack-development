/**
 * Whenever you invoke useDispatcher to update the value, useDispatcher
 * calls the reducer and makes the updated value available in `action` object.
 * 
 * action: An object which contains two things: (1) Type of Action, 
 * (2) Payload (updated value).
 * Example action object: { type: 'some-type', payload: { updated value} }
 * 
 * state: This contains all the current values stored in the redux.
 */ 
export const authReducer = (state = null, action) => {
    if (action.type) {
        if (action.type === 'LOGIN') {
            return action.payload;
        } else if (action.type === 'LOGOUT') {
            return null;
        } else {
            return state;
        }
    }
};