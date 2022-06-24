<script>
	import './lib/styles.css';
	import Bubbles from './lib/components/bubbles/Bubbles.svelte';
	import GameBar from './lib/components/GameBar.svelte';
	import Inputs from './lib/components/Inputs.svelte';
	import Layout from './lib/components/Layout.svelte';
	import { score, session } from './lib/stores';
	import { onMount } from 'svelte/internal';
	onMount(() => {
		session.set(false);
	});

	function startGame() {
		score.set(0);
		session.set(true);
	}
</script>

<Layout>
	{#if !$session}
		<Inputs />
		<h1>Bubble Pop</h1>
		<button on:click={startGame}>Start Popping</button>
	{:else if $session}
		<Bubbles />
		<GameBar />
	{/if}
</Layout>
