import { createContext } from "react";
import { TPokeContextProvider } from "../interfaces/Context";

export const pokeContext = createContext<TPokeContextProvider>(
	{} as TPokeContextProvider,
);
