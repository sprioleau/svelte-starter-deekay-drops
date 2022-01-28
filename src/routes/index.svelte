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
	export const imageWidth = 150;
</script>

<section>
	<ul class="grid" style={`grid-template-columns: repeat(auto-fit, minmax(${imageWidth}px, 1fr))`}>
		{#each drops as drop}
			<Card {drop} {imageWidth} />
		{/each}
	</ul>
</section>