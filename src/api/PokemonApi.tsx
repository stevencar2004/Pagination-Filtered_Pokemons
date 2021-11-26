import axios from "axios";

// creamos nuestra peticion BASE para poder consumir la api de pokemones
export const PokemonApi = axios.create({
	// Le indicamos la url base de la API
	baseURL: "https://pokeapi.co/api/v2",
});
