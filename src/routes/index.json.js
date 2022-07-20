import { getDrops } from "../utils";

export async function get() {
	const drops = await getDrops();

	return {
		status: 200,
		body: { drops }
	};
}
