import React, { useEffect, useState } from "react";
import { FetchAllPokemons } from "../helpers/FetchAllPokemons";
import { IPokemon } from "../interfaces/Pokemons";

export const usePokemon = () => {
	const [isLoading, setisLoading] = useState(true);
	const [pokemons, setPokemons] = useState<IPokemon[]>([]);

	// Cargamos los pokemones
	useEffect(() => {
		FetchAllPokemons().then((pokemons) => {
			setisLoading(false);
			setPokemons(pokemons);
		});
	}, []);

	return {
		isLoading,
		pokemons,
	};
};
