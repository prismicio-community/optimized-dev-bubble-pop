<script>
	import { random } from '../../utils/random.js';
	import Bubble from './Bubble.svelte';
</script>

{#each Array(10) as _, i}
	<Bubble
		--scale={random(2, 3.5) / 10}
		--offset="{i * random(8, 10)}%"
		--delay="{random(1000, 5000)}ms"
		--speed="{random(10, 20)}s"
	/>
{/each}