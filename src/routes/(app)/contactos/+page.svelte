
<div class="flex justify-between pt-6 pr-5">
    <h1 class="text-3xl pl-7 pt-3 link-info font-medium">Contactos</h1>
    <div class="flex items-center">
        <select class="select select-bordered mr-2 max-w-xs">
            <option disabled selected>Etiquetas</option>
            <option>Sin etiqueta</option>
            <option>Nuevo cliente</option>
            <option>Pagado</option>
            <option>Pago pendiente</option>
        </select>
        <div class="form-control">
            <div class="input-group">
                <button class="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <input type="text" placeholder="Buscar…" class="input input-bordered" />
            </div>
        </div> 
        <button class="btn m-2 bg-violet-600 text-[#fff] hover:bg-violet-800" onclick="my_modal_1.showModal()">AGREGAR CONTACTO</button>
        <dialog id="my_modal_1" class="modal">
            <form method="dialog" class="modal-box p-0">
                <h2 class="text-2xl font-medium mb-4 pt-5 pl-4">Agregar contacto</h2>
                <form class="space-y-4 p-4 border-t border-gray-400 border-solid" action="#">
                    <h5 class="text-sm font-medium">Detalles del contacto</h5>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <input name="name" 
                                   type="text" 
                                   value="" 
                                   placeholder="Nombre"
                                   class="w-full text-black focus:outline-none focus:ring focus:ring-violet-500 border border-gray-400 rounded py-2 px-3">
                        </div>
                        <div>
                            <input name="number" 
                                   placeholder="+1 23456789" 
                                   type="text" 
                                   value=""
                                   class="w-full text-black focus:outline-none focus:ring focus:ring-violet-500 border border-gray-400 rounded py-2 px-3">
                        </div>
                        <div>
                            <input name="treatmentName" 
                                   type="text" 
                                   value="" 
                                   placeholder="Procedimiento"
                                   class="w-full text-black focus:outline-none focus:ring focus:ring-violet-500 border border-gray-400 rounded py-2 px-3">
                        </div>
                        <div>
                            <input name="email" 
                                   type="text"  
                                   value="" 
                                   placeholder="Correo Electrónico"
                                   class="w-full text-black focus:outline-none focus:ring focus:ring-violet-500 border border-gray-400 rounded py-2 px-3">
                        </div>
                    </div>
                    <h4 class="text-sm font-medium mt-4">Información Adicional</h4>
                    <div class="mb-0">
                        <button type="button"
                                class="bg-blue-500 hover:bg-blue-600 px-4 py-2  rounded text-white w-full font-medium">
                            + AGREGAR INFORMACIÓN
                        </button>
                    </div>
                </form>
                <div class="flex justify-end pr-4 pb-4 mt-3">
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
        </dialog>
    </div>
</div>

<section class="mt-1 mx-5 p-4 shadow-lg h-4/6 border border-solid divide-gray-200 rounded-xl">
    <div class="overflow-x-auto">
        <table class="table text-center">
            <!-- head -->
            <thead class="text-base  bg-[#7914f1] text-[#fff]">
                <tr>
                <th></th>
                    <th>Nombre</th>
                    <th>Whatsapp</th>
                    <th>Correo Electronico</th>
                    <th>Etiquetas</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr class="bg-base-200 text-center">
                <th>Img</th>
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
