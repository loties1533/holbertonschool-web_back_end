class AppController {
  static getHomepage(requete, reponse) {
    reponse.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
