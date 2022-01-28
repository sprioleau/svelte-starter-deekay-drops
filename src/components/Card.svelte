<script>
	import { fade } from 'svelte/transition';
	import "../styles/components/card.scss"
	export let drop;
	export let imageWidth = 200;
</script>

<li class="grid__grid-item" transition:fade>
	<article>
		<a href={`/drops/${drop.number}`}>
			<main>
				<div class="grid__grid-item__image-wrapper">
					<img
						class="grid__grid-item__image"
						src={`${drop.src}?format=${imageWidth}w`}
						alt={drop.alt}
						width={imageWidth}
						height={imageWidth}
					/>
				</div>
			</main>
			<footer class="grid__grid-item__footer">
				<h3 class="grid__grid-item__footer__name align-center">{drop.name}</h3>
				<p class="grid__grid-item__footer__number text-muted align-center">#{drop.number}</p>
			</footer>
		</a>
	</article>
</li>
