<script>
	import './lib/styles.css'
	import Layout from './lib/components/Layout.svelte'
	import Bubbles from './lib/components/bubbles/Bubbles.svelte'
	import GameBar from './lib/components/GameBar.svelte'
	import Input from './lib/components/Inputs.svelte'

</script>

<Layout>

	<Input />

	<h1>Welcome to Bubble Pop</h1>
	<button> Start Popping</button>

	<Bubbles />
	<GameBar />

</Layout>