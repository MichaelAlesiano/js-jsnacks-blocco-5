// Jsnack3 - Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var scatola = [
  {
    'varieta' : 'striata di Napoli',
    'peso' : 10,
    'lunghezza' : 5,
  },

  {
    'varieta' : 'bianca triestina',
    'peso' : 7,
    'lunghezza' : 14,
  },

  {
    'varieta' : 'rigata pugliese',
    'peso' : 5,
    'lunghezza' : 18,
  },

  {
    'varieta' : 'tondo di Piacenza',
    'peso' : 4,
    'lunghezza' : 13,
  },

  {
    'varieta' : 'tondo di Nizza',
    'peso' : 16,
    'lunghezza' : 4,
  },

  {
    'varieta' : 'tondo di Firenze',
    'peso' : 5,
    'lunghezza' : 7,
  },
];

var menodi = [];
var piudi = [];

for (var i = 0; i < scatola.length; i++) {
  // console.log(scatola[i].lunghezza);
  var zucchina = scatola[i].lunghezza;
  if (scatola[i].lunghezza < 15) {
    menodi.push(scatola[i].lunghezza);
  } else {
    piudi.push(scatola[i].lunghezza);
  }
}

console.log(menodi);
console.log(piudi);
