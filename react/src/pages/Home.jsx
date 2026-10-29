import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to React Examples</h1>
            <ul>
                <li><Link to="/practice-1">Practice-01: Auto-updating Counter</Link></li>
                <li><Link to="/practice-2">Practice-02: API Fetching Component</Link></li>
                <li><Link to="/practice-3">Practice-03: Heavy Search Component</Link></li>
                <li><Link to="/practice-4">Practice-04: Memoization Demo</Link></li>
                <li><Link to="/practice-5">Practice-05: Login</Link></li>
            </ul>
        </div>
    );
}

export default Home;