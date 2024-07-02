function updateStudentGradeByCity(students, city, newGrades) {
    // Filter students based on the city
    return students
        .filter(student => student.location === city)
        .map(student => {
            // Find the grade object for the current student
            const gradeObj = newGrades.find(grade => grade.studentId === student.id);
            // Return a new student object with the updated grade
            return {
                ...student,
                grade: gradeObj ? gradeObj.grade : 'N/A'
            };
        });
}
