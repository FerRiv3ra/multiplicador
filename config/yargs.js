const argv = require('yargs').option('b', {
    alias: 'base',
    type: 'number',
    describe: 'Es la base de la tabla de multiplicar',
    demandOption: true
}).option('s', {
    alias: 'show',
    type: 'boolean',
    describe: 'Listar o no la tabla en consola',
    default: false
}).option('l', {
    alias: 'limit',
    type: 'number',
    describe: 'Define el límite hasta donde llega la tabla',
    default: 10
}).check((argv, option) => {
        if(isNaN(argv.b)) throw 'La base debe ser un número';
        return true;
}).argv;

module.exports = argv;