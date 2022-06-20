<script>
	//TODO Step 2: Set a bit of state to track whether the bubble is popped or not.

	//TODO Step 2: Write a function that pops the bubble below when it's clicked.

	//TODO Step 4: Add to the score store each time the bubble pops!
</script>


<div class="positioner">
	<div class="positioner-inner">
		<!-- TODO Step 2: Conditionally only show the bubble while it is not popped. -->
			<div class="bubble" />
	</div>
</div>

<!-- Note: These styles are scoped to this component! -->
<style>
	.positioner {
		--bubble-size: calc(200px * var(--scale));

		animation: position var(--speed) linear infinite forwards;

		animation-delay: var(--delay);

		position: fixed;
		z-index: var(--zindex, 99);

		bottom: calc(var(--bubble-size) * -2);
		left: var(--offset);
	}

	.positioner-inner {
		animation: wobble 2s ease-in-out alternate infinite;
		animation-delay: inherit;
	}

	.bubble {
		width: var(--bubble-size);
		height: var(--bubble-size);

		border-radius: 100%;
		box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2), inset 0px 5px 15px 2px rgba(255, 255, 255, 1);

		backdrop-filter: blur(1px);
		filter: blur(2px);
	}

	@media (prefers-reduced-motion: reduce) {
		.positioner {
			animation: none;
		}
	}

	@keyframes position {
		from {
			transform: translate3d(0, 0, 0);
		}

		to {
			transform: translate3d(0, calc((-2.5 * var(--bubble-size)) - 100vh), 0);
		}
	}

	@keyframes wobble {
		from {
			transform: translate3d(0, 0, 0);
		}

		to {
			transform: translate3d(42px, 0, 0);
		}
	}
</style>
