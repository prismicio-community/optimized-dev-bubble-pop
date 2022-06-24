<script>
	import Footer from './Footer.svelte';
</script>

<main>
	<slot />
</main>
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
