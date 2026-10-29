import { useState, useRef, useEffect, memo, useCallback, useMemo } from 'react';

// =================== Task 1: Timer with useRef vs Boolean State ===================
function TimerDemo() {
    // Correct way: useRef holds mutable interval ID across renders without causing re-render
    const [refCounter, setRefCounter] = useState(0);
    const timerRef = useRef(null);

    // Faulty way: Using a regular boolean variable
    const [boolCounter, setBoolCounter] = useState(0);
    let isRunningVar = false; // Gets reset to false on EVERY re-render!

    const handleRefStart = () => {
        if (timerRef.current) return;
        timerRef.current = setInterval(() => {
            setRefCounter(prev => prev + 1);
        }, 1000);
    };

    const handleRefStop = () => {
        if (timerRef.current === null) return;
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    const handleBoolStart = () => {
        // Because `let isRunningVar` resets to false on every render,
        // multiple clicks spawn duplicate intervals that run concurrently!
        if (isRunningVar) return;
        isRunningVar = true;
        setInterval(() => {
            setBoolCounter(prev => prev + 1);
        }, 1000);
    };

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1, padding: '10px', background: '#e8f5e9', borderRadius: '4px' }}>
                <h4>Using `useRef` (Correct):</h4>
                <p>Timer: <strong>{refCounter}s</strong></p>
                <button onClick={handleRefStart}>Start</button>
                <button onClick={handleRefStop} style={{ marginLeft: '10px' }}>Stop</button>
                <p style={{ fontSize: '0.85em', color: '#333' }}>
                    `useRef` persists the interval ID across renders and doesn't trigger re-renders itself.
                </p>
            </div>

            <div style={{ flex: 1, padding: '10px', background: '#ffebee', borderRadius: '4px' }}>
                <h4>Using regular boolean variable:</h4>
                <p>Timer: <strong>{boolCounter}s</strong></p>
                <button onClick={handleBoolStart}>Start (Click 3 times)</button>
                <p style={{ fontSize: '0.85em', color: '#c62828' }}>
                    Notice: Clicking multiple times spawns multiple timers speeding up the count because local variables re-initialize on every render!
                </p>
            </div>
        </div>
    );
}

// =================== Task 2: UserProfile useEffect Dependency Array ===================
function UserProfileTask({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [fetchCount, setFetchCount] = useState(0);

    // Correct useEffect with dependency array [userId]
    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setUser(data);
                    setLoading(false);
                    setFetchCount(prev => prev + 1);
                }
            })
            .catch(err => {
                console.error(err);
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, [userId]);

    return (
        <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '4px' }}>
            <p><strong>Total Fetches Performed:</strong> {fetchCount}</p>
            {loading ? <p>Loading user data...</p> : user && (
                <div>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>City:</strong> {user.address?.city}</p>
                </div>
            )}
            <div style={{ marginTop: '10px', padding: '8px', background: '#fff3cd', borderRadius: '4px' }}>
                <strong>What happens if dependency array is removed?</strong>
                <p style={{ margin: '5px 0 0 0', fontSize: '0.9em' }}>
                    Without `[]` or `[userId]`, `useEffect` runs after <em>every</em> render. When `setUser(data)` updates state,
                    a new render is triggered, running `useEffect` again indefinitely, causing an <strong>infinite network fetch loop</strong> and browser lockup.
                </p>
            </div>
        </div>
    );
}

// =================== Task 3: Memoization with vs without memo/useCallback/useMemo ===================
const OptimizedList = memo(({ items, onAddToCart, renderCountRef }) => {
    renderCountRef.current += 1;
    return (
        <div style={{ background: '#e3f2fd', padding: '10px', borderRadius: '4px', marginTop: '10px' }}>
            <p>Optimized List Render Count: <strong>{renderCountRef.current}</strong></p>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} <button onClick={() => onAddToCart(item.id)}>Add</button>
                    </li>
                ))}
            </ul>
        </div>
    );
});

function Day02() {
    const [activeUserId, setActiveUserId] = useState(1);
    const [query, setQuery] = useState('');
    const [dummyState, setDummyState] = useState(0);

    const items = useMemo(() => [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Orange' },
        { id: 3, name: 'Banana' },
        { id: 4, name: 'Pineapple' },
        { id: 5, name: 'Mango' }
    ], []);

    const filteredItems = useMemo(() => {
        return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    }, [query, items]);

    const handleAddToCart = useCallback((id) => {
        alert(`Added item ${id} to cart!`);
    }, []);

    const renderCountRef = useRef(0);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Day-02 Practice Tasks & Solutions</h2>

            {/* Task 1 */}
            <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h3>1. Replacing `timerRef` with Boolean Variable (Understanding `useRef`)</h3>
                <TimerDemo />
            </section>

            {/* Task 2 */}
            <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h3>2. `useEffect` Dependency Array Behavior in `UserProfile.jsx`</h3>
                <div style={{ marginBottom: '10px' }}>
                    <button onClick={() => setActiveUserId(1)} style={{ marginRight: '8px' }}>User 1</button>
                    <button onClick={() => setActiveUserId(2)} style={{ marginRight: '8px' }}>User 2</button>
                    <button onClick={() => setActiveUserId(3)}>User 3</button>
                </div>
                <UserProfileTask userId={activeUserId} />
            </section>

            {/* Task 3 */}
            <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h3>3. Optimization with `useMemo`, `memo`, and `useCallback`</h3>
                <p>Type in the search or click "Trigger Unrelated Parent Render" to see how memoization prevents useless re-renders:</p>
                <input 
                    placeholder="Search fruit..." 
                    value={query} 
                    onChange={e => setQuery(e.target.value)} 
                    style={{ padding: '6px', marginRight: '10px' }}
                />
                <button onClick={() => setDummyState(prev => prev + 1)} style={{ padding: '6px 12px' }}>
                    Trigger Unrelated Parent Render ({dummyState})
                </button>
                <OptimizedList items={filteredItems} onAddToCart={handleAddToCart} renderCountRef={renderCountRef} />
            </section>
        </div>
    );
}

export default Day02;
