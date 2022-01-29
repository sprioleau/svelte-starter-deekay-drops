<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import '../styles/styles.scss';
</script>

<svelte:head>
	<title>Deekay Drops</title>
	<meta name="title" content="Deekay Drops">
	<meta name="description" content="A small SvelteKit starter app by by San'Quan Prioleau">
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://deekay-drops-svelte.netlify.app/">
	<meta property="og:title" content="Deekay Drops">
	<meta property="og:description" content="A small SvelteKit starter app by by San'Quan Prioleau">
	<meta property="og:image" content="https://deekay-drops-svelte.netlify.app/deekay-drops-social-card-sveltekit.png">
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://deekay-drops-svelte.netlify.app/">
	<meta property="twitter:title" content="Deekay Drops">
	<meta property="twitter:description" content="A small SvelteKit starter app by by San'Quan Prioleau">
	<meta property="twitter:image" content="https://deekay-drops-svelte.netlify.app/deekay-drops-social-card-sveltekit.png">
</svelte:head>

<div class="app">
	<main class="main">
		<Header />
		<slot />
	</main>
	<Footer />
</div>