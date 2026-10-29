/**
 * Practice Problem (Day-01 Task 5): Filtering a list
 * Solved: Make use of .filter() function to remove students who got less than 75 percentage.
 */
function Student6({ studentList = [] }) {
    // Filter students with 75% or higher
    const filteredStudents = studentList.filter(student => student.percentage >= 75);

    return (
        <div style={{ marginTop: '10px' }}>
            <h4>Student Data (Filtered: &gt;= 75%)</h4>
            {filteredStudents.length === 0 ? (
                <p>No students scored 75% or above.</p>
            ) : (
                <table border="1" cellPadding="6" style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f0f0f0' }}>
                            <th>Roll Number</th>
                            <th>Name</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map(student => (
                            <tr key={student.rollNumber}>
                                <td>{student.rollNumber}</td>
                                <td>{student.name}</td>
                                <td style={{ color: 'green', fontWeight: 'bold' }}>{student.percentage}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Student6;
