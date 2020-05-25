const brazilStates = [
  { name: 'Acre', initials: 'AC' },
  { name: 'Alagoas', initials: 'AL' },
  { name: 'Amapá', initials: 'AP' },
  { name: 'Amazonas', initials: 'AM' },
  { name: 'Bahia', initials: 'BA' },
  { name: 'Ceará', initials: 'CE' },
  { name: 'Distrito Federal', initials: 'DF' },
  { name: 'Espírito Santo', initials: 'ES' },
  { name: 'Goiás', initials: 'GO' },
  { name: 'Maranhão', initials: 'MA' },
  { name: 'Mato Grosso', initials: 'MT' },
  { name: 'Mato Grosso do Sul', initials: 'MS' },
  { name: 'Minas Gerais', initials: 'MG' },
  { name: 'Pará', initials: 'PA' },
  { name: 'Paraíba', initials: 'PB' },
  { name: 'Paraná', initials: 'PR' },
  { name: 'Pernambuco', initials: 'PE' },
  { name: 'Piauí', initials: 'PI' },
  { name: 'Rio de Janeiro', initials: 'RJ' },
  { name: 'Rio Grande do Norte', initials: 'RN' },
  { name: 'Rio Grande do Sul', initials: 'RS' },
  { name: 'Rondônia', initials: 'RO' },
  { name: 'Roraima', initials: 'RR' },
  { name: 'Santa Catarina', initials: 'SC' },
  { name: 'São Paulo', initials: 'SP' },
  { name: 'Sergipe', initials: 'SE' },
  { name: 'Tocantins', initials: 'TO' },
];

const paymentMethods = [
  { name: 'Boleto', type: 'barcode' },
  { name: 'MasterCard', type: 'creditCard' },
  { name: 'Visa', type: 'creditCard' },
  { name: 'Elo', type: 'creditCard' },
];

export default brazilStates;
export { paymentMethods, brazilStates };
