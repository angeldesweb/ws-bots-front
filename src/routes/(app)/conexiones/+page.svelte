<script>
    import Whatsapp from "../../../lib/icons/Icons-Seccion/Whatsapp.svelte";

    let valores = [];

    function agregarValor(event) {
        event.preventDefault();
        const valor = event.target.name.value;
        valores = [...valores, valor];
        event.target.name.value = '';
    }

    function mostrarInfo() {
        const input = document.querySelector("#name");
    if (input) {
        // @ts-ignore
        description = input.value;
        } else {
        console.log('El input no existe en la página');
    }
    }

    function eliminarValor(valor) {
        valores = valores.filter(v => v !== valor);
    }
</script>

    <div class="flex justify-between pt-6 pr-5">
        <h1 class="text-3xl pl-7 pt-3 font-medium link-info ">Conexiones</h1>
        <div class="dropdown dropdown-bottom dropdown-end">
            <label for="" tabindex="0" class="btn m-2 bg-violet-600 text-[#fff] hover:bg-violet-800">AGREGAR</label>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a onclick="my_modal_1.showModal()"> 
                        <Whatsapp />
                        Whatsapp
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <dialog id="my_modal_1" class="modal">
        <section class="modal-box p-0">
            <h2 class="text-2xl font-medium mb-4 pl-5 pt-5">Agregar conexion</h2>
            <form  method="dialog" class="space-y-4 p-5 border-t border-gray-400 border-solid" on:submit={agregarValor} action="#">
                <div>
                    <input  type="text"
                            name="name"
                            id="name"
                            placeholder="Nombre"
                            required
                            class="w-56 border text-black focus:outline-none focus:ring focus:ring-violet-500 border-gray-400 rounded py-2 mb-4 px-3">
                    <textarea   rows="5" 
                                name="greetingMessage"
                                placeholder="Mensaje de Saludo"
                                class="w-full  text-black max-h-24 focus:outline-none focus:ring focus:ring-violet-500 border border-gray-400 rounded py-2 px-3"
                    ></textarea>
                    <textarea   rows="4" 
                                name="farewellMessage"
                                placeholder="Mensaje de Despedida"
                                class="w-full text-black max-h-24 focus:outline-none focus:ring focus:ring-violet-500 border border-gray-400 rounded py-2 my-3 px-3"
                    ></textarea>
                    <h5 class="text-sm font-medium pb-1">Departamentos</h5>
                    <select name="departments" class="w-full text-black focus:outline-none border border-gray-400 rounded mb-3 py-2 px-3">
                        <option>Hablar con un asesor</option>
                        <option>Reclamos</option>
                        <option>Soporte</option>
                        <option>Ventas</option>
                    </select>
                </div>
                <div class="flex justify-end">
                    <button type="button"
                            class="bg-gray-200 hover:bg-gray-300 text-[#000] px-4 py-2 rounded-lg font-medium mr-4">
                        Cancelar
                    </button>
                    <button type="submit"
                            class="btn bg-violet-600 text-[#fff] hover:bg-violet-800 px-4 py-2 rounded-lg font-medium">
                        Guardar
                    </button>
                </div>
            </form>
        </section>
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
                {#each valores as valor}
                <tbody>
                    <!-- row 1 -->
                    <tr class="bg-base-200 text-center">
                        <td class="MuiTableCell-text inline-block mt-2">
                            <Whatsapp />
                        </td>
                        <td class="MuiTableCell-text" id="nombre">{valor}</td>
                        <td>...</td>
                        <td>...</td>
                        <td>
                            <button class="btn bg-blue-500 hover:bg-blue-600 text-white shadow-md" onclick="my_modal_2.showModal()">CODE QR</button>
                            <dialog id="my_modal_2" class="modal">
                            <form method="dialog" class="modal-box">
                                <div class="card ">
                                    <figure>
                                       <!-- C O D I G O  Q R -->
                                    </figure>
                                    <div class="card-body">
                                      <h2 class="card-title">Codigo QR</h2>
                                      <div class="card-actions justify-end">
                                        <button class="btn btn-primary">Listo!</button>
                                      </div>
                                    </div>
                                  </div>
                            </form>
                            <form method="dialog" class="modal-backdrop">
                                <button>close</button>
                            </form>
                            </dialog>
                        </td>
                        <td>...</td>
                        <td class="MuiTableCell-text inline-block"
							on:click={() => eliminarValor(valor)}>
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                             </svg>
						</td>
                    </tr>
                </tbody>
                {/each}
            </table>
        </div>
    </section>
