import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Day04() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [storedUserJson, setStoredUserJson] = useState(() => localStorage.getItem('user') || 'null');
    const [inputName, setInputName] = useState('Alex Rider');
    const [inputEmail, setInputEmail] = useState('alex@example.com');

    const handleLoginAndSave = () => {
        const userData = { name: inputName, email: inputEmail, loggedInAt: new Date().toLocaleTimeString() };
        
        // 1. Save in Redux State
        dispatch({ type: 'LOGIN', payload: userData });

        // 2. Persist in localStorage (Day-04 Task)
        localStorage.setItem('user', JSON.stringify(userData));
        setStoredUserJson(JSON.stringify(userData, null, 2));
    };

    const handleLogoutAndClear = () => {
        // 1. Clear from Redux State
        dispatch({ type: 'LOGOUT' });

        // 2. Remove from localStorage
        localStorage.removeItem('user');
        setStoredUserJson('null');
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Day-04 Practice Tasks & Solutions</h2>

            <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h3>1. Persisting User Object in `localStorage`</h3>
                <p>
                    <strong>Why?</strong> As noted in <em>Notes #1</em>, React wipes out all in-memory state variables on hard refresh (<code>Ctrl + R</code>).
                    By saving the user object to <code>localStorage</code>, we can re-hydrate the state when the application mounts.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
                    <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '6px' }}>
                        <h4>Login Controls</h4>
                        <div style={{ marginBottom: '10px' }}>
                            <label style={{ display: 'block', fontSize: '0.9em' }}>Name:</label>
                            <input 
                                value={inputName} 
                                onChange={e => setInputName(e.target.value)} 
                                style={{ width: '100%', padding: '6px' }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', fontSize: '0.9em' }}>Email:</label>
                            <input 
                                value={inputEmail} 
                                onChange={e => setInputEmail(e.target.value)} 
                                style={{ width: '100%', padding: '6px' }}
                            />
                        </div>
                        <button 
                            onClick={handleLoginAndSave} 
                            style={{ padding: '8px 14px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', marginRight: '10px' }}
                        >
                            Login & Save to LocalStorage
                        </button>
                        <button 
                            onClick={handleLogoutAndClear} 
                            style={{ padding: '8px 14px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}
                        >
                            Logout & Clear
                        </button>
                    </div>

                    <div style={{ background: '#e9ecef', padding: '15px', borderRadius: '6px' }}>
                        <h4>Current Storage Inspection</h4>
                        <p><strong>Redux State:</strong> {user ? JSON.stringify(user) : 'null'}</p>
                        <p><strong>localStorage.getItem('user'):</strong></p>
                        <pre style={{ background: '#fff', padding: '10px', borderRadius: '4px', fontSize: '0.85em' }}>
                            {storedUserJson}
                        </pre>
                        <p style={{ fontSize: '0.85em', color: '#666' }}>
                            💡 Try refreshing the page! Redux state re-hydrates automatically from localStorage during initialization.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Day04;
