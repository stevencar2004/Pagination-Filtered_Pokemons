import React, { ChangeEvent } from "react";
import { IPokemon } from "./Pokemons";

export type TPokeContextProvider = {
	HandleChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
	filteredPokemons: () => IPokemon[];
	prevPage: () => void;
	nextPage: () => void;
	setIsViewGrid: (value: boolean) => void;
	isLoading: boolean;
	numPokemonsPage: string;
	searchValue: string;
	isviewGrid: boolean;
	handleNumPokemonsPage: (event: ChangeEvent<HTMLSelectElement>) => void;
};
