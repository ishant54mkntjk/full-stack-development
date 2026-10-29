import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Dashboard() {
    const user = useSelector(state => state.user);

    return (
        <div style={{
            maxWidth: '650px',
            margin: '40px auto',
            padding: '32px',
            background: '#ffffff',
            borderRadius: '10px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
            <h1 style={{ color: '#1a202c', marginBottom: '8px' }}>Welcome, {user?.name || 'User'}! 🎉</h1>
            <p style={{ color: '#4a5568', fontSize: '1.05rem', lineHeight: '1.6' }}>
                You are currently logged in with email: <strong>{user?.email}</strong>.
            </p>

            <div style={{ marginTop: '24px', padding: '16px', background: '#f7fafc', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#2d3748' }}>Assignment Test Step:</h4>
                <p style={{ margin: 0, color: '#4a5568', fontSize: '0.95rem' }}>
                    Click the <strong>Logout</strong> link in the Header above or the button below to test the <code>Logout</code> component and Redux <code>useDispatch()</code>.
                </p>
            </div>

            <div style={{ marginTop: '28px' }}>
                {/* Link to Logout as per Assignment */}
                <Link 
                    to="/logout"
                    style={{
                        display: 'inline-block',
                        padding: '10px 22px',
                        background: '#dc3545',
                        color: '#ffffff',
                        textDecoration: 'none',
                        borderRadius: '6px',
                        fontWeight: '600'
                    }}
                >
                    Logout from Dashboard
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;
