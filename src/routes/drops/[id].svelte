<script context="module">
	export async function load({ fetch, params }) {
		const response = await fetch(`${params.id}.json`);
		const { drop } = await response.json();

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
	{#if drop}
		<title>{drop.full_name} | Deekay Drops</title>
		<link rel="shortcut icon" href={drop.image_src} type="image/x-icon">
	{/if}
</svelte:head>

<article class="drop">
	<main class="drop__main">
		<header>
			<h1 class="drop__title align-center">{drop.full_name}</h1>
		</header>
		<img
			class="drop__image"
			src={`${drop.image_src}?format=${imageWidth}w`}
			alt={drop.full_name}
			width={imageWidth}
			height={imageWidth}
			transition:fade
		/>
		{#if drop.openSeaUrl}
			 <a
				 class="button"
				 href={drop.open_sea_url}
				 target="_blank"
				 rel="noreferrer"
			 >
				 Purchase on OpenSea
			 </a>
		{/if}
		<footer>
			<p class="align-center text-muted">
				Animation by <a href="https://deekaykwon.com/">DeeKay Kwon</a> (not S. Prioleau)
			</p>
		</footer>
	</main>
</article>
