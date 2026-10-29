import { Route, Routes, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AppLayout from './components/AppLayout';
import Logout from './components/Logout';
import { useSelector } from 'react-redux';

function App() {
    const user = useSelector(state => state.user);

    return (
        <AppLayout>
            <Routes>
                {/* Home route automatically directs to Dashboard if logged in, or Login if not */}
                <Route 
                    path="/" 
                    element={user ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} 
                />

                {/* Login Route */}
                <Route 
                    path="/login" 
                    element={user ? <Navigate to="/dashboard" replace /> : <Login />} 
                />

                {/* Dashboard Route (Protected) */}
                <Route 
                    path="/dashboard" 
                    element={user ? <Dashboard /> : <Navigate to="/login" replace />} 
                />

                {/* Assignment Requirement: Logout Component Route */}
                <Route 
                    path="/logout" 
                    element={<Logout />} 
                />

                {/* Fallback */}
                <Route 
                    path="*" 
                    element={<Navigate to="/" replace />} 
                />
            </Routes>
        </AppLayout>
    );
}

export default App;
