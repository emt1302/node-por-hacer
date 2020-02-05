const opts = {
    descripcion:{
        demand:true,
        alias:'d'
    },
    completado:{
            alias:'c',
            default: true,
            desc: 'Marca como completado o pendiente'
        }
    
    
}
const argv = require('yargs')
            .command('crear','Crea un elemento por hacer',opts)
            .command('actualizar','Actualiza el estado de una tarea',opts)
            .command('borrar','Borra un registro del archivo JSON',opts)
            .help()
            .argv;

module.exports = {
    argv
};