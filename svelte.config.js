import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter({
			out: "build"
		}),
		target: '#svelte'
	}
};

export default config;
