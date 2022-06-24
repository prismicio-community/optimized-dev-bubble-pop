<script>
	import { finalScore, totalBubbles } from '../stores';
</script>

<aside class="glass">
	<h2>Game Settings</h2>

	<label>
		Winning Score:
		<input class="glass" min="1" max="100" type="number" name="score" bind:value={$finalScore} />
	</label>

	<label>
		Total Bubbles:
		<input
			class="glass"
			min="1"
			max="100"
			type="number"
			name="bubbles"
			bind:value={$totalBubbles}
		/>
	</label>
</aside>

<style>
	aside {
		margin: var(--size-4);
		position: absolute;
		top: 0;
		left: 0;
		justify-items: flex-start;
	}
	aside > h2 {
		border-bottom: 1px solid var(--white);
	}
	label {
		display: flex;
		gap: var(--size-1);
	}
	input {
		margin: 0;
		padding: var(--size-1) var(--size-2);
	}
</style>
