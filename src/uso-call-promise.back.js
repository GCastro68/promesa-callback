// 202106021755

import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'spider';

// buscarHeroe(heroeId, (err, heroe) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.info(heroe);
//     }
// });

// buscarHeroe(heroeId1).then((heroe1) => {
//     // console.log(`Enviando a ${heroe.nombre} a la misión`);
//     buscarHeroe(heroeId2).then((heroe2) => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
//     });
// });

//Esto es lo mismo en las líneas 18 a 23 con la diferencia
//que entre mas heroes se va complicando el código con mas código anidado
//en cambio aquí con más heroes va creciendo la lista de argumentos
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then(([heroe1, heroe2]) => {
        //Este código se ejecutará hasta que se resuelva todo lo que vaya
        //como parámetros dentro de Promise.all()
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
    })
    .catch((err) => {
        alert(err);
    })
    .finally(() => {
        console.log('Se terminó el promise.all');
    });

console.log('Fin de programa');
