import React, { useContext } from "react";
import { pokeContext } from "../../context/Context";

export const ControlsPage = () => {
	const { prevPage, nextPage } = useContext(pokeContext);
	return (
		<div className="mt-5 d-flex justify-content-end gap-1">
			<button className="btn btn-warning" onClick={prevPage}>
				<i className="fas fa-angle-left"></i>
			</button>

			<button className="btn btn-warning" onClick={nextPage}>
				<i className="fas fa-angle-right"></i>
			</button>
		</div>
	);
};
