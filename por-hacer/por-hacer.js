import fs from 'fs'
import colors from 'colors'
import { parse } from 'path';

let listadoPorHacer = [];

class PorHacer {
    constructor() {}

    crear = (descripcion) => {
        this.cargarDB();
        let porHacer = {
            descripcion,
            completado: false,
        };
        listadoPorHacer.push(porHacer);
        this.guardarDB();
        return porHacer;
    }

    guardarDB = () => {
        let data = JSON.stringify(listadoPorHacer);
        fs.writeFile('db/data.json', data, (err) => {
            if (err) throw new Error('No se pudo grabar'.red, err);
            console.log('Archivo guardado correctamente'.green);
        });
    }

    cargarDB = () => {
        try {
            let listado = fs.readFileSync('db/data.json');
            listadoPorHacer = JSON.parse(listado);
        } catch (error) {
            listadoPorHacer = [];
        }
    }

    getListado = () => {
        this.cargarDB();
        return listadoPorHacer;
    }

    actualizar = (descripcion, completado = true) => {
        this.cargarDB();
        let index = listadoPorHacer.findIndex(tarea => {
            return tarea.descripcion === descripcion
        });
        if (index >= 0) {
            listadoPorHacer[index].completado = completado;
            this.guardarDB();
            return true;
        } else {
            return false;
        }
    }

    borrar = (descripcion) => {
        this.cargarDB();
        let index = listadoPorHacer.findIndex(tarea => {
            return tarea.descripcion === descripcion
        });
        if (index >= 0) {
            listadoPorHacer.splice(index, 1);
            this.guardarDB();
            return true;
        } else {
            return false;
        }
    }
}

export default PorHacer;