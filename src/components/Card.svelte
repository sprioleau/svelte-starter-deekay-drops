<script>
	import { fade } from 'svelte/transition';
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
			<footer class="grid__grid-item-footer">
				<p class="grid__grid-item-footer__number text-muted">#{drop.number}</p>
				<h3 class="grid__grid-item-footer__name">{drop.name}</h3>
			</footer>
		</a>
	</article>
</li>

<style>
	.grid__grid-item {
		--opacity: 0;
		--translateY: 0;
		position: relative;
		transform: translateY(var(--translateY));
		transition: transform 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
	}

	.grid__grid-item:hover {
		--translateY: -5px;
	}

	.grid__grid-item:hover::before {
		--opacity: 1;
	}

	.grid__grid-item::before {
		content: '';
		position: absolute;
		top: -1rem;
		bottom: -1rem;
		left: -1rem;
		right: -1rem;
		border-radius: 1rem;
		background-color: var(--white);
		opacity: var(--opacity);
		transform: translateY(var(--translateY));
		transition: opacity 0.7s cubic-bezier(0.39, 0.575, 0.565, 1);
		box-shadow: 0 0 10px rgba(var(--accent-1-rgb), 0.15),
			0 10px 20px rgba(var(--accent-1-rgb), 0.15);
		z-index: -1;
	}
	
	.grid__grid-item__image {
		border-radius: 0.5rem;
		width: 100%;
		height: auto;
	}

	.grid__grid-item-footer {
		padding: 0.5rem;
		padding-bottom: 0;
	}
</style>
