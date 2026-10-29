/**
 * Memoization Demonstration for better understanding
 */
import { useState, useMemo } from 'react';

function slowFunction(num) {
    console.log('Running expensive calculation...');
    for (let i = 0; i <= 1000000000; i++) {} // Heavy loop
    return num * 2;
}

function Practice4() {
  const [number, setNumber] = useState(0);
  const [rerender, setRerender] = useState(0);

  // const doubleNumber = slowFunction(number);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)} 
      />
      <div>Calculated Result: {doubleNumber}</div>
      <br/>
      <button onClick={() => setRerender(prev => prev + 1)}>
        Increase Count
      </button>
      Count: {rerender}
    </div>
  );
}

export default Practice4;