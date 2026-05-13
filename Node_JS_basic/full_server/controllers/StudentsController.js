import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const cheminFichier = process.argv[2];

    readDatabase(cheminFichier)
      .then((domaines) => {
        const lignesAffichage = ['This is the list of our students'];
        const filieresTriees = Object.keys(domaines).sort((a, b) => (
          a.toLowerCase().localeCompare(b.toLowerCase())
        ));

        for (const f of filieresTriees) {
          const listePrenoms = domaines[f].join(', ');
          lignesAffichage.push(`Number of students in ${f}: ${domaines[f].length}. List: ${listePrenoms}`);
        }

        response.status(200).send(lignesAffichage.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const cheminFichier = process.argv[2];
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(cheminFichier)
      .then((domaines) => {
        const etudiants = domaines[major] || [];
        response.status(200).send(`List: ${etudiants.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
