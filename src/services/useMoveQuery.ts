import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SelectedMove } from "../models/SelectedMove";

export const useMoveQuery = ({ moveName, enabled = false }: { moveName?: string; enabled: boolean }) => {
    return useQuery({ queryKey: ['move', moveName ], queryFn: () =>
        axios.get(`https://pokeapi.co/api/v2/move/${moveName}`).then((res) => new SelectedMove(res.data)),
        enabled
     });
} 
