// 1. Lista de tareas y límite máximo
let tareas = []; // Almacenamos las tareas en un array
const maxTareas = 5; // Solo permitimos hasta 5 tareas

// 2. Función para mostrar mensajes
function mostrarAlerta(mensaje) {
    alert(mensaje);
}

// 3. Función para agregar una nueva tarea
function agregarTarea(titulo) {
    if (tareas.length >= maxTareas) {
        mostrarAlerta("No puedes agregar más de 5 tareas.");
        return;
    }
    tareas.push({ titulo: titulo, completada: false }); // Agregamos un objeto con el título y estado de la tarea
    mostrarAlerta(`Tarea "${titulo}" agregada.`);
}

// 4. Función para listar las tareas
function verTareas() {
    if (tareas.length === 0) {
        mostrarAlerta("No hay tareas.");
        return;
    }
    let listaTareas = tareas
        .map((tarea, index) => `${index + 1}. ${tarea.titulo} [${tarea.completada ? "Completada" : "Pendiente"}]`)
        .join("\n");
    mostrarAlerta("Tus tareas:\n" + listaTareas);
}

// 5. Función para completar o eliminar tareas
function manejarTarea(indice, accion) {
    if (indice < 1 || indice > tareas.length) {
        mostrarAlerta("Índice no válido.");
        return;
    }

    if (accion === "completar") {
        tareas[indice - 1].completada = true;
        mostrarAlerta(`Tarea "${tareas[indice - 1].titulo}" completada.`);
    } else if (accion === "eliminar") {
        const tareaEliminada = tareas.splice(indice - 1, 1);
        mostrarAlerta(`Tarea "${tareaEliminada[0].titulo}" eliminada.`);
    }
}

// 6. Función para borrar todas las tareas
function borrarTodasLasTareas() {
    tareas.length = 0; // Vaciar el array de tareas
    mostrarAlerta("Todas las tareas han sido eliminadas.");
}

// 7. Menú principal
let opcion;
do {
    opcion = prompt("Selecciona una opción:\n1. Agregar tarea\n2. Ver tareas\n3. Completar tarea\n4. Eliminar tarea\n5. Eliminar todas las tareas\n6. Salir");

    switch (opcion) {
        case "1":
            const tituloNuevaTarea = prompt("Introduce el título de la tarea:");
            if (tituloNuevaTarea) {
                agregarTarea(tituloNuevaTarea);
            } else {
                mostrarAlerta("El título no puede estar vacío.");
            }
            break;
        case "2":
            verTareas();
            break;
        case "3":
            verTareas();
            const indiceCompletar = parseInt(prompt("Introduce el número de la tarea a completar:"));
            manejarTarea(indiceCompletar, "completar");
            break;
        case "4":
            verTareas();
            const indiceEliminar = parseInt(prompt("Introduce el número de la tarea a eliminar:"));
            manejarTarea(indiceEliminar, "eliminar");
            break;
        case "5":
            borrarTodasLasTareas();
            break;
        case "6":
            mostrarAlerta("Saliendo...");
            break;
        default:
            mostrarAlerta("Opción no válida, inténtalo de nuevo.");
    }
} while (opcion !== "6");