import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const user = useSelector(state => state.user);

    return (
        <header style={{ 
            padding: '16px 24px', 
            background: '#ffffff', 
            borderBottom: '1px solid #eaeaea', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.15rem' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#111' }}>
                    React Auth App
                </Link>
            </div>

            <nav style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                {user ? (
                    <>
                        <Link to="/dashboard" style={{ textDecoration: 'none', color: '#333' }}>Dashboard</Link>
                        {/* Hint 2: Add link to Logout in the Header */}
                        <Link 
                            to="/logout" 
                            style={{ 
                                textDecoration: 'none', 
                                color: '#dc3545', 
                                fontWeight: '600',
                                padding: '6px 12px',
                                borderRadius: '4px',
                                border: '1px solid #dc3545'
                            }}
                        >
                            Logout
                        </Link>
                        <span style={{ marginLeft: '10px', color: '#28a745', fontWeight: '500' }}>
                            👤 {user.name}
                        </span>
                    </>
                ) : (
                    <>
                        <Link 
                            to="/login" 
                            style={{ 
                                textDecoration: 'none', 
                                color: '#007bff', 
                                fontWeight: '600',
                                padding: '6px 14px',
                                borderRadius: '4px',
                                background: '#e7f1ff'
                            }}
                        >
                            Login
                        </Link>
                        <span style={{ color: '#888' }}>Guest</span>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
