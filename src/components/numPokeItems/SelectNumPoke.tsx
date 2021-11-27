import React, { useContext } from "react";
import { pokeContext } from "../../context/Context";

export const SelectNumPoke = () => {
	const { numPokemonsPage, handleNumPokemonsPage } = useContext(pokeContext);

	return (
		<select
			className="form-select"
			name="selectNumItems"
			id="selectNumItems"
			value={numPokemonsPage}
			onChange={handleNumPokemonsPage}
		>
			<option value="5">5 por página</option>
			<option value="10">10 por página</option>
			<option value="15">15 por página</option>
		</select>
	);
};
