const http = require('http');
const fs = require('fs');

function compterEtudiants(chemin) {
  return new Promise((resolve, reject) => {
    fs.readFile(chemin, 'utf8', (erreur, donnees) => {
      if (erreur) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lignes = donnees.trim().split('\n').filter((ligne) => ligne.length > 0);
      const lignesEtudiants = lignes.slice(1);
      let affichage = `Number of students: ${lignesEtudiants.length}\n`;
      const groupes = {};

      lignesEtudiants.forEach((ligne) => {
        const [prenom, , , domaine] = ligne.split(',');
        if (!groupes[domaine]) groupes[domaine] = [];
        groupes[domaine].push(prenom);
      });

      const nomsDomaines = Object.keys(groupes).sort();
      nomsDomaines.forEach((nom, index) => {
        affichage += `Number of students in ${nom}: ${groupes[nom].length}. List: ${groupes[nom].join(', ')}`;
        if (index < nomsDomaines.length - 1) affichage += '\n';
      });

      resolve(affichage);
    });
  });
}

const app = http.createServer((requete, reponse) => {
  reponse.writeHead(200, { 'Content-Type': 'text/plain' });

  if (requete.url === '/') {
    reponse.end('Hello Holberton School!');
  } else if (requete.url === '/students') {
    const fichierBDD = process.argv[2];
    reponse.write('This is the list of our students\n');

    compterEtudiants(fichierBDD)
      .then((donneesFormatees) => {
        reponse.end(donneesFormatees);
      })
      .catch((erreur) => {
        reponse.end(erreur.message);
      });
  }
});

app.listen(1245);

module.exports = app;
