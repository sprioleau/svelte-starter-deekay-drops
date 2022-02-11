<script context="module">
	export async function load({ fetch }) {
		const response = await fetch("index.json");
		const { drops } = await response.json();

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