
<div class="flex justify-between pt-6 pr-5">
    <h1 class="text-3xl pl-7 pt-3 link-info font-medium">Campañas</h1>
    <div class="flex items-center">
        <select class="select select-bordered mr-2 max-w-xs">
            <option disabled selected>Estado</option>
            <option>Sin etiqueta</option>
            <option>Nuevo cliente</option>
            <option>Pagado</option>
            <option>Pago pendiente</option>
        </select>
        <button class="btn m-2 bg-violet-600 text-[#fff] hover:bg-violet-800" onclick="my_modal_1.showModal()">NUEVA CAMPAÑA</button>
        <dialog id="my_modal_1" class="modal">
            <form method="dialog" class="modal-box p-0">
                <h2 class="text-2xl font-medium mb-4 pl-5 pt-5">Nueva campaña</h2>
                <form class="space-y-4 p-5 border-t border-gray-400 border-solid">
                    <div>
                        <label class="block text-sm font-medium  mb-3">Nombre</label>
                        <input  name="name" 
                                type="text" 
                                class="w-full text-black focus:outline-none focus:ring focus:ring-violet-500 border border-gray-400 rounded py-2 px-3">
                    </div>
                    <div class="flex items-center">
                        <label class="block text-sm font-medium  mr-2">Modo rápido</label>
                        <input  type="checkbox" 
                                name="fastMode"
                                class="form-checkbox h-4 w-4 text-green-500">
                    </div>
                    <div>
                        <label class="block text-sm font-medium  mb-3">Seleccione una conexión*</label>
                        <select class="w-full text-black focus:outline-none border border-gray-400 rounded py-2 px-3">
                            <option value="">Seleccione una conexión</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium  mb-3">Mensaje estándar</label>
                        <textarea   name="globalBody" 
                                    rows="5"
                                    class="w-full text-black max-h-24 focus:outline-none focus:ring focus:ring-violet-500 border border-gray-400 rounded py-2 px-3"
                        >Escriba su mensaje...</textarea>
                        
                    </div>
                    <div>
                        <button class="bg-blue-500 hover:bg-blue-600 py-2 px-4 mb-3 rounded text-white font-medium">Importar archivo XLSX</button>
                    </div>
                    <div class="flex justify-end mt-4">
                        <button type="button"
                                class="bg-gray-200 hover:bg-gray-300 text-[#000] px-4 py-2 rounded-lg font-medium mr-4">
                            Cancelar
                        </button>
                        <button type="submit"
                                class="btn bg-violet-600 text-[#fff] hover:bg-violet-800 px-4 py-2 rounded-lg font-medium">
                            Añadir
                        </button>
                    </div>
                </form>
            </form>
        </dialog>
    </div>
</div>

<section class="mt-1 mx-5 p-4 shadow-lg h-4/6 border border-solid divide-gray-200 rounded-xl">
    <div class="overflow-x-auto">
        <table class="table text-center">
            <!-- head -->
            <thead class="text-base bg-[#7914f1] text-[#fff]">
                <tr>
                    <th>Nombre de campaña</th>
                    <th>Creado en</th>
                    <th>Progreso</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr class="bg-base-200 text-center">
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
