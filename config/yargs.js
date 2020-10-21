const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Lista el contenido de la tabla', opts)
    .help().command('crear', 'Crear archivo', opts)
    .help()
    .argv;

//console.log(argv);
module.exports = {
    argv
}