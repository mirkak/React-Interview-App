import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePokemonsQuery = () => {
    return useQuery({ queryKey: ['pokemon' ], queryFn: () =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/`).then((res) => res.data)});
} 
