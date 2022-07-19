import { DOMAIN } from "../../constants";

export async function get({ params }) {
	const response = await fetch(`${DOMAIN}/getDrops`);
	const { drops } = await response.json();

	const drop = drops.find(({ number }) => number === params.id);

	return {
		status: 200,
		body: { drop }
	};
}
