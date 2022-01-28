<script>
	import logo from '../images/DeeKay_Avatar_2021.png';
</script>

<nav>
	<a href="/" class="no-decor">
		<img src={logo} alt="DeeKay Logo" />
	</a>
	<a href="/" class="no-decor">
		<h1>Deekay Drops</h1>
	</a>
	<p class="text-muted">
		A small Svelte starter app by <a href="https://www.sprioleau.dev/">S. Prioleau</a>
	</p>
</nav>

<style>
	nav {
		padding: 0 2rem;
		margin-bottom: 2rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1 {
		font-size: 2.5rem;
		text-align: center;
	}

	img {
		width: clamp(100px, 50px + 5vw, 250px);
	}
</style>
