import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la nueva tarea.'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada la tarea'
}

const argv = yargs(hideBin(process.argv))
    .command('crear', 'Da de alta una nueva tarea', { descripcion })
    .command('listar', 'Muestra las Tareas', {})
    .command('actualizar', 'Actualiza el estatus de una tarea', { descripcion, completado })
    .command('borrar', 'Borra una Tarea del Listado', { descripcion })
    .argv;

export default argv;