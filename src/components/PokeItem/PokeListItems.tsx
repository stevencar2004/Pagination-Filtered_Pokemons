import React, { useContext } from "react";
import { pokeContext } from "../../context/Context";

export const PokeListItems = () => {
	const { filteredPokemons, isviewGrid } = useContext(pokeContext);

	return (
		<div className="d-flex flex-wrap justify-content-evenly">
			{filteredPokemons().map(({ id, name, imgURL }) =>
				isviewGrid ? (
					<div className="card" style={{ width: "14.5rem" }}>
						<img src={imgURL} className="card-img-top" alt={name} />

						<div className="card-body">
							<h5 className="card-title">{name}</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
								eligendi!
							</p>
						</div>
					</div>
				) : (
					<div className="card mb-3" style={{ width: 400 }}>
						<div className="row g-0">
							<div className="col-md-4 d-flex justify-content-center ">
								<img src={imgURL} className="img-fluid rounded-start" alt={name} />
							</div>

							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">{name}</h5>
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in
										to additional content. This content is a little bit longer.
									</p>
								</div>
							</div>
						</div>
					</div>
				),
			)}
		</div>
	);
};
