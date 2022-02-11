import getDrops from '../utils/getDrops';

export async function get() {
	const { images: drops } = await getDrops();

	return {
		status: 200,
		body: { drops }
	};
}
