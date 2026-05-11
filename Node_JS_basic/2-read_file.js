const fs = require('fs');

function countStudents(path) {
  try {
    const content = fs.readFileSync(path, 'utf8');
    const lines = content.split('\n').filter((line) => line.length > 0);
    const studentLines = lines.slice(1);

    console.log(`Number of students: ${studentLines.length}`);

    const fields = {};

    studentLines.forEach((line) => {
      const columns = line.split(',');
      const firstName = columns[0];
      const field = columns[3];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    Object.keys(fields).forEach((field) => {
      const names = fields[field];
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
