const express = require('express');
const compterEtudiants = require('./3-read_file_async');

const app = express();
const fichierBDD = process.argv[2];

app.get('/', (requete, reponse) => {
  reponse.send('Hello Holberton School!');
});

app.get('/students', (requete, reponse) => {
  compterEtudiants(fichierBDD)
    .then((donneesFormates) => {
      reponse.send(`This is the list of our students\n${donneesFormates}`);
    })
    .catch((erreur) => {
      reponse.send(`This is the list of our students\n${erreur.message}`);
    });
});

app.listen(1245);

module.exports = app;