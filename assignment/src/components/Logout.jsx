import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Logout Component
 * Requirement: Create Logout component which should make use of useDispatch to logout.
 */
function Logout() {
    // Hint 1 & 3: Make use of useDispatch in Logout component
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        // Dispatches the LOGOUT action to reset Redux user state
        dispatch({ type: 'LOGOUT' });
    }, [dispatch]);

    return (
        <div style={{
            maxWidth: '480px',
            margin: '60px auto',
            padding: '30px',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            textAlign: 'center',
            background: '#ffffff',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
            <h2 style={{ color: '#2d3748', marginBottom: '12px' }}>Successfully Logged Out</h2>
            <p style={{ color: '#718096', fontSize: '1rem', lineHeight: '1.5' }}>
                You have been logged out using Redux <code>useDispatch()</code>. The user state is now cleared.
            </p>

            <div style={{ marginTop: '24px' }}>
                <Link 
                    to="/login"
                    style={{
                        display: 'inline-block',
                        padding: '10px 24px',
                        background: '#007bff',
                        color: '#ffffff',
                        textDecoration: 'none',
                        borderRadius: '6px',
                        fontWeight: '600'
                    }}
                >
                    Log In Again
                </Link>
            </div>
        </div>
    );
}

export default Logout;
