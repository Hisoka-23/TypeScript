// modules {impoet / export}

import log, * as Utils from './utils';

console.log(Utils.add2Num(2,3));
console.log(Utils.PI);

const calc = new Utils.Calculator();
console.log(calc.add(2, 4));
console.log(calc.divide(2, 4));

//default exports
log('default export');