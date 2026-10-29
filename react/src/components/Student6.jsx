/**
 * Practice Problem: Filtering a list
 */
function Student({ studentList }) { // studentList is an array of student objects
    
    /** 
     * Make use of .filter() function to remove students
     * who got less than 75 percentage.
    */

    return (
        <>
            <h2>Student Data</h2>
            { studentList.map(student => (
                <div key={student.rollNumber}>
                    <p>Name: {student.name}</p>
                    <p>RollNumber: {student.rollNumber}</p>
                    <p>Percentage: {student.percentage}</p>
                </div>
            )) }
        </>
    );
}

export default Student;