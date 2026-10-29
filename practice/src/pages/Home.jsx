import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>React Practice (Days 1 to 5)</h1>
            <p>Welcome to the completed practice repository solving all assigned practice problems:</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                    <h3><Link to="/day-01">📅 Day-01: React Fundamentals & Components</Link></h3>
                    <p>Exports vs default exports, returning non-JSX, props reading alternatives, key prop essentials, and student list filtering.</p>
                </div>

                <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                    <h3><Link to="/day-02">📅 Day-02: Hooks Mastery (useRef, useEffect, useMemo, useCallback)</Link></h3>
                    <p>useRef mutable timers vs boolean traps, useEffect dependency arrays & infinite loops, and memoization benchmarking.</p>
                </div>

                <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                    <h3><Link to="/day-03">📅 Day-03: Forms & Route Guards</Link></h3>
                    <p>Why event.preventDefault() is critical, controlled forms, validation, and conditional route guards.</p>
                </div>

                <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                    <h3><Link to="/day-04">📅 Day-04: LocalStorage & State Persistence</Link></h3>
                    <p>Preventing state loss on page refresh (Ctrl+R) by persisting auth user in localStorage alongside Redux.</p>
                </div>

                <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                    <h3><Link to="/day-05">📅 Day-05: Redux Toolkit & Multiple State Slices</Link></h3>
                    <p>@reduxjs/toolkit vs react-redux distinction, managing user, counter, and theme slices with state and actions.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
