<script>
	import Whatsapp from '../../lib/icons/Icons-Seccion/Whatsapp.svelte';
	import Arrows from '../../lib/icons/Icons-Seccion/Arrows.svelte';
	import Contactos from '../../lib/icons/Icons-Seccion/Contactos.svelte';
	import Campaa from '../../lib/icons/Icons-Seccion/Campaña.svelte';
	import Chatbots from '../../lib/icons/Icons-Seccion/Chatbots.svelte';
	import Equipo from '../../lib/icons/Icons-Seccion/Equipo.svelte';
	import Respuestas from '../../lib/icons/Icons-Seccion/Respuestas.svelte';
	import Informes from '../../lib/icons/Icons-Seccion/Informes.svelte';
	import Configuracion from '../../lib/icons/Icons-Seccion/Configuracion.svelte';


</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
		<slot />
	</div>
	
	<div class="drawer-side w-4/5">
		<label for="my-drawer-2" class="drawer-overlay" />
		<!-- SIDEBAR -->
		<ul class="menu p-1 pt-4 w-60 h-full bg-[#7914f1] shadow-xl text-white  text-lg font-medium">
			<label for="" class="menu-title text-gray-200"> PRINCIPAL </label>
			<li><a href="/home" class="pb-3 hover:bg-indigo-100 hover:text-black focus:ring focus:ring-violet-300"><Whatsapp /> Whatsapp</a></li>
			<li><a href="/conexiones" class="pb-3 hover:bg-indigo-100 hover:text-black focus:ring focus:ring-violet-300"><Arrows /> Conexiones</a></li>
			<li><a href="/contactos" class="pb-3 hover:bg-indigo-100 hover:text-black focus:ring focus:ring-violet-300"><Contactos /> Contactos</a></li>
			<li><a href="/respuestas" class="pb-3 hover:bg-indigo-100 hover:text-black focus:ring focus:ring-violet-300"><Respuestas /> Respuestas Rapidas</a></li>
			<label for="" class="menu-title text-gray-200"> ADMINISTRACIÓN </label>
			<li><a href="/equipo" class="pb-3 hover:bg-indigo-100 hover:text-black focus:ring focus:ring-violet-300"><Equipo /> Equipo</a></li>
			<li><a href="/chatbots" class="pb-3 hover:bg-indigo-100 hover:text-black focus:ring focus:ring-violet-300"><Chatbots /> Chatbots</a></li>
			<li><a href="/campaña" class="pb-3 hover:bg-indigo-100 hover:text-black focus:ring focus:ring-violet-300"><Campaa /> Campañas</a></li>
			<li><a href="/informes" class="pb-3 hover:bg-indigo-100 hover:text-black focus:ring focus:ring-violet-300"><Informes /> Informes</a></li>
			<li><a href="/configuracion" class="pb-3 hover:bg-indigo-100 hover:text-black focus:ring focus:ring-violet-300"><Configuracion /> Configuracion</a></li>
		</ul>
	</div>
</div>
