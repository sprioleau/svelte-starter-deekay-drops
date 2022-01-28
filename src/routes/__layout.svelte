<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import '../styles/styles.css';
</script>

<svelte:head>
	<title>Deekay Drops</title>
</svelte:head>

<div class="app">
	<main class="main">
		<Header />
		<slot />
	</main>
	<Footer />
</div>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: clamp(2rem, 5vw, 3rem);
	}
</style>
