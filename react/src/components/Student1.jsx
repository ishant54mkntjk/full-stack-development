/**
 * Example: First Javascript Component!
 */

function Student() {
    let name = "John Cena";
    let rollNumber = 10;

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