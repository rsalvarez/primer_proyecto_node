const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');



let crearArchivo = (base, limite, crear) => {
    return new Promise((resolve, reject) => {
        //let base = 10;
        let data = '';

        if (!Number(base)) {
            reject('La base no es un numero ' + base);
        }


        for (let i = 1; i <= limite; i++) {
            data += `Base ${base} * ${i} = ${base * i}\n`;

        }

        if (!crear) {
            console.log(("== Tabla del " + base + " hasta el " + limite + "===").green);
            console.log("=======================".green);
            console.log("=======================".green);
            resolve(data);
        } else {

            fs.writeFile(`./tablas/tabla_${base}.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`./tablas/tabla_${base}.txt`);
            });

        }
    });

}

module.exports = {
    crearArchivo
}