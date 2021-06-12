// 202106101831
const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir',
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero',
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción alérgica a las picaduras de arañas',
    },
};

export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    //Dentro de la promesa se manda un callback
    return new Promise((resolve, reject) => {
        if (heroe) {
            setTimeout(() => resolve(heroe), 1000);
        } else {
            reject(`No existe un héroe con el id ${id}`);
        }
    });
};

//  ----------   Copia de la función anterior aquí se aplica async -----------------
export const buscarHeroeAsync = async (id) => {
    const heroe = heroes[id];

    if (heroe) {
        return heroe;
    } else {
        //Al usar Error manda más información de qué salió mal
        throw `No existe un héroe con el id ${id}`;
    }
};

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rápida'), 1000);
});

export { promesaLenta, promesaMedia, promesaRapida };
