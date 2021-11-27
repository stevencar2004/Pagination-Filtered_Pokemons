import { useContext } from "react";
import { pokeContext } from "../context/Context";

import { Loading } from "../components/loading/Loading";
import { Header } from "../components/header/Header";
import { SearchField } from "../components/Search/SearchField";
import { SelectNumPoke } from "../components/numPokeItems/SelectNumPoke";
import { ControlsPage } from "../components/ControlsPages/ControlsPage";
import { PokeListItems } from "../components/PokeItem/PokeListItems";

export const Home = () => {
	const { isLoading, setIsViewGrid } = useContext(pokeContext);

	return (
		<>
			<Header />

			<div className="row mt-5 m-3 align-items-center" id="menuFilter">
				<div className=" col-md-8">
					<SearchField />
				</div>

				<div className="col d-flex justify-content-center gap-1">
					<button
						className="btn btn-outline-secondary"
						onClick={() => {
							setIsViewGrid(true);
						}}
					>
						<i className="fas fa-th"></i>
					</button>

					<button
						className="btn btn-outline-secondary"
						onClick={() => {
							setIsViewGrid(false);
						}}
					>
						<i className="fas fa-th-list"></i>
					</button>
				</div>

				<div className="col">
					<SelectNumPoke />
				</div>
			</div>

			<main className="m-5">
				{isLoading && <Loading />}

				<section>
					<PokeListItems />
					<ControlsPage />
				</section>
			</main>
		</>
	);
};
