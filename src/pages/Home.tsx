import { Loading } from "../components/loading/Loading";
import { Header } from "../components/header/Header";
import { usePokemon } from "../hooks/usePokemon";

export const Home = () => {
	const { isLoading, pokemons } = usePokemon();

	return (
		<div>
			<Header />

			<table>
				<thead>
					<tr>
						<td>ID</td>
						<td>Nombre</td>
						<td>Imagen</td>
					</tr>
				</thead>

				<tbody>
					{pokemons.map(({ id, name, imgURL }) => (
						<tr key={id}>
							<td>{id}</td>
							<td>{name}</td>
							<td>
								<img src={imgURL} alt={name} width="100" />
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{isLoading && <Loading />}
		</div>
	);
};
