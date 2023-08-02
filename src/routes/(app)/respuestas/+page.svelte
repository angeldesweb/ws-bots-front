
<div class="flex justify-between pt-6 pr-5">
    <h1 class="text-3xl pl-7 pt-3">Respuestas Rapidas</h1>
    <div class="flex items-center">
        <div class="form-control pr-3">
            <div class="input-group">
                <button class="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <input type="text" placeholder="Search…" class="input input-bordered" />
            </div>
        </div> 
        <select class="select select-bordered mr-1 max-w-xs">
            <option disabled selected>Departamentos</option>
            <option>Sin departamento</option>
            <option>Hablar con un asesor</option>
            <option>Reclamo</option>
            <option>Soportes</option>
            <option>Ventas</option>
        </select>
        <button class="btn m-2" onclick="my_modal_1.showModal()">AÑADIR RESPUESTA RÁPIDA</button>
        <dialog id="my_modal_1" class="modal">
            <form method="dialog" class="modal-box">
                <h3 class="font-bold text-lg">Hello!</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
                <div class="modal-action">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
                </div>
            </form>
        </dialog>
    </div>
</div>

<section class="mt-1 mx-5 p-4 shadow-lg h-4/6 border border-solid divide-gray-200 rounded-xl">
    <div class="overflow-x-auto">
        <table class="table text-center">
            <!-- head -->
            <thead class="text-base">
                <tr>
                    <th>Atajo</th>
                    <th>Mensaje</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr class="bg-base-200 text-center">
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
