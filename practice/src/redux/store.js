import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/authReducer';
import { counterReducer } from './reducers/counterReducer';
import { themeReducer } from './reducers/themeReducer';

/**
 * Redux Store managing multiple states (Day-05 Task 2)
 */
export const store = configureStore({
    reducer: {
        user: authReducer,
        counter: counterReducer,
        theme: themeReducer
    }
});
