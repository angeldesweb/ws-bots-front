<script>
	import Whatsapp from '$lib/icons/Icons-Seccion/Whatsapp.svelte';
	import Arrows from '$lib/icons/Icons-Seccion/Arrows.svelte';
	import Contactos from '$lib/icons/Icons-Seccion/Contactos.svelte';
	import Campaa from '$lib/icons/Icons-Seccion/Campaña.svelte';
	import Chatbots from '$lib/icons/Icons-Seccion/Chatbots.svelte';
	import Equipo from '$lib/icons/Icons-Seccion/Equipo.svelte';
	import Respuestas from '$lib/icons/Icons-Seccion/Respuestas.svelte';
	import Informes from '$lib/icons/Icons-Seccion/Informes.svelte';
	import Configuracion from '$lib/icons/Icons-Seccion/Configuracion.svelte';
	import OpenSidebar from '$lib/icons/OpenSidebar.svelte';
	import Notificacion from '$lib/icons/Icons-Menu/Notificacion.svelte';
	import Usuario from '$lib/icons/Icons-Menu/Usuario.svelte';
	import Lenguaje from '$lib/icons/Icons-Menu/Lenguaje.svelte';
</script>

<header class="navbar shadow-xl bg-[#7914f1] px-4 justify-between">
	<div>
		<div class="navbar-start text-white text-2xl w-64">Whatsapp/Technojet</div>
		<label for="" class="swap text-[#e5e7eb]">
			<!-- this hidden checkbox controls the state -->
			<input type="checkbox" />
			<svg
				class="fill-current w-7 h-8"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 512 512"
			>
				<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
			</svg>
		</label>
	</div>
	<div class="navbar-center" />
	<div class="navbar-end w-28">
		<button class="btn btn-ghost normal-case text-[#fff] p-0 mx-3">
			<label for="" class="swap swap-rotate text-[#fff] items-center">
				<!-- this hidden checkbox controls the state -->
				<input type="checkbox" />
				<!-- sun icon -->
				<svg
					class="swap-off fill-current w-16 h-8"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
					/>
				</svg>
				<!-- moon icon -->
				<svg
					class="swap-on fill-current w-16 h-8"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
					/></svg
				>
			</label>
		</button>

		<!-- Lenguaje -->
		<div class="dropdown dropdown-bottom dropdown-end">
			<label for="" tabindex="-1" class="btn btn-ghost normal-case text-[#fff] p-1 mx-1">
				<div class="flex">
					<svg
						class="fill-current w-16 h-8"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 512 512"
					>
						<path
							d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"
						/>
						<path
							d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"
						/>
					</svg>
					<svg
						width="12px"
						height="12px"
						class="hidden h-2 w-2 fill-current opacity-60 sm:flex m-auto"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 2048 2048"
					>
						<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
					</svg>
				</div>
			</label>
			<ul
				tabindex="-1"
				class="dropdown-content z-[1] menu p-2 shadow bg-base-100 my-4 rounded-box w-52"
			>
				<li><a href={null}>English</a></li>
				<li><a href={null}>Español</a></li>
				<li><a href={null}>Portugues</a></li>
			</ul>
		</div>

		<!-- Notificacion -->
		<button class="btn btn-ghost normal-case text-[#fff] p-0 mx-3">
			<Notificacion />
		</button>

		<!-- Usuario -->
		<div class="dropdown dropdown-bottom dropdown-end">
			<label for="" tabindex="-1" class="btn btn-ghost normal-case text-[#fff] p-1 mx-1">
				<Usuario />
			</label>
			<ul
				tabindex="-1"
				class="dropdown-content z-[1] menu p-2 shadow bg-base-100 my-4 rounded-box w-52"
			>
				<li><b><a href={null}>Usuario ABC</a></b></li>
				<li><a href={null}>Configuracion</a></li>
				<li><a href="/logout">Cerrar sesion</a></li>
			</ul>
		</div>
	</div>
</header>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden"><OpenSidebar /></label>
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<!-- SIDEBAR -->
		<ul class="menu p-1 pt-4 w-60 h-full bg-[#7914f1] shadow-xl text-white text-lg font-medium">
			<label for="" class="menu-title text-gray-200"> PRINCIPAL </label>
			<li>
				<a href="/home" class="pb-3 hover:bg-indigo-100 focus:ring focus:ring-violet-300"
					><Whatsapp /> Whatsapp</a
				>
			</li>
			<li>
				<a href="/conexiones" class="pb-3 hover:bg-indigo-100 focus:ring focus:ring-violet-300"
					><Arrows /> Conexiones</a
				>
			</li>
			<li>
				<a href="/contactos" class="pb-3 hover:bg-indigo-100 focus:ring focus:ring-violet-300"
					><Contactos /> Contactos</a
				>
			</li>
			<li>
				<a href="/respuestas" class="pb-3 hover:bg-indigo-100 focus:ring focus:ring-violet-300"
					><Respuestas /> Respuestas Rapidas</a
				>
			</li>
			<label for="" class="menu-title text-gray-200"> ADMINISTRACIÓN </label>
			<li>
				<a href="/equipo" class="pb-3 hover:bg-indigo-100 focus:ring focus:ring-violet-300"
					><Equipo /> Equipo</a
				>
			</li>
			<li>
				<a href="/chatbots" class="pb-3 hover:bg-indigo-100 focus:ring focus:ring-violet-300"
					><Chatbots /> Chatbots</a
				>
			</li>
			<li>
				<a href="/campaña" class="pb-3 hover:bg-indigo-100 focus:ring focus:ring-violet-300"
					><Campaa /> Campañas</a
				>
			</li>
			<li>
				<a href="/informes" class="pb-3 hover:bg-indigo-100 focus:ring focus:ring-violet-300"
					><Informes /> Informes</a
				>
			</li>
			<li>
				<a href="/configuracion" class="pb-3 hover:bg-indigo-100 focus:ring focus:ring-violet-300">
					<Configuracion /> Configuracion
				</a>
			</li>
		</ul>
	</div>
</div>
