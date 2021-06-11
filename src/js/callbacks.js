// 202106101743
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

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];

    if (heroe) {
        //1er. argumento es null ya que no hubo error
        callback(null, heroe);
    } else {
        callback(`No existe un héroe con el id ${id}`);
    }

    // callback(heroe);
};
