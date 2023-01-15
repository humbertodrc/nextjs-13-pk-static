import {Button} from "@nextui-org/react";
import {Layout} from "components/layouts";

export default function Home() {
	return (
		<Layout title='Pokemon App'>
			<h1>Hola Mundo</h1>
			<Button color={"gradient"}>Click me</Button>
		</Layout>
	);
}
