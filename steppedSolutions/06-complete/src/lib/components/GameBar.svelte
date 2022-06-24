<script>
	import { fly, fade } from 'svelte/transition';
	import { session, lastScore, score, finalScore } from '../stores';
	import { ConfettiExplosion } from 'svelte-confetti-explosion';

	function resetGame() {
		const highScore = $score > $lastScore ? $score : $lastScore;
		lastScore.set(highScore);
		session.set(false);
	}
	
	let bubbles = document.querySelector('#bubbles');

	$: if ($score === $finalScore) {
		if (bubbles) bubbles.style.display = 'none';
	}
</script>

{#if $score === $finalScore && $session}
	<section in:fly={{ y: 200, duration: 1000 }}>
		<h1>You Win 🥳</h1>
		<button on:click={resetGame}>Play Again</button>
	</section>
	<div>
		<ConfettiExplosion />
	</div>
{:else if $session}
	<aside class="glass" transition:fade>
		<h1>Bubble Pop</h1>
		<h2>{$score}</h2>
		<button on:click={resetGame}>Stop Game</button>
	</aside>
{/if}

<style>
	section {
		position: absolute;
	}
	div {
		display: flex;
		justify-content: center;
	}
	aside {
		border-radius: var(--radius-blob-2);
		padding: var(--size-10);
		position: absolute;
		bottom: 0;
		margin-inline: auto;
	}
</style>
