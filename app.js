

const  argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
var colors = require('colors');
let comando = argv._[0];

switch(comando){
    case 'crear':
       let tarea = porHacer.crear(argv.descripcion);
       // console.log("Crear por hacer");
       console.log(tarea);
        break;
    case 'listar':
       let listado = porHacer.getListado();
       ;
       console.log(listado);
       for (let item of listado) {
          console.log("==================".green);
          console.log(item.descripcion);
          console.log("Estado: ",item.completado);
          console.log("==================".green);
       }
        break;
    case 'actualizar':
        let comp = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(comp);
        break;
    case 'borrar':
            let borrar = porHacer.borrar(argv.descripcion);
            console.log(borrar);
            break;
    default:
        console.log("comando no reconocido");

}