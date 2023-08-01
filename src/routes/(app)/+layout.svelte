<script>
	import { Arrows, Whatsapp } from '$lib/icons';
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<!-- SIDEBAR -->
		<ul class="menu p-4 w-80 h-full bg-base-200 shadow-xl">
			<li><a href="/home"><Whatsapp /> Whatsapp</a></li>
			<li><a href="/conexiones"><Arrows /> Conexiones</a></li>
		</ul>
	</div>
</div>
