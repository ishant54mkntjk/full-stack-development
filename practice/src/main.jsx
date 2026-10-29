// React's Entry Point function
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Provider store={store}>
          <App />
        </Provider>
      {/* </AuthProvider> */}
    </BrowserRouter>
  </StrictMode>
)
