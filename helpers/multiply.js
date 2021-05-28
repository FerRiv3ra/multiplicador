const fs = require('fs');

require('colors');

const crearTabla = async (base = 1, limit = 10, show = false) => {
    // return new Promise((res, rej) => {
    try {
        
        let salida = '';
        let consola = '';
        
        for (let i = 1; i <= limit; i++) {
            salida += `${base} x ${i} = ${base * i} ${i < limit ? '\n':''}`;
            consola += `${base} ${'x'.blue} ${i} ${'='.blue} ${base * i} ${i < limit ? '\n':''}`;
        }
        
        if(show){
            console.log('================='.green);
            console.log(`== Tabla del ${base} ==`);
            console.log('================='.green);
            console.log(consola.bold);
        }

        fs.writeFileSync(`./files/tabla-del-${base}.txt`, salida);
        return(`tabla-del-${base}.txt creado`.green);
    } catch (error) {
        throw error;
    }
    // });
}

module.exports = {
    crearTabla
}