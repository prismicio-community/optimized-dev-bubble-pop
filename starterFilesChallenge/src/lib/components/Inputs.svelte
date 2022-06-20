<script>
	//TODO Step 6: Import your stores.
</script>

<aside class="glass">
	<h2>Game Settings</h2>

	<label>
		Winning Score:
		<!-- TODO Step 6: Add two-way binding between the value of this input and the finalScore store -->
		<input 
			class="glass"
			min="1" 
			max="100" 
			type="number" 
			name="score"  
		/>
	</label>

	<label>
		Total Bubbles:
		<!-- TODO Step 6: Add two-way binding between the value of this input and the totalBubbles store -->
		<input
			class="glass"
			min="1"
			max="100"
			type="number"
			name="bubbles"
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
