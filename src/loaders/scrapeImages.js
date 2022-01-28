import { expandImageMeta } from '../utils/expandImageMeta';

export const scrapeImages = async (fetch) => {
	const response = await fetch('https://deekay-drops.netlify.app/api/drops');
	const images = await response.json();
	return expandImageMeta(images);
};
