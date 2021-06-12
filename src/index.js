// 202106021755

import './styles.css';

// import { obtenerHeroesArr, obtenerHeroeAwait } from './js/await';

// import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

// ======= SIN USO DE LA FUNCIÓN ASYINC
// import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
// promesaLenta.then(console.log);
// //Esta línea es lo mismo que hace la línea anterior
// promesaMedia.then((mensaje) => console.log(mensaje));
// promesaRapida.then(console.log);
//Solo se ejecuta la promesaRapida por que es la primera en ejecutarse
// Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(console.log).catch(console.warn);

// buscarHeroe('capi').then(console.log);
// buscarHeroe('capi2')
//     .then((heroe) => console.log(heroe))
//     .catch(console.warn);

// ======= CON USO DE LA FUNCIÓN ASYINC

// buscarHeroeAsync('iron2')
//     .then((heroe) => console.log(heroe))
//     .catch(console.warn);

// ======= CON USO DE AWAIT   =============

// obtenerHeroesArr().then((heroes) => {
//     console.table(heroes);

//     console.timeEnd('await');
// });

// console.time('await');
// obtenerHeroeAwait('capi2')
//     .then((heroe) => {
//         console.log(heroe);

//         console.timeEnd('await');
//     })
//     .catch(console.warn);

import { heroesCiclo, heroeIfAwait } from './js/await';

heroesCiclo();
heroeIfAwait('iron');
