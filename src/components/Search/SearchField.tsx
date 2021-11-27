import React, { useContext } from "react";
import { pokeContext } from "../../context/Context";

export const SearchField = () => {
	const { searchValue, HandleChangeSearch } = useContext(pokeContext);

	return (
		<div className="input-group">
			<span className="input-group-text bg-light">
				<i className="fas fa-search"></i>
			</span>

			<input
				type="text"
				className="form-control"
				value={searchValue}
				placeholder="Buscar Pokemon"
				onChange={HandleChangeSearch}
			/>
		</div>
	);
};
