const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];



// ex_1
const authorBornIn1947 = () => books.find(e => e.author.birthYear === 1947).author.name;
assert.equal(authorBornIn1947(), 'Stephen King');

// ex_2
const smallerName = () => {
  asw = books[0].name;
  books.forEach(e => {if(e.name.length < asw.length) asw = e.name});
  return asw;
}
assert.equal(smallerName(), 'Duna');

// ex_3 
const fantasyOrScienceFiction = () => books.filter(e => e.genre === 'Fantasia' || e.genre === 'Ficção Científica');
const expected_result1 = [
  {
     id: 1,
     name: 'As Crônicas de Gelo e Fogo',
     genre: 'Fantasia',
     author: {
       name: 'George R. R. Martin',
       birthYear: 1948
     },
     releaseYear: 1991,
   },
   {
     id: 2,
     name: 'O Senhor dos Anéis',
     genre: 'Fantasia',
     author: {
       name: 'J. R. R. Tolkien',
       birthYear: 1892,
     },
     releaseYear: 1954,
   },
   {
     id: 3,
     name: 'Fundação',
     genre: 'Ficção Científica',
     author: {
       name: 'Isaac Asimov',
       birthYear: 1920,
     },
     releaseYear: 1951,
   },
   {
     id: 4,
     name: 'Duna',
     genre: 'Ficção Científica',
     author: {
       name: 'Frank Herbert',
       birthYear: 1920,
     },
     releaseYear: 1965,
   },
 ]

assert.deepEqual(fantasyOrScienceFiction(), expected_result1);

// ex_4


// ex_9
const expected_result2 = 'O Senhor dos Anéis';
const authorWith3DotsOnName = () => books.find(e => e.author.name.split('').filter( e2 => e2 === '.' ).length === 3).name;
const authorWith3DotsOnNameRegex = () => books.find(e => e.author.name.match(/((\..+?\..+?\.))/)).name

assert.deepEqual(authorWith3DotsOnName(), expected_result2);
assert.deepEqual(authorWith3DotsOnNameRegex(), expected_result2);
