import colors from 'colors';
import argv from './config/yargs.js'
import PorHacer from './por-hacer/por-hacer.js'

const porHacer = new PorHacer();

let comando = argv._[0];

switch (comando) {
    case 'crear':
        porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        let listar = porHacer.getListado();
        for (let tarea of listar) {
            console.log('----- Tarea Por Hacer -------'.green);
            console.log(tarea.descripcion);
            console.log('Estado: '.yellow, tarea.completado)
            console.log('-----------------------------'.green)
        }
        break;
    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log('Tarea eliminada correctamente'.green);
        } else {
            console.log('Tarea NO eliminada'.red);
        }
        break;
    default:
        console.log('Instrucción no reconocida'.red);
}