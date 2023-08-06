<script>
	import { io } from 'socket.io-client';
	import { onMount } from 'svelte';
	import Qr from 'qrcode';
	import { browser } from '$app/environment';

	export let data;
	
	let activeBtn = 1;

	function handleClick(btn) {
	activeBtn = btn;
	}

	let activeBtn2 = 4;

	function handleClick2(btn) {
	activeBtn2 = btn;
	}

	let mostrarDiv1 = true;
	let mostrarDiv2 = false;
  
	function cambiarVisibilidad() {
	mostrarDiv1 = true;
	mostrarDiv2 = false;
	mostrarDiv3 = true;
	
	}

	function cambiarVisibilidadR() {
	mostrarDiv1 = false;
	mostrarDiv2 = true;
	mostrarDiv3 = false;
	mostrarDiv4 = false;
	}

	let mostrarDiv3 = true;
	let mostrarDiv4 = false;
  
	function cambiarVisibilidad2() {
	mostrarDiv3 = true;
	mostrarDiv4 = false;
	}

	function cambiarVisibilidad3() {
	mostrarDiv3 = false;
	mostrarDiv4 = true;
	}

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
<!-- <div>
	<canvas class="box {hasCode ? 'rounded-box shadow-xl p-4' : ''} m-auto" bind:this={canvas} />
</div> -->
	


<div class="flex m-5 h-3/4 rounded-xl">
	<div class="w-1/2 h-full shadow-lg border border-solid divide-gray-200 rounded-xl rounded-r-none">
		<!-- Buttons -->
		<div class="flex rounded justify-between mb-4" >
			<div class="w-full px-5 py-2 cursor-pointer text-center rounded-tl-lg btn-primary "  on:click={cambiarVisibilidad} on:click={() => handleClick(1)} class:border-b-4={activeBtn === 1}  class:text-violet-700={activeBtn === 1} class:border-violet-700={activeBtn === 1}>
				<span class="flex justify-center p-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-transition-bottom" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3"></path>
						<path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
						<path d="M12 9v8"></path>
						<path d="M9 14l3 3l3 -3"></path>
						</svg>
				</span>
				<span class="font-medium">ABIERTO</span>
			</div>
			<div class="w-full  px-6 py-2 cursor-pointer text-center btn-primary" on:click={cambiarVisibilidadR} on:click={() => handleClick(2)} class:border-b-4={activeBtn === 2}  class:text-violet-700={activeBtn === 2} class:border-violet-700={activeBtn === 2}>
				<span class="flex justify-center p-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checkbox" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M9 11l3 3l8 -8"></path>
						<path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
						</svg>
				</span>
				<span class="font-medium">RESUELTO</span>
			</div>
			<!-- <div class="w-full bg-gray-100 hover:bg-gray-200 px-5 py-2 cursor-pointer" on:click={handleClick}  on:click={() => handleClick(3)} class:border-b-4={activeBtn === 3}  class:text-violet-700={activeBtn === 3} class:border-violet-700={activeBtn === 3 } >
				<span class="flex justify-center p-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M8 9h8"></path>
						<path d="M8 13h5"></path>
						<path d="M12 21l-.5 -.5l-2.5 -2.5h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5"></path>
						<path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
						<path d="M20.2 20.2l1.8 1.8"></path>
						</svg>
				</span>
				<span class="font-medium">BUSCAR</span>
			</div> -->
		</div>
		
		<div class="flex mt-3 justify-around ">
			<div class="flex bg-gray-200 ml-3 rounded border border-gray-300 ">
				<button class="px-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
				</button>
				<input type="text" placeholder="Buscar…" class="w-44 pl-2 focus:outline-none text-black" />
			</div>
			<div class="flex items-center justify-center ml-1 p-3 cursor-pointer hover:bg-slate-200 rounded-full">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-filter-cog" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5"></path>
					<path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
					<path d="M19.001 15.5v1.5"></path>
					<path d="M19.001 21v1.5"></path>
					<path d="M22.032 17.25l-1.299 .75"></path>
					<path d="M17.27 20l-1.3 .75"></path>
					<path d="M15.97 17.25l1.3 .75"></path>
					<path d="M20.733 20l1.3 .75"></path>
					</svg>
			</div>
			<div class="flex items-center justify-center p-3 cursor-pointer hover:bg-slate-200 rounded-full">
				<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tags" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
					<path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z"></path>
					<path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116"></path>
					<path d="M6 9h-.01"></path>
					</svg>
			</div>
		</div> 
		
		
		{#if mostrarDiv1}
			<div class="flex mt-3">

				<!-- Mis Chats-->
				<button class=" w-full flex justify-center  items-center bg-gray-100 rounded h-14 btn-primary hover:bg-none rounded-tr-none" on:click={cambiarVisibilidad2} on:click={() => handleClick2(4)} class:border-b-4={activeBtn2 === 4}  class:text-violet-700={activeBtn2 === 4} class:border-violet-700={activeBtn2 === 4 } >
					<span class="pr-1">Mis chats</span>
					<div tabindex="0" class="dropdown dropdown-bottom p-1 cursor-pointer hover:bg-slate-200 rounded-full">
							<label  class="">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down m-1" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M6 9l6 6l6 -6"></path>
									</svg>
							</label>
							<ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
								<li><a>Mis chats</a></li>
								<li><a>Todos los chats</a></li>
							</ul>
					</div>
				</button>

				<!-- En espera -->
				<button class="w-full flex justify-center items-center bg-gray-100 rounded h-14 btn-primary hover:bg-none rounded-tl-none" on:click={cambiarVisibilidad3} on:click={() => handleClick2(5)} class:border-b-4={activeBtn2 === 5}  class:text-violet-700={activeBtn2 === 5} class:border-violet-700={activeBtn2 === 5 }>
					<span>En espera</span>
				</button>
			</div>		
		{/if}

		
			{#if mostrarDiv3}
			<!-- Mis Chats-content -->
			<div class=" text-center my-[25%]">
				<span class=""
					>¡Aun no hay mensajes!
				</span>
			</div>
			{/if}

			{#if mostrarDiv4}
			<!-- Mis Chats-content -->
			<div class="text-center my-[25%]">
				<span class="jss104"
					>¡Nada acá!
				</span>
				<p class="jss103">
					No se encontraron chats con este
					término de búsqueda
				</p>
			</div>
			{/if}

			{#if mostrarDiv2}
			<!-- Resueltos -->
				<div class="text-center my-[25%]">
					<span class=""
						>¡Nada acá!
					</span>
					<p class="">
						No se encontraron chats con este
						término de búsqueda
					</p>
				</div>
			{/if}		
	</div>
	
	<div class="w-full h-full shadow-lg border border-solid divide-gray-200 rounded-xl rounded-l-none">
		<div class="card mb-4 text-center my-[25%]">
			<p class="jss104">
				Selecciona un chat para empezar a chatear
			</p>
		</div>
	</div>
</div>


<style>
	.box {
		width: 16rem;
	}
</style>
