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
		<ul class="menu p-4 w-80 h-full bg-base-200 shadow-xl">
			<label for="" class="menu-title"> PRINCIPAL </label>
			<li><a href="/home"><Whatsapp /> Whatsapp</a></li>
			<li><a href="/conexiones"><Arrows /> Conexiones</a></li>
			<li><a href="/contactos"><Contactos /> Contactos</a></li>
			<li><a href="/respuestas"><Respuestas /> Respuestas Rapidas</a></li>
			<label for="" class="menu-title"> ADMINISTRACIÓN </label>
			<li><a href="/equipo"><Equipo /> Equipo</a></li>
			<li><a href="/chatbots"><Chatbots /> Chatbots</a></li>
			<li><a href="/campaña"><Campaa /> Campañas</a></li>
			<li><a href="/informes"><Informes /> Informes</a></li>
			<li><a href="/configuracion"><Configuracion /> Configuracion</a></li>
		</ul>
	</div>
</div>
