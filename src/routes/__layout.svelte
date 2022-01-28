<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import '../styles/styles.scss';
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