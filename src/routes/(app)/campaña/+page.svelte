
<div class="flex justify-between pt-6 pr-5">
    <h1 class="text-3xl pl-7 pt-3">Campañas</h1>
    <div class="flex items-center">
        <select class="select select-bordered mr-2 max-w-xs">
            <option disabled selected>Estado</option>
            <option>Sin etiqueta</option>
            <option>Nuevo cliente</option>
            <option>Pagado</option>
            <option>Pago pendiente</option>
        </select>
        <button class="btn m-2" onclick="my_modal_1.showModal()">NUEVA CAMPAÑA</button>
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
