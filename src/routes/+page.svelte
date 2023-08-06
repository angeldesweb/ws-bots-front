<script>
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="box background ">
	
	<div class="card shadow-xl bg-white">
		<div class="h-20 flex justify-center items-center bg-[#f7f7f7;] rounded-xl">
			<img src="src\lib\img\logo-dark.png" width="260" alt="">
		</div>
		<form action="?/login" method="post" use:enhance class="p-8 border-t border-solid border-opacity-50 font-semibold">
			<div class="form-control mb-3">
				<label for="" class="label">
					<span class="label-text">Usuario</span>
				</label>
				<input
					type="text"
					name="username"
					class="input input-bordered focus:outline-none focus:ring focus:ring-violet-600 border"
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
					class="input input-bordered focus:outline-none focus:ring focus:ring-violet-500 border"
					placeholder="Ingrese su contraseña"
				/>
			</div>
			<div class="py-4 mt-2 text-center">
				<button class="btn btn-primary w-full">Iniciar sesión</button>
			</div>
		</form>
	</div>
</div>


<style>
	.card {
		width: 30rem;
		margin: 4rem auto;
	}

	.background{
		background-image: linear-gradient(11deg, #5d00cb, #ffffff00);
		height: 90vh;
		overflow-x: auto;
	}
</style>
