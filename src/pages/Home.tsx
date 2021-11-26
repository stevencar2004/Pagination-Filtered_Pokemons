import { usePokemon } from "../hooks/usePokemon";

export const Home = () => {
	usePokemon();

	return (
		<div>
			<h1>Listado de Pokemones</h1>

			<hr />

			<table>
				<thead>
					<tr>
						<td>ID</td>
						<td>Nombre</td>
						<td>Imagen</td>
					</tr>
				</thead>
			</table>
		</div>
	);
};
