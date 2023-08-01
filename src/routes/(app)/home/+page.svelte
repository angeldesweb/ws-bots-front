<script>
	import { io } from 'socket.io-client';
	import { onMount } from 'svelte';
	import Qr from 'qrcode';
	import { browser } from '$app/environment';

	export let data;

	let socket;
	let canvas;
	let hasCode = false;

	$: browser &&
		socket &&
		socket.on('qr', ({ qr }) => {
			hasCode = true;
			Qr.toCanvas(canvas, qr);
		});

	$: browser &&
		socket &&
		socket.on('loading', ({ percent, message }) => {
			console.log({ percent, message });
		});

	const init = () => {
		socket = new io('http://127.0.0.1:3000', {
			autoConnect: false,
			auth: {
				token: data.token
			}
		});

		socket.connect();
		socket.emit('start:client');
	};

	onMount(() => {
		browser && init();
	});
</script>

<svelte:head>
	<title>Whatsapp bots</title>
</svelte:head>

{#if !hasCode}
	<span class="text-2xl">Generating Qr code</span>
{/if}
<div>
	<canvas class="box {hasCode ? 'rounded-box shadow-xl p-4' : ''} m-auto" bind:this={canvas} />
</div>

<style>
	.box {
		width: 16rem;
	}
</style>
