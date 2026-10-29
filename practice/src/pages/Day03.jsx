import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Day03() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logMessage, setLogMessage] = useState('');
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Form submit WITH event.preventDefault()
    const handleSafeSubmit = (e) => {
        e.preventDefault(); // Prevents browser page refresh
        if (email === 'test@test.com' && password === 'test') {
            dispatch({ type: 'LOGIN', payload: { name: 'John Doe', email } });
            setLogMessage('Logged in successfully via Redux! Redirecting to Dashboard...');
            setTimeout(() => navigate('/dashboard'), 1000);
        } else {
            setLogMessage('Invalid credentials! Try test@test.com / test');
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Day-03 Practice Tasks & Solutions</h2>

            {/* Task 1 */}
            <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h3>1. The Purpose of `event.preventDefault()` in Forms</h3>
                <p>
                    By default, submitting an HTML <code>&lt;form&gt;</code> triggers a full browser reload (HTTP GET/POST request),
                    which wipes out all in-memory React state variables.
                </p>
                <div style={{ background: '#fdf7e7', padding: '10px', borderRadius: '4px', marginBottom: '15px' }}>
                    <strong>Observation if commented out:</strong> The page flickers, reloads from the network, and the URL appends form query params (e.g. <code>?email=...</code>), causing the entire React tree to remount and lose its current state.
                </div>

                <form onSubmit={handleSafeSubmit} style={{ maxWidth: '400px' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'block' }}>Email (test@test.com):</label>
                        <input 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            placeholder="test@test.com" 
                            style={{ width: '100%', padding: '6px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'block' }}>Password (test):</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                            placeholder="test" 
                            style={{ width: '100%', padding: '6px' }}
                        />
                    </div>
                    <button type="submit" style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
                        Submit (with preventDefault)
                    </button>
                    {logMessage && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{logMessage}</p>}
                </form>
            </section>

            {/* Task 2 */}
            <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h3>2. Conditional Navigation / Route Guard</h3>
                <p>Current Redux User Status: <strong>{user ? `Logged In as ${user.name}` : 'Not Logged In (null)'}</strong></p>
                <p>
                    Route logic implemented in <code>App.jsx</code>:
                </p>
                <pre style={{ background: '#272822', color: '#f8f8f2', padding: '12px', borderRadius: '4px', overflowX: 'auto' }}>
{`// If user is null -> redirect to Login (/practice-5)
<Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/practice-5" />} />

// If user is logged in -> redirect away from Login to Dashboard
<Route path="/practice-5" element={user ? <Navigate to="/dashboard" /> : <Login />} />`}
                </pre>
                <div style={{ marginTop: '15px' }}>
                    <Link to="/dashboard" style={{ marginRight: '15px' }}>Try Accessing /dashboard</Link>
                    <Link to="/practice-5">Try Accessing /practice-5 (Login)</Link>
                </div>
            </section>
        </div>
    );
}

export default Day03;
