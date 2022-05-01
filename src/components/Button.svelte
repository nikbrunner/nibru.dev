<script lang="ts">
	export let onClick: () => void = () => {};
</script>

<button class="Button" on:click={onClick}><slot /></button>

<style lang="scss">
	.Button {
		background-color: hsl(200, 100%, 50%);
		color: #fff;
		padding: 10px;
		border-radius: 5px;
		border: none;
		cursor: pointer;

		&:hover {
			background-color: hsl(200, 100%, 70%);
		}
	}
</style>
