function getListStudentIds(students) {
    // Check if the input is an array, if not return an empty array
    if (!Array.isArray(students)) {
        return [];
    }
    
    // Use the map function to extract the ids from the list of students
    return students.map(student => student.id);
}
