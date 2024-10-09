type PokemonDTO = {
    id: number;
    name: string;
    sprites: {
        front_default: string;
        back_default: string;
    }
    moves: PokemonMove[];
    stats: { base_stat: number }[];
};

export type PokemonMove = {
    move: {
        name: string;
        url: string;
    }
}

// Using class models to transform data to camel case
export class Pokemon {
    id: number;
    name: string;
    frontSprite: string;
    backSprite: string;
    moves: PokemonMove[];
    baseStat: number;
    selectedMove: any;

    constructor(data: PokemonDTO) {
        this.id = data.id;
        this.name = data.name;
        this.frontSprite = data.sprites.front_default;
        this.backSprite = data.sprites.back_default;
        this.moves = data.moves;
        this.baseStat = data.stats[0].base_stat;
    }
}
