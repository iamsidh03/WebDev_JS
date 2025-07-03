const lodash=require('lodash')
const names=['Sid', 'Siddharth', 'Siddharth']
const capitalizedNames=lodash.map(names,lodash.upperCase);
console.log(capitalizedNames);
