export default function cleanSets(set, startstring) {
  if (!startstring || typeof startstring !== 'string') {
    return '';
  }
  const partie = [];

  for (const valeur of set) {
    if (typeof valeur === 'string' && valeur.startsWith(startstring)) {
      partie.push(valeur.slice(startstring.length));
    }
  }
  return partie.join('-');
}
