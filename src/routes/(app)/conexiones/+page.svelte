<script>
	import Whatsapp from '../../../lib/icons/Icons-Seccion/Whatsapp.svelte';
</script>

<div class="flex justify-between pt-6 pr-5">
	<h1 class="text-3xl pl-7 pt-3 text-[#7914f1] font-medium">Conexiones</h1>
	<div class="dropdown dropdown-bottom dropdown-end">
		<label for="" tabindex="-1" class="btn m-2 bg-violet-600 text-[#fff] hover:bg-violet-800"
			>AGREGAR</label
		>
		<ul tabindex="-1" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
			<li>
				<a href={null} onclick="my_modal_1.showModal()">
					<Whatsapp />
					Whatsapp
				</a>
			</li>
		</ul>
	</div>
</div>
<dialog id="my_modal_1" class="modal">
	<form method="dialog" class="modal-box">
		<section>
			<div role="dialog" class="bg-white rounded-lg shadow-lg p-6">
				<h2 class="text-lg font-medium mb-4">Agregar contacto</h2>
				<form action="#" class="space-y-4">
					<div>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Nombre"
							required
							class="w-full border border-gray-400 rounded-lg py-2 px-3"
						/>
						<textarea
							rows="5"
							name="greetingMessage"
							placeholder="Mensaje de Saludo"
							class="w-full border border-gray-400 rounded-lg py-2 px-3"
						/>
						<textarea
							rows="4"
							name="farewellMessage"
							placeholder="Mensaje de Despedida"
							class="w-full border border-gray-400 rounded-lg py-2 px-3"
						/>
						<h5 class="text-sm font-medium mt-4">Departamentos</h5>
						<select name="departments" class="w-full border border-gray-400 rounded-lg py-2 px-3">
							<option>Option 1</option>
							<option>Option 1</option>
							<option>Option 1</option>
							<option>Option 1</option>
						</select>
						<h6 class="text-sm font-medium mt-4">Reinicie chatbot después de</h6>
						<input
							name="ticketReopenPeriod"
							type="text"
							value="15"
							class="w-full border border-gray-400 rounded-lg py-2 px-3"
						/>
					</div>
					<div class="flex justify-end mt-4">
						<button
							type="button"
							class="bg-gray-400 hover:bg-gray-500 px-4 py-2 rounded-lg text-white font-medium mr-4"
						>
							Cancelar
						</button>
						<button
							type="submit"
							class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-medium"
						>
							Guardar
						</button>
					</div>
				</form>
			</div>
		</section>
	</form>
</dialog>

<section class="mt-1 mx-5 p-4 shadow-lg h-4/6 border border-solid divide-gray-200 rounded-xl">
	<div class="overflow-x-auto">
		<table class="table text-center">
			<!-- head -->
			<thead class="text-base bg-[#7914f1] text-[#fff]">
				<tr>
					<th>Canal</th>
					<th>Nombre</th>
					<th>Telefono</th>
					<th>Estado</th>
					<th>Sesión</th>
					<th>Última Actualizacion</th>
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->
				<tr class="bg-base-200 text-center">
					<th>ICON</th>
					<td>...</td>
					<td>...</td>
					<td>...</td>
					<td>...</td>
					<td>...</td>
					<td>...</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
