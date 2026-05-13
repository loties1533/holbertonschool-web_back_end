import fs from 'fs';

const readDatabase = (chemin) => new Promise((resolve, reject) => {
  fs.readFile(chemin, 'utf8', (erreur, contenu) => {
    if (erreur) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lignes = contenu.split('\n').filter((l) => l.trim().length > 0);
    const etudiants = lignes.slice(1);
    const resultats = {};

    etudiants.forEach((ligne) => {
      const colonnes = ligne.split(',');
      const prenom = colonnes[0];
      const filiere = colonnes[3];

      if (!resultats[filiere]) {
        resultats[filiere] = [];
      }
      resultats[filiere].push(prenom);
    });
    resolve(resultats);
  });
});

export default readDatabase;
