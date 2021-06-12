// 202106111234

import { buscarHeroeAsync, buscarHeroe } from './promesas';

const heroesIds = ['capi', 'iron', 'spider'];

// const heroesPromesas = heroesIds.map((id) => buscarHeroe(id));
//Esta líne es igual a la línea anterior
const heroesPromesas = heroesIds.map(buscarHeroe);

// export const obtenerHeroesArr = async () => {
//     const heroesArr = [];

//     for (const id of heroesIds) {
//         // const heroe = await buscarHeroe(id);
//         // heroesArr.push(heroe);

//         //Hacerlo de esta manera ess más rápido
//         heroesArr.push(buscarHeroe(id));
//     }
//     // return heroesArr;
//     return await Promise.all(heroesArr); //Esto realiza las promesas de manera simultánea, haciendo más rápido el proceso
// };

// Esta función hace lo mismo que la anterior pero mas elegante
export const obtenerHeroesArr = async () => {
    //primero se resuelve del paréntesis interior al exterior
    return await Promise.all(heroesIds.map(buscarHeroe));
};

export const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (err) {
        console.log('CATCH !!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder',
        };
    }
};

export const heroesCiclo = async () => {
    console.time('HeroesCiclo');

    //Esta es otra forma de hacer lo mismo que las 2 líneas después
    //del timeEnd
    for await (const heroe of heroesPromesas) {
        console.log(heroe);
    }

    console.timeEnd('HeroesCiclo');

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach((heroe) => console.log(heroe));
};

export const heroeIfAwait = async (id) => {
    //Con await esperarmos resuelva buscarHeroeAsync(id)
    //una vez resuelto tomamos la propiedad nombre
    if ((await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Es el mejor de todos');
    } else {
        console.log('Naaa!');
    }
};
