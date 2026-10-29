import { useState, useRef } from 'react';

function Practice1() {
    const [counter, setCounter] = useState(0);

    // Practice: Replace timerRef with boolean.
    const timerRef = useRef(null); // Using this to ensure user doesn't double click the start timer button.

    const handleStart = () => {
        if (timerRef.current) return;

        timerRef.current = setInterval(() => {
            // Stale closure!
            // setCounter(counter + 1);   

            // Fixing the stale state trap
            setCounter(prev => prev + 1);
        }, 1000);
    };

    const handleStop = () => {
        if (timerRef.current === null) return;

        clearInterval(timerRef.current);
        timerRef.current = null; // Reset the ref.
    };

    return (
        <div>
            <h2>Auto-updating Timer</h2>
            <p>Timer: {counter}</p>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </div>
    );
}

export default Practice1;