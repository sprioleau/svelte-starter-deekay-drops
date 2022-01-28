<script context="module">
	import { scrapeImages } from '../../loaders/scrapeImages';

	export async function load({ fetch, params }) {
		const drops = await scrapeImages(fetch);
		const drop = drops.find(({ number }) => number === params.id);

		return {
			props: {
				drop
			}
		};
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	export let drop;
	export const imageWidth = 400;
</script>

<article>
	<main>
		<header>
			<h1>{drop.alt}</h1>
		</header>
		<img
			src={`${drop.src}?format=${imageWidth}w`}
			alt={drop.alt}
			width={imageWidth}
			height={imageWidth}
			transition:fade
		/>
		<a
			class="button"
			href="https://opensea.io/collection/letswalk"
			target="_blank"
			rel="noreferrer"
		>
			Purchase on OpenSea
		</a>
		<footer>
			<p class="text-muted">
				Animation by <a href="https://deekaykwon.com/">DeeKay Kwon</a> (not S. Prioleau)
			</p>
		</footer>
	</main>
</article>

<style>
	h1,
	p {
		text-align: center;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		object-fit: contain;
		width: 100%;
	}
</style>
