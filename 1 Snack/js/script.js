// Jsnack1 - Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

var oggetto = {
  'nome' : 'palla',
  'peso' : '10'
};

var utente = parseInt(prompt('Inserisci il peso che vuoi dare alla palla..'));

oggetto.peso = utente;

console.log(oggetto);
