// 202106021755

import './styles.css';

import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';

// promesaLenta.then(console.log);

// //Esta línea es lo mismo que hace la línea anterior
// promesaMedia.then((mensaje) => console.log(mensaje));

// promesaRapida.then(console.log);

//Solo se ejecuta la promesaRapida por que es la primera en ejecutarse
Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(console.log).catch(console.warn);
