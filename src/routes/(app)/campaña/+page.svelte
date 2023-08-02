
<div class="flex justify-between pt-6 pr-5">
    <h1 class="text-3xl pl-7 pt-3 text-[#7914f1] font-medium">Campañas</h1>
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
            <form method="dialog" class="modal-box">
                <div role="dialog" class="bg-white rounded-lg shadow-lg p-6">
                    <h2 class="text-lg font-medium mb-4">Nueva campaña</h2>
                    <form class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Nombre</label>
                            <input  name="name" 
                                    type="text" 
                                    class="w-full border border-gray-400 rounded-lg py-2 px-3">
                        </div>
                        <div class="flex items-center">
                            <label class="block text-sm font-medium text-gray-700 mr-2">Modo rápido</label>
                            <input  type="checkbox" 
                                    name="fastMode"
                                    class="form-checkbox h-4 w-4 text-green-500">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Seleccione una conexión*</label>
                            <select class="w-full border border-gray-400 rounded-lg py-2 px-3">
                                <option value="">Seleccione una conexión</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Mensaje estándar</label>
                            <textarea   name="globalBody" 
                                        rows="5"
                                        class="w-full border border-gray-400 rounded-lg py-2 px-3">
                            </textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Variables disponibles</label>
                            <input  type="text" 
                                    disabled
                                    class="w-full bg-gray-200 py-2 px-3 rounded-lg">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Importar archivo XLSX</label>
                            <button class="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg text-white font-medium">Descarga el archivo de muestra</button>
                        </div>
                        <div class="flex justify-end mt-4">
                            <button type="button"
                                    class="bg-gray-400 hover:bg-gray-500 px-4 py-2 rounded-lg text-white font-medium mr-4">
                                Cancelar
                            </button>
                            <button type="submit"
                                    class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-medium">
                                Añadir
                            </button>
                        </div>
                    </form>
                </div>
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
