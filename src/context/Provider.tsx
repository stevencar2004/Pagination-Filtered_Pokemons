import { useContext, useState } from "react";

import { pokeContext } from "./Context";
import { IProviderProps } from "../interfaces/Provider";
import { IPokemon } from "../interfaces/Pokemons";
import { usePokemon } from "../hooks/usePokemon";

export const Provider = ({ children }: IProviderProps) => {
	const { isLoading, pokemons } = usePokemon();

	const [numPokemonsPage, setNumPokemonsPage] = useState<string>("5");
	const [currentPage, setCurrentPage] = useState<number>(0);
	const [searchValue, setSearchValue] = useState<string>("");
	const [isviewGrid, setIsViewGrid] = useState<boolean>(false);

	const filteredPokemons = (): IPokemon[] => {
		if (searchValue.length === 0) {
			return pokemons.slice(currentPage, currentPage + parseInt(numPokemonsPage));
		}
		const filteredSearch = pokemons.filter((poke) =>
			poke.name.toLowerCase().includes(searchValue.toLowerCase()),
		);
		return filteredSearch.slice(currentPage, currentPage + parseInt(numPokemonsPage));
	};

	const nextPage = () => {
		if (
			pokemons.filter((poke) => poke.name.includes(searchValue)).length >
			currentPage + parseInt(numPokemonsPage)
		) {
			setCurrentPage(currentPage + parseInt(numPokemonsPage));
		}
	};

	const prevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - parseInt(numPokemonsPage));
		}
	};

	const handleNumPokemonsPage: React.ChangeEventHandler<HTMLSelectElement> = ({
		target,
	}) => {
		setNumPokemonsPage(target.value);
	};

	const HandleChangeSearch: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		setCurrentPage(0);
		setSearchValue(target.value);
	};

	return (
		<pokeContext.Provider
			value={{
				HandleChangeSearch,
				filteredPokemons,
				prevPage,
				nextPage,
				setIsViewGrid,
				isLoading,
				numPokemonsPage,
				searchValue,
				isviewGrid,
				handleNumPokemonsPage,
			}}
		>
			{children}
		</pokeContext.Provider>
	);
};
