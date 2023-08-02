
<div class="flex justify-between pt-6 pr-5">
    <h1 class="text-3xl pl-7 pt-3 text-[#7914f1] font-medium">Departamentos & Chatbots</h1>
    <div class="flex items-center">
        <button class="btn m-2 bg-violet-600 text-[#fff] hover:bg-violet-800" onclick="my_modal_1.showModal()">AGREGAR DEPARTAMENTO</button>
        <dialog id="my_modal_1" class="modal">
            <form method="dialog" class="modal-box">
                <div role="dialog" class="bg-white rounded-lg shadow-lg p-6">
                    <div id="form-dialog-title">
                        <h2 class="text-lg font-medium mb-4">Agregar departamento</h2>
                    </div>
                    <form action="#" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Nombre</label>
                            <input  name="name" 
                                    type="text" 
                                    value=""
                                    class="w-full border border-gray-400 rounded-lg py-2 px-3">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Color</label>
                            <input  id="color" 
                                    name="color" 
                                    type="text" 
                                    value=""
                                    class="w-full border border-gray-400 rounded-lg py-2 px-3">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Mensaje de saludo del departamento</label>
                            <textarea   name="greetingMessage" 
                                        rows="5"
                                        class="w-full border border-gray-400 rounded-lg py-2 px-3">
                            </textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Variables disponibles</label>
                        </div>
                        <h6 class="text-sm font-medium text-gray-700 mb-2">Opciones</h6>
                        <div>
                            <div class="bg-gray-100 py-2 px-4 rounded-lg">Agregar opción</div>
                        </div>
                        <div class="flex items-center">
                            <input  id="auto-assign-toggle" 
                                    type="checkbox" 
                                    class="mr-2">
                            <label class="text-sm font-medium text-gray-700 cursor-pointer" for="auto-assign-toggle">Habilitar asignación automática</label>
                        </div>
                        <div class="flex items-center">
                            <input  id="offline-users-toggle" 
                                    type="checkbox" 
                                    class="mr-2">
                            <label class="text-sm font-medium text-gray-700 cursor-pointer" for="offline-users-toggle">Asignar a usuarios fuera de línea</label>
                        </div>
                        <div class="bg-gray-100 py-2 px-4 rounded-lg">Tabla de usuarios del departamento</div>
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
                    <th>Nombre</th>
                    <th>Color</th>
                    <th>Mensaje de saludo</th>
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
                </tr>
            </tbody>
        </table>
    </div>
</section>
