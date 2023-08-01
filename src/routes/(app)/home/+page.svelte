<script>
	let canvas;
	let hasCode = false;
</script>

<svelte:head>
	<title>Whatsapp bots</title>
</svelte:head>

<div>
	<canvas class="hidden box rounded-box shadow-xl p-4 m-auto" bind:this={canvas} />
</div>
{#if !hasCode}
	<span class="text-2xl">Generating Qr code</span>
{/if}

<style>
	.box {
		width: 16rem;
	}
</style>
