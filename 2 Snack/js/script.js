// Jsnack2 - Creare un array che contiene 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

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

var pesoZucchine = 0;

for (var i = 0; i < scatola.length; i++) {
  // console.log(scatola[i].peso);
  pesoZucchine = pesoZucchine + scatola[i].peso;
}

console.log(pesoZucchine);
