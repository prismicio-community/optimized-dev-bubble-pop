<script>
	import { onMount } from 'svelte';
	import { random } from '../../utils/random.js';
	import { score, finalScore, totalBubbles } from '../../stores';
	import Bubble from './Bubble.svelte';

	let timeout;
	let showBubbles = true;

	onMount(() => {
		if (timeout) setTimeout(() => (showBubbles = false), timeout);
	});

	$: if ($score === $finalScore) {
		showBubbles = false;
	}

	$: bubbles = new Array($totalBubbles);
</script>

{#each bubbles as _, i}
	{#if showBubbles}
		<Bubble
			--scale={random(2, 3.5) / 10}
			--offset="{i * random(8, 10)}%"
			--delay="{random(1000, 5000)}ms"
			--speed="{random(10, 20)}s"
		/>
	{/if}
{/each}
