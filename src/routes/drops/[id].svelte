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
	import "../../styles/components/drop.scss"
	export let drop;
	export const imageWidth = 400;
</script>

<svelte:head>
	<title>{drop?.alt} | Deekay Drops</title>
	<link rel="shortcut icon" href={drop.src} type="image/x-icon">
</svelte:head>

<article class="drop">
	<main class="drop__main">
		<header>
			<h1 class="drop__title align-center">{drop.alt}</h1>
		</header>
		<img
			class="drop__image"
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
			<p class="align-center text-muted">
				Animation by <a href="https://deekaykwon.com/">DeeKay Kwon</a> (not S. Prioleau)
			</p>
		</footer>
	</main>
</article>