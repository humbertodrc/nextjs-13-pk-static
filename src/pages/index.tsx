import {Layout} from "@/components/layouts";
import {Card, Grid, Row, Text} from "@nextui-org/react";
import {NextPage, GetStaticProps} from "next";
import pokeApi from "../api/pokeApi";
import {PokemonsListResponse, SmallPokemom} from "../interface/pokemons-list";

interface Props {
	pokemons: SmallPokemom[];
}

const Home: NextPage<Props> = ({pokemons}) => {
	return (
		<Layout title="Pokemon App">
			<Grid.Container gap={2} justify="flex-start">
				{pokemons.map(({name, image, id}) => (
					<Grid key={id} xs={6} sm={3} md={2} xl={1}>
						<Card isPressable>
							<Card.Body css={{p: 1}}>
								<Card.Image src={image} width="100%" height={140} alt={name} />
							</Card.Body>
							<Card.Footer>
								<Row justify="space-between">
									<Text>{name}</Text>
									<Text>#{id}</Text>
								</Row>
							</Card.Footer>
						</Card>
					</Grid>
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
