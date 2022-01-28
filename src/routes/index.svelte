<script context="module">
	import { scrapeImages } from '../loaders/scrapeImages';

	export async function load({ fetch }) {
		const drops = await scrapeImages(fetch);

		return {
			props: {
				drops
			}
		};
	}
</script>

<script>
	import Card from '../components/Card.svelte';
	export let drops;
	export let cardWidth = 150;
</script>

<section>
	<ul class="grid" style={`grid-template-columns: repeat(auto-fit, minmax(${cardWidth}px, 1fr))`}>
		{#each drops as drop}
			<Card {drop} {cardWidth} />
		{/each}
	</ul>
</section>

<style>
	.grid {
		display: grid;
		gap: 2.5rem;
		margin-bottom: 2rem;
	}
</style>
