import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
    // const { user } = useContext(AuthContext);
    const user = useSelector(state => state.user);

    return (
        <div>
            <h2>Welcome, {user.name}!</h2>
            <p>This is where wonders happen</p>
        </div>
    );
}

export default Dashboard;