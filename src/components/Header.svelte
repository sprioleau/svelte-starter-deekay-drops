<script>
	import "../styles/components/header.scss"
	export const imageWidth = 80;
</script>

<nav class="nav">
	<a href="/" class="no-decor">
		<img src="/deekay-logo.png" alt="DeeKay Logo" class="nav__logo" width={imageWidth} height={imageWidth} />
	</a>
	<a href="/" class="no-decor">
		<h1 class="nav__title">DeeKay Drops</h1>
	</a>
	<p class="text-muted align-center">
		A small Svelte starter app by <a href="https://www.sprioleau.dev/">S. Prioleau</a>. <br /> Logo and all GIFs by <a href="https://deekaykwon.com/">DeeKay Kwon</a>.
	</p>
</nav>
