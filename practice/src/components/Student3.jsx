/**
 * Example: Conditional Rendering
 */

function Student({ name = 'John Cena', rollNumber = 10, percentage = 0 }) {
    return (
        <div>
            <h3>Student Result</h3>
            <p>
                Name: {name}
            </p>
            <p>
                Roll Number: {rollNumber}
            </p>
            <p>
                { percentage >= 33.0 && (
                    <p>
                        Result: Passed
                    </p>
                ) }

                { percentage < 33.0 && (
                    <p>
                        Result: Fail
                    </p>
                )}
            </p>
        </div>
    );
}

export default Student;