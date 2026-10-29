import { useState } from 'react';
import Student6 from '../components/Student6';

// Task 2: Component returning non-JSX values
function NonJSXStringComponent() {
    return "Hello, I am a plain string returned directly from a React component, not JSX!";
}

function NonJSXNumberComponent() {
    return 42 * 10;
}

function NonJSXNullComponent() {
    return null; // Renders nothing
}

function NonJSXArrayComponent() {
    return [
        <span key="1" style={{ color: 'blue' }}>[Part 1] </span>,
        <span key="2" style={{ color: 'green' }}>[Part 2] </span>,
        <span key="3" style={{ color: 'red' }}>[Part 3]</span>
    ];
}

// Task 3: Component reading props WITHOUT destructuring
function PropsWithoutDestructuring(props) {
    return (
        <div style={{ background: '#eef', padding: '10px', borderRadius: '4px' }}>
            <p><strong>Read via `props.title`:</strong> {props.title}</p>
            <p><strong>Read via `props.role`:</strong> {props.role}</p>
            <p><strong>Read via `props['skill']`:</strong> {props['skill']}</p>
        </div>
    );
}

function Day01() {
    const [students] = useState([
        { rollNumber: 101, name: 'Alice', percentage: 88 },
        { rollNumber: 102, name: 'Bob', percentage: 65 },
        { rollNumber: 103, name: 'Charlie', percentage: 76 },
        { rollNumber: 104, name: 'Diana', percentage: 54 },
        { rollNumber: 105, name: 'Ethan', percentage: 92 }
    ]);

    const [keyDemoList, setKeyDemoList] = useState(['Task A', 'Task B', 'Task C']);

    const addItemToTop = () => {
        setKeyDemoList([`Task ${Date.now().toString().slice(-4)}`, ...keyDemoList]);
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Day-01 Practice Tasks & Solutions</h2>

            {/* Task 1 */}
            <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h3>1. Difference Between `export` and `default export`</h3>
                <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                        <tr style={{ background: '#f5f5f5' }}>
                            <th>Feature</th>
                            <th>Named Export (`export const`)</th>
                            <th>Default Export (`export default`)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Quantity</strong></td>
                            <td>Multiple per file</td>
                            <td>Only one per file</td>
                        </tr>
                        <tr>
                            <td><strong>Import Syntax</strong></td>
                            <td><code>{`import { ItemName } from './file'`}</code> (Curly braces required)</td>
                            <td><code>{`import AnyName from './file'`}</code> (No curly braces, can rename)</td>
                        </tr>
                        <tr>
                            <td><strong>Best Used For</strong></td>
                            <td>Utility functions, constants, helper libraries</td>
                            <td>The main React component of a module</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Task 2 */}
            <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h3>2. Returning Non-JSX from a Component</h3>
                <p>React components can return valid ReactNode primitives without wrapping them in JSX elements:</p>
                <ul>
                    <li><strong>String:</strong> <NonJSXStringComponent /></li>
                    <li><strong>Number:</strong> <NonJSXNumberComponent /></li>
                    <li><strong>Null (renders nothing):</strong> [<NonJSXNullComponent />]</li>
                    <li><strong>Array of elements:</strong> <NonJSXArrayComponent /></li>
                </ul>
            </section>

            {/* Task 3 */}
            <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h3>3. Alternative Ways to Read Props (Without Destructuring)</h3>
                <p>Instead of <code>{`function Card({ title, role })`}</code>, receive the entire <code>props</code> object:</p>
                <PropsWithoutDestructuring title="Full Stack Developer" role="Engineer" skill="React & MERN" />
            </section>

            {/* Task 4 */}
            <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h3>4. Why `key` is Essential When Rendering Lists</h3>
                <p>
                    React uses keys to identify which items have changed, been added, or been removed.
                    Using stable, unique keys (like IDs) ensures React only updates modified elements instead of re-rendering the entire list or mixing up uncontrolled state (like inputs).
                </p>
                <button onClick={addItemToTop} style={{ padding: '6px 12px', cursor: 'pointer' }}>
                    + Add New Item to Top
                </button>
                <ul style={{ marginTop: '10px' }}>
                    {keyDemoList.map((item) => (
                        <li key={item} style={{ padding: '4px 0' }}>
                            {item} <input placeholder="Type something to test state retention" style={{ marginLeft: '10px' }} />
                        </li>
                    ))}
                </ul>
            </section>

            {/* Task 5 */}
            <section style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
                <h3>5. Filter Student List (Example 6 Problem Solved)</h3>
                <p>Original students: Alice (88%), Bob (65%), Charlie (76%), Diana (54%), Ethan (92%).</p>
                <Student6 studentList={students} />
            </section>
        </div>
    );
}

export default Day01;
