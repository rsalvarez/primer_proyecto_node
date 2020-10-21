const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar');
let comando = argv._[0];
//console.log(comando);

switch (comando) {
    case "listar":

        crearArchivo(argv.base, argv.limite, false).then(
                archivo => console.log(archivo.underline.red))
            .catch(err => {
                console.log(err);
            });
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite, true).then(archivo => console.log(archivo))
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        console.log("comando no reconocido");


}