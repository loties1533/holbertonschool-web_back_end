# ES6 Basic - Synthèse du projet

## Objectifs
Modernisation du code JavaScript en utilisant les standards ES6+ pour améliorer la lisibilité et la maintenance.

## 🛠 Concepts clés
- **Variables** : Utilisation systématique de `const` (valeur fixe) et `let` (valeur changeante). Suppression définitive de `var`.
- **Objets** : 
    - *Computed Property Names* : `[variable]: valeur` pour des clés dynamiques.
    - *Method Shorthand* : `maMethode() {}` au lieu de `maMethode: function() {}`.
    - *Spread Operator* : `...objet` pour fusionner ou copier des données rapidement.
- **Boucles** : Utilisation de `for...of` pour parcourir les valeurs des tableaux proprement.

## 💡 Tips
1. **Linter** : Toujours vérifier la virgule finale (*trailing comma*) dans les objets pour valider le style Airbnb.
2. **Immuabilité** : Préférer créer un nouvel objet plutôt que de modifier l'original pour éviter les effets de bord.
3. **Template Strings** : Utiliser les backticks ( ` ) pour injecter des variables avec `${}`.

4. **Tests** : chaque fichiers tester avec npm run lint