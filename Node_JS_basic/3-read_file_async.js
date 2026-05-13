const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim().length > 0);
      const studentLines = lines.slice(1);

      let output = '';
      
      const msgTotal = `Number of students: ${studentLines.length}`;
      console.log(msgTotal);
      output += msgTotal;

      const fields = {};
      const order = [];

      studentLines.forEach((line) => {
        const colonnes = line.split(',');
        const firstName = colonnes[0];
        const field = colonnes[3];

        if (!fields[field]) {
          fields[field] = [];
          order.push(field);
        }
        fields[field].push(firstName);
      });

      order.forEach((field) => {
        const Listeprenom = fields[field];
        const msgField = `Number of students in ${field}: ${Listeprenom.length}. List: ${Listeprenom.join(', ')}`;
        
        console.log(msgField);
        output += `\n${msgField}`;
      });

      resolve(output); 
    });
  });
}

module.exports = countStudents;
