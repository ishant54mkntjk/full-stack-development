import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
    const user = useSelector(state => state.user);
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    return (
        <header style={{ 
            padding: '12px 20px', 
            background: theme === 'dark' ? '#222' : '#f8f9fa', 
            color: theme === 'dark' ? '#fff' : '#333',
            borderBottom: '1px solid #ddd',
            marginBottom: '20px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <h3 style={{ margin: 0 }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>React Practice (Day 1 - 5)</Link>
                </h3>
                <nav style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Link to="/">Home</Link>
                    <Link to="/day-01">Day-01</Link>
                    <Link to="/day-02">Day-02</Link>
                    <Link to="/day-03">Day-03</Link>
                    <Link to="/day-04">Day-04</Link>
                    <Link to="/day-05">Day-05</Link>
                    {user ? (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <button 
                                onClick={() => dispatch({ type: 'LOGOUT' })}
                                style={{ padding: '4px 8px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                            >
                                Logout ({user.name})
                            </button>
                        </>
                    ) : (
                        <Link to="/practice-5" style={{ fontWeight: 'bold' }}>Login</Link>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;
