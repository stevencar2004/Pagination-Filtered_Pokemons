import React from "react";
import { PokemonApi } from "../api/PokemonApi";
import { IPokemon, IPokemonResponse, ISmallPokemon } from "../interfaces/Pokemons";

// Hacemos la peticion de para obtener todos los pokemones
export const FetchAllPokemons = async (): Promise<IPokemon[]> => {
	const res = await PokemonApi.get<IPokemonResponse>("/pokemon/?limit=1000");
	const pokemonList = res.data.results;

	return transformPokemonToPokemonArray(pokemonList);
};

// Trasnformamos nuestra respuesta para poderla aprovechar de una mejor manera
const transformPokemonToPokemonArray = (pokemonList: ISmallPokemon[]): IPokemon[] => {
	const pokeArray: IPokemon[] = pokemonList.map((poke) => {
		const urlArray = poke.url.split("/");
		const id = urlArray[6];
		const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

		return {
			id,
			imgURL,
			name: poke.name,
		};
	});

	return pokeArray;
};
