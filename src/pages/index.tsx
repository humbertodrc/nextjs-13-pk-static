import { Layout } from '@/components/layouts';
import { NextPage, GetStaticProps } from 'next';
import pokeApi from '../api/pokeApi';
import { PokemonsListResponse, SmallPokemom } from '../interface/pokemons-list';

interface Props {
	pokemons: SmallPokemom[];
}

const Home: NextPage<Props> =({pokemons}) => {

	console.log(pokemons)

	return (
		<Layout title='Pokemon App'>
			{pokemons.map(({id, name}) => (
				<p key={id}>{id} - {name}</p>
				))}
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	
	const { data } = await pokeApi.get<PokemonsListResponse>('/pokemon?limit=151');

	const pokemons: SmallPokemom[] = data.results.map((pokemon, index) => {
		return {
			...pokemon,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
		}
	})

	return {
		props: {
			pokemons
		}
	}
}

export default Home;
