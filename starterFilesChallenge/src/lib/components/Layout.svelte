<script>
	import Footer from './Footer.svelte';
</script>


<main>
<!-- Slots let Svelte know what to do with children components that Layout wraps -->
	<slot />
</main>
<!-- You could add your own info to the footer component! -->
<Footer />

<style>
	main {
		display: grid;
		min-height: 100vh;
		place-items: center;
		place-content: center;
		gap: var(--size-4);
	}
</style>