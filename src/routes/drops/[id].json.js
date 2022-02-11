import getDrops from '../../utils/getDrops';

export async function get({ params }) {
	const { images: drops } = await getDrops();
	const drop = drops.find(({ number }) => number === params.id);

	return {
		status: 200,
		body: { drop }
	};
}
