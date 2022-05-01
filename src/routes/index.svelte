<script lang="ts">
	import Button from '$components/Button.svelte';

	let counter = 0;

	const addCounter = () => {
		counter++;
	};
</script>

<h1>Nikolaus Brunner</h1>
<p>
	I am a Frontend Engineer at <a href="https://bike.center" target="_blank">DealerCenter Digital</a>
</p>

<h2>{counter}</h2>
<Button onClick={addCounter}>Add to counter</Button>
