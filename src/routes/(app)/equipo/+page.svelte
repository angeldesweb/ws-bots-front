
<div class="flex justify-between pt-6 pr-5">
    <h1 class="text-3xl pl-7 pt-3 text-[#7914f1] font-medium">Usuarios</h1>
    <div class="flex items-center">
        <div class="form-control pr-3">
            <div class="input-group">
                <button class="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <input type="text" placeholder="Search…" class="input input-bordered" />
            </div>
        </div> 
        <button class="btn m-2 bg-violet-600 text-[#fff] hover:bg-violet-800" onclick="my_modal_1.showModal()">AGREGAR USUARIO</button>
        <dialog id="my_modal_1" class="modal">
            <form method="dialog" class="modal-box">
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <h2 class="text-lg font-medium mb-4">Agregar usuario</h2>
                    <form class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Nombre:</label>
                            <input  type="text"
                                    name="name"
                                    class="w-full border border-gray-400 rounded-lg py-2 px-3">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Contraseña:</label>
                            <input  type="password" 
                                    name="password"
                                    class="w-full border border-gray-400 rounded-lg py-2 px-3">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Correo Electrónico:</label>
                            <input  type="text" 
                                    name="email"
                                    class="w-full border border-gray-400 rounded-lg py-2 px-3">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Perfil:</label>
                            <select name="profile"
                                    class="w-full border border-gray-400 rounded-lg py-2 px-3">
                                <option value="user">Adm</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Departamentos</label>
                            <select class="w-full border border-gray-400 rounded-lg py-2 px-3">
                                <option value="">
                                    Seleccione un departamento
                                </option>
                                <option value="1">
                                    Departamento 1
                                </option>
                                <option value="2">
                                    Departamento 2
                                </option>
                            </select>
                        </div>
                        <div class="flex justify-end mt-4">
                            <button type="button"
                                    class="bg-gray-400 hover:bg-gray-500 px-4 py-2 rounded-lg text-white font-medium mr-4">
                                Cancelar
                            </button>
                            <button type="submit"
                                    class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-medium">
                                Guardar
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
                    <th>Correo Electronico</th>
                    <th>Perfil</th>
                    <th>Ultima sesión</th>
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
