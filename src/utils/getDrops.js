import { DOMAIN } from "src/constants";

const getDrops = async (url = DOMAIN) => {
	try {
		const response = await fetch(`${url}/data/drops.json`);
		const drops = await response.json();
		return { drops, error: null };
	} catch (error) {
		console.error(error);
		return { drops: null, error };
	}
};

export default getDrops;
