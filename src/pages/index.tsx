import { Layout } from "@/components/layouts";
import { PokemonCard } from '@/components/pokemon';
import { Grid } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import pokeApi from "../api/pokeApi";
import { PokemonsListResponse, SmallPokemom } from "../interface/pokemons-list";

interface Props {
	pokemons: SmallPokemom[];
}

const Home: NextPage<Props> = ({pokemons}) => {
	return (
		<Layout title="Pokemon App">
			<Grid.Container gap={2} justify="flex-start">
				{pokemons.map(({name, image, id}) => (
					<PokemonCard key={id} name={name} image={image} id={id} />
				))}
			</Grid.Container>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const {data} = await pokeApi.get<PokemonsListResponse>("/pokemon?limit=151");

	const pokemons: SmallPokemom[] = data.results.map((pokemon, index) => {
		return {
			...pokemon,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
				index + 1
			}.png`,
		};
	});

	return {
		props: {
			pokemons,
		},
	};
};

export default Home;
