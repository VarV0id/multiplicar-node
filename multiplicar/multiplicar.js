//requireds
const fs = require('fs'); //Viene en NODE
//const fs = require('express'); no existe en NODE
//const fs = require('./fs'); required de archivos que se crean en el proyecto
const color = require('colors');

let data = '';
let listarTabla = (base, limite = 10) => {
    console.log("============================".green);
    console.log(`Tabla del ${ base }`.green);
    console.log("============================".green);
    for(let i = 1; i <= limite; i++){
        console.log(`${base}*${i}= ${base*i} \n`);
    }
}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject('El valor introducido "'+base+'" no es un numero.');
            return;
        }
        for(let i = 1; i <= limite; i++){
            data += `${base}*${i}= ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data , (err) => {
            if (err) reject(err);
            else
                resolve(`tablas/tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};
