const argv = require('./config/yargs.js');
const { crearTabla } = require('./helpers/multiply.js');

console.clear();

crearTabla(argv.b, argv.l , argv.s).then((el) => console.log(el)).catch((err) => console.log(err));
