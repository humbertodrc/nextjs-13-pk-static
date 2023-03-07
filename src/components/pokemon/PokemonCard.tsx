import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { FC } from "react";

interface Props {
  name: string;
  image: string;
  id: number;
}

export const PokemonCard: FC<Props> = ({ name, image, id }) => {
	
	const router = useRouter();

	const onClickPokemnon = () => {
		router.push(`/pokemon/${id}`)
	}

	return (
		<Grid key={id} xs={6} sm={3} md={2} xl={1}>
			<Card isPressable onClick={onClickPokemnon}>
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
	);
};
