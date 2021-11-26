import React, { useEffect, useState } from "react";
import { FetchAllPokemons } from "../helpers/FetchAllPokemons";

export const usePokemon = () => {
	const [isLoading, setisLoading] = useState(true);

	// Cargamos los pokemones
	useEffect(() => {
		FetchAllPokemons();
	}, []);

	return {
		isLoading,
	};
};
