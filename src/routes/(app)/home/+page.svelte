<script>
	import { io } from 'socket.io-client';
	import { SyncLoader } from 'svelte-loading-spinners';
	import { onMount } from 'svelte';
	import Qr from 'qrcode';
	import { browser } from '$app/environment';
	import { WhatsAppChat } from '$lib/components';

	export let data;

	let socket;
	let canvas;
	let hasCode = false;
	let isAuth = false;
	let isReady = false;

	$: if (browser && socket) {
		socket.on('qr', ({ qr }) => {
			hasCode = true;
			Qr.toCanvas(canvas, qr);
		});

		socket.on('loading', ({ percent, message }) => {
			console.log({ percent, message });
		});

		socket.on('auth', () => (isAuth = true));

		socket.on('ready', () => (isReady = true));
	}

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

{#if !isAuth}
	<div class="flex m-auto flex-col items-center">
		<span class="text-2xl">Generating Qr code</span>
		<SyncLoader color="hsl(var(--p))" />
	</div>
{/if}
<div>
	<canvas class="box {hasCode ? 'rounded-box shadow-xl p-4' : ''} m-auto" bind:this={canvas} />
</div>
{#if isReady}
	<div class="m-auto">
		<WhatsAppChat />
	</div>
{/if}

<style>
	.box {
		width: 16rem;
	}
</style>
