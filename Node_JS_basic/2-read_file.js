const fs = require('fs');

function countStudents(path) {
  try {
    const contenu = fs.readFileSync(path, 'utf8');
    const lines = contenu.split('\n').filter((line) => line.length > 0);
    const studentLines = lines.slice(1);

    console.log(`Number of students: ${studentLines.length}`);

    const fields = {};

    studentLines.forEach((line) => {
      const colonnes = line.split(',');
      const firstName = colonnes[0];
      const field = colonnes[3];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    Object.keys(fields).forEach((field) => {
      const Listeprenom = fields[field];
      console.log(`Number of students in ${field}: ${Listeprenom.length}. List: ${Listeprenom.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
