import { getDrops } from "../../utils";

export async function get({ params }) {
	const drops = await getDrops();

	const drop = drops.find(({ number }) => number === params.id);

	return {
		status: 200,
		body: { drop }
	};
}
