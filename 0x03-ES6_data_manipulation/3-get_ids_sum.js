function getStudentIdsSum(students) {
    // Use the reduce function to sum up the student ids
    return students.reduce((sum, student) => sum + student.id, 0);
}
