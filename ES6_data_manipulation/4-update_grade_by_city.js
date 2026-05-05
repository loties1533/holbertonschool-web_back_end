export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter((student) => student.location === city)
    .map((student) => {
      const noteTrouvee = newGrades.find((n) => n.studentId === student.id);
      return {
        ...student,
        grade: noteTrouvee ? noteTrouvee.grade : 'N/A',
      };
    });
}
