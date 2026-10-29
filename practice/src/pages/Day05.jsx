import { useSelector, useDispatch } from 'react-redux';

function Day05() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const counter = useSelector(state => state.counter);
    const theme = useSelector(state => state.theme);

    return (
        <div style={{ maxWidth: '850px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Day-05 Practice Tasks & Solutions</h2>

            {/* Task 1 */}
            <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h3>1. Difference Between `@reduxjs/toolkit` and `react-redux`</h3>
                <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                        <tr style={{ background: '#f5f5f5' }}>
                            <th>Feature</th>
                            <th><code>@reduxjs/toolkit</code> (Core Logic)</th>
                            <th><code>react-redux</code> (React Glue / Bindings)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Primary Role</strong></td>
                            <td>Creates and configures the Redux store, actions, and reducers.</td>
                            <td>Subscribes React components to the store and re-renders them when data changes.</td>
                        </tr>
                        <tr>
                            <td><strong>Key Exports</strong></td>
                            <td><code>configureStore</code>, <code>createSlice</code>, <code>createAsyncThunk</code></td>
                            <td><code>&lt;Provider&gt;</code>, <code>useSelector</code>, <code>useDispatch</code></td>
                        </tr>
                        <tr>
                            <td><strong>React Specific?</strong></td>
                            <td>No, it is framework-agnostic (can be used in vanilla JS, Vue, Angular, Node.js).</td>
                            <td>Yes, built exclusively to connect React components to Redux.</td>
                        </tr>
                        <tr>
                            <td><strong>Why Both?</strong></td>
                            <td colSpan="2">
                                Redux is a general state container. <code>@reduxjs/toolkit</code> defines <em>how state updates work</em>, while <code>react-redux</code> connects that state tree to the <em>React component lifecycle and hooks</em>.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Task 2 */}
            <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h3>2. Managing Multiple States in Redux (`user`, `counter`, `theme`)</h3>
                <p>
                    Below, we manage <strong>three separate state slices</strong> configured in <code>store.js</code>:
                    Notice how dispatching an action sends <code>type</code> and optional <code>payload</code> to the corresponding reducer.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '15px', marginTop: '15px' }}>
                    {/* User Slice */}
                    <div style={{ background: '#eef2f7', padding: '12px', borderRadius: '6px' }}>
                        <h4>State 1: User</h4>
                        <p><strong>Value:</strong> {user ? `${user.name} (${user.email})` : 'null'}</p>
                        <button 
                            onClick={() => dispatch({ type: 'LOGIN', payload: { name: 'Sarah Connor', email: 'sarah@skynet.com' } })}
                            style={{ marginRight: '8px', padding: '6px 10px' }}
                        >
                            Login Sarah
                        </button>
                        <button 
                            onClick={() => dispatch({ type: 'LOGOUT' })}
                            style={{ padding: '6px 10px' }}
                        >
                            Logout
                        </button>
                    </div>

                    {/* Counter Slice */}
                    <div style={{ background: '#e8f5e9', padding: '12px', borderRadius: '6px' }}>
                        <h4>State 2: Counter</h4>
                        <p><strong>Value:</strong> <span style={{ fontSize: '1.4em', fontWeight: 'bold' }}>{counter}</span></p>
                        <button 
                            onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}
                            style={{ marginRight: '6px', padding: '6px 12px' }}
                        >
                            +1
                        </button>
                        <button 
                            onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}
                            style={{ marginRight: '6px', padding: '6px 12px' }}
                        >
                            -1
                        </button>
                        <button 
                            onClick={() => dispatch({ type: 'RESET' })}
                            style={{ padding: '6px 10px' }}
                        >
                            Reset
                        </button>
                    </div>

                    {/* Theme Slice */}
                    <div style={{ 
                        background: theme === 'dark' ? '#333' : '#fff3cd', 
                        color: theme === 'dark' ? '#fff' : '#000', 
                        padding: '12px', 
                        borderRadius: '6px' 
                    }}>
                        <h4>State 3: Theme</h4>
                        <p><strong>Value:</strong> {theme.toUpperCase()}</p>
                        <button 
                            onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
                            style={{ padding: '6px 12px', cursor: 'pointer' }}
                        >
                            Toggle Theme
                        </button>
                    </div>
                </div>

                <div style={{ marginTop: '20px', padding: '12px', background: '#f8f9fa', borderRadius: '6px', borderLeft: '4px solid #007bff' }}>
                    <strong>Redux Store Inspection:</strong>
                    <pre style={{ margin: '8px 0 0 0' }}>
                        {JSON.stringify({ user, counter, theme }, null, 2)}
                    </pre>
                </div>
            </section>
        </div>
    );
}

export default Day05;
