import Head from "next/head";
import {FC} from "react";

interface Props {
	children: JSX.Element | JSX.Element[];
	title?: string;
}

export const Layout: FC<Props> = ({children, title}) => {
	return (
		<>
			<Head>
				<title>{title || 'PokemonApp'}</title>
				<meta name="author" content="Humberto Rivero" />
				<meta name="description" content="Informacion sobre el pokémon xxxx" />
				<meta name="keywords" content={`${title}, pokemon, pokedex`} />
			</Head>

			{/* Navbar */}

			<main>{children}</main>
		</>
	);
};
