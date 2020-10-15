const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('=================================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('=================================='.green);

    if (limite > 0) {
        for (let index = 1; index <= limite; index++) {
            console.log(`${ base } * ${index} = ${base*index}`);
        }
    }else{
        console.log('No se puede');
    }


}

let crearArchivo = ( base, limite = 10 ) => {

    
    return new Promise((resolve, reject) => {
        
        if ( !Number(base) ){
            reject(`El valor introducido ${ base } no es un número` );
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            
            data += `${ base } * ${ i } = ${ i*base }\n`;
            
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        }); 

    })

}

module.exports = {
    crearArchivo,
    listarTabla
}

