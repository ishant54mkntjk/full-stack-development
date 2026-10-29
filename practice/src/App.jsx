import { Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Day01 from './pages/Day01';
import Day02 from './pages/Day02';
import Day03 from './pages/Day03';
import Day04 from './pages/Day04';
import Day05 from './pages/Day05';
import Practice1 from './pages/Practice1';
import Practice2 from './pages/Practice2';
import Practice3 from './pages/Practice3';
import Practice4 from './pages/Practice4';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AppLayout from './components/AppLayout';
import { useSelector } from 'react-redux';

function App() {
    const user = useSelector(state => state.user);

    return (
        <AppLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                
                {/* Day 1 to 5 Solutions */}
                <Route path="/day-01" element={<Day01 />} />
                <Route path="/day-02" element={<Day02 />} />
                <Route path="/day-03" element={<Day03 />} />
                <Route path="/day-04" element={<Day04 />} />
                <Route path="/day-05" element={<Day05 />} />

                {/* Original practice pages */}
                <Route path="/practice-1" element={<Practice1 />} />
                <Route path="/practice-2" element={<Practice2 />} />
                <Route path="/practice-3" element={<Practice3 />} />
                <Route path="/practice-4" element={<Practice4 />} />
                
                {/* Day 3 Route Guards */}
                <Route path="/practice-5" element={user ? <Navigate to="/dashboard" /> : <Login />} />
                <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/practice-5" />} />
            </Routes>
        </AppLayout>
    );
}

export default App;
