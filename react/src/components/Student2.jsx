/**
 * Example: Passing the Props to a component
 */

function Student({ name = 'John Cena', rollNumber = 10 }) {
    return (
        <div>
            <h1>Student Data</h1>
            <p>
                Name: {name}
            </p>
            <p>
                Roll Number: {rollNumber}
            </p>
        </div>
    );
}

export default Student;