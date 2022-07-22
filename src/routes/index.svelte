<script context="module">
	
	export async function load({ fetch }) {
		const response = await fetch("index.json");
		const { drops } = await response.json();
		
		return {
			props: {
				drops,
			}
		};
	}
</script>

<script>
	import Search from '../components/Search.svelte';
	import Card from '../components/Card.svelte';
	import { filtered, dropItems, query } from '../store/store.js';
	export let drops;
	$dropItems = drops;
	export const imageWidth = 150;
</script>

<section>
	<Search />
	<ul class="grid" style={`grid-template-columns: repeat(auto-fit, minmax(${imageWidth}px, 1fr))`}>
		{#each $filtered as drop}
			<Card {drop} {imageWidth} />
		{/each}
		{#if $query.length > 0 && $filtered.length === 0}
			<p>No drops found.</p>
		{/if}
	</ul>
</section>