import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Pokemon } from "../models/Pokemon";

export const usePokemonDetailQuery = ({ pokemonId, enabled = false }: { pokemonId?: number; enabled: boolean }) => {
    return useQuery({
        queryKey: ['pokemon', 'detail', pokemonId], queryFn: async () => {
            const pokemon = await axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`) // TODO url could be some variable
                .then((res) => res.data)
            return new Pokemon(pokemon);
        },
        enabled
    });
} 
