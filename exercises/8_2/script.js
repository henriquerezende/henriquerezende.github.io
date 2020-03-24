const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


const addKey = ( obj, key, value) => {
    obj[key] = value;
}

const getKeys = (obj) => Object.keys(obj);
const objLength = (obj) => getKeys(obj).length;
const getValues = (obj) => Object.values(obj);
const allLessons = Object.assign( {}, {lesson1, lesson2, lesson3})
const totalStudents = () => {
    let sum = 0;
    Object.values(allLessons).forEach( e => { sum += e.numeroEstudantes});
    return sum;
}
const getValueByNumber = (obj, n) => Object.values(obj)[n];
const verifyPair = (obj, key, value) => (obj[key] === value);

const totalMathStudents = () => {
    let sum = 0;
    Object.values(allLessons).forEach( e => { if(e.materia === 'Matemática') sum += e.numeroEstudantes});
    return sum;
}

const createReport = (teacher) => {
    let result = {};
    let sum = 0;
    result.professor = teacher;
    result.aulas = [];
    Object.values(allLessons).forEach( e => { 
        if( e.professor === teacher ) {
            result.aulas.push(e.materia);
            sum += e.numeroEstudantes;
        }
    })
    result.estudantes = sum;
    return result;
}

console.log(createReport('Maria Clara'));
console.log(totalMathStudents());

addKey( lesson2, 'turno', 'manhã');
