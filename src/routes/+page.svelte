<script>
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="box">
	<div class="card shadow-xl p-8">
		<form action="?/login" method="post" use:enhance>
			<div class="form-control">
				<label for="" class="label">
					<span class="label-text">Usuario</span>
				</label>
				<input
					type="text"
					name="username"
					class="input input-bordered"
					placeholder="Nombre de usuario"
				/>
			</div>
			<div class="form-control">
				<label for="" class="label">
					<span class="label-text">Contraseña</span>
				</label>
				<input
					type="password"
					name="password"
					class="input input-bordered"
					placeholder="Ingrese su contraseña"
				/>
			</div>
			<div class="py-4">
				<button class="btn btn-primary">Iniciar sesión</button>
			</div>
		</form>
	</div>
</div>

<style>
	.card {
		width: 30rem;
		margin: 4rem auto;
	}
</style>
