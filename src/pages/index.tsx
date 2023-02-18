import { Layout } from '@/components/layouts';
import { NextPage, GetStaticProps } from 'next';
import pokeApi from '../api/pokeApi';

const Home: NextPage =(props) => {

	console.log(props)

	return (
		<Layout title='Pokemon App'>
			
		</Layout>
	);
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {
	
	const {data} = await pokeApi.get('/pokemon?limit=151');

	console.log(data)
	

	return {
		props: {
			pokemons: data.results
		}
	}
}

export default Home;
