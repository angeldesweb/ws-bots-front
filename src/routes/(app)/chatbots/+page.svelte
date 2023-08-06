
<div class="flex justify-between pt-6 pr-5">
    <h1 class="text-3xl pl-7 pt-3 link-info font-medium">Departamentos & Chatbots</h1>
    <div class="flex items-center">
        <button class="btn m-2 bg-violet-600 text-[#fff] hover:bg-violet-800" onclick="my_modal_1.showModal()">AGREGAR DEPARTAMENTO</button>
        <dialog id="my_modal_1" class="modal">
            <form method="dialog" class="modal-box p-0">
                <div id="form-dialog-title">
                    <h2 class="text-2xl font-medium mb-4 pl-5 pt-5">Agregar departamento</h2>
                </div>
                <form action="#" class="space-y-4 p-5 border-t border-gray-400 border-solid">
                    <div class="flex justify-between">
                        <div>
                            <label class="block text-sm font-medium  mb-3">Nombre</label>
                            <input  name="name" 
                                    type="text" 
                                    value=""
                                    class="w-full text-black focus:outline-none focus:ring focus:ring-violet-500 border border-gray-400 rounded py-2 px-3">
                        </div>
                        <div>
                            <label class="block text-sm font-medium  mb-3">Color</label>
                            <input  id="color" 
                                    name="color" 
                                    type="text" 
                                    value=""
                                    class="w-full text-black focus:outline-none focus:ring focus:ring-violet-500 border border-gray-400 rounded py-2 px-3">
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium  mb-3">Mensaje de saludo del departamento</label>
                        <textarea   name="greetingMessage" 
                                    rows="5"
                                    class="w-full text-black max-h-24 focus:outline-none focus:ring focus:ring-violet-500 border border-gray-400 rounded py-2 px-3"
                        >Mensaje de saludo...</textarea>
                    </div>
                    <h6 class="text-sm font-medium  mb-2">Opciones</h6>
                    <div>
                        <div class="bg-gray-100 text-black py-2 px-4 rounded">Agregar opción</div>
                    </div>
                    <div class="flex items-center">
                        <input  id="auto-assign-toggle" 
                                type="checkbox" 
                                class="mr-2 text-black">
                        <label class="text-sm  font-medium  cursor-pointer" for="auto-assign-toggle">Habilitar asignación automática</label>
                    </div>
                    <div class="flex items-center">
                        <input  id="offline-users-toggle" 
                                type="checkbox" 
                                class="mr-2 text-black">
                        <label class="text-sm font-medium  cursor-pointer" for="offline-users-toggle">Asignar a usuarios fuera de línea</label>
                    </div>
                    <div class="bg-gray-100 text-black py-2 px-4 rounded-lg">Tabla de usuarios del departamento</div>
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
