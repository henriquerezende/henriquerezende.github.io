/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const animalsByIds = (...ids) =>
  data.animals.filter(animal => ids.find(id => id === animal.id));

const animalsOlderThan = (animal, age) =>
  data.animals.find(a => a.name === animal).residents.every(a => a.age > age);

const employeeByName = employeeName =>
  data.employees.find(
    ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName,
  ) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id => data.employees.some(({ managers }) => managers.find(i => i === id));

class Employee {
  constructor(id, firstName, lastName, managers = [], responsibleFor = []) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.managers = managers;
    this.responsibleFor = responsibleFor;
  }
}

const addEmployee = (...args) => data.employees.push(new Employee(...args));

const animalCount = (species) => {
  if (species) {
    return data.animals.find(({ name }) => name === species).residents.length;
  }
  return data.animals.reduce((counter, animal) => {
    counter[animal.name] = animal.residents.length;
    return counter;
  }, {});
};

const entryCalculator = entrants => (entrants && Object.keys(entrants).length > 0
  ? Object.keys(entrants)
    .reduce((accumulator, entrant) => (accumulator + (data.prices[entrant] * entrants[entrant])), 0)
  : 0
);

const getResidentsName = (animal, sorted, sex) => {
  const obj = {};
  obj[animal] = data.animals
    .find(element => element.name === animal).residents;
  if (sex) obj[animal] = obj[animal].filter(resident => resident.sex === sex);
  obj[animal] = obj[animal].map(({ name }) => name);
  if (sorted) obj[animal].sort();
  return obj;
};

const animalMap = (options = {}) => {
  const { includeNames, sex, sorted } = options;
  return data.animals.reduce((obj, { name, location }) => {
    if (!obj[location]) obj[location] = [];
    if (!includeNames) {
      obj[location].push(name);
    } else {
      obj[location].push(getResidentsName(name, sorted, sex));
    }
    return obj;
  }, {});
};

const legibleSchedule = day => ((day === 'Monday')
  ? 'CLOSED'
  : `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`);

const schedule = (dayName) => {
  const sch = {};
  if (dayName) {
    sch[dayName] = legibleSchedule(dayName);
    return sch;
  }
  Object.keys(data.hours).forEach((e) => { sch[e] = legibleSchedule(e); });
  return sch;
};

const oldestFromFirstSpecies = id => Object.values(data.animals
  .find(e => e.id === data.employees
    .find(animal => animal.id === id).responsibleFor[0]).residents
  .sort((a, b) => b.age - a.age)[0]);

const increasePrices = (percentage) => {
  Object.keys(data.prices).forEach((e) => {
    (data.prices[e] = Math.round(data.prices[e] * ((percentage / 100) + 1) * 100) / 100);
  });
};

const findResponsibleForAnimals = (e) => {
  const asw = {};
  asw[`${e.firstName} ${e.lastName}`] = e.responsibleFor
    .map(id => data.animals
      .find(animal => animal.id === id).name);
  return asw;
};

const employeeCoverage = (idOrName) => {
  const obj = {};
  if (idOrName) {
    Object.assign(obj, findResponsibleForAnimals(data.employees
      .find(e => ((
        e.id === idOrName)
        || (e.firstName === idOrName)
        || (e.lastName === idOrName)))));
    return obj;
  }
  data.employees.forEach((e) => {
    Object.assign(obj, findResponsibleForAnimals(e));
  });
  return obj;
};

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
