// ===== 1. MENÚ MÓVIL =====
// Busca el botón de la hamburguesa y el menú por su id
const botonMenu = document.getElementById("botonMenu");
const menu = document.getElementById("menu");

// Al pulsar la hamburguesa, añade o quita la clase "abierto" del menú
botonMenu.addEventListener("click", () => {
    menu.classList.toggle("abierto");
});

// Al pulsar un enlace del menú, el menú se cierra
menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("abierto");
    });
});


// ===== 2. FILTRO DE SERVICIOS =====
const botonesFiltro = document.querySelectorAll(".filtro");
const servicios = document.querySelectorAll(".servicio");

botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        // data-filtro del botón pulsado, por ejemplo "corte" o "todos"
        const filtro = boton.dataset.filtro;

        // Solo el botón pulsado queda activo
        botonesFiltro.forEach((b) => b.classList.remove("activo"));
        boton.classList.add("activo");

        // Cada servicio se muestra si es "todos" o si su categoría coincide
        servicios.forEach((servicio) => {
            const mostrar = filtro === "todos" || servicio.dataset.categoria === filtro;
            // El segundo parámetro true añade la clase "oculto"; false la quita
            servicio.classList.toggle("oculto", !mostrar);
        });
    });
});


// ===== 3. AÑO AUTOMÁTICO EN EL PIE =====
document.getElementById("año").textContent = new Date().getFullYear();


// ===== 4. CARRUSEL DE FONDO DE LA PORTADA =====
const diapositivas = document.querySelectorAll(".diapositiva");
const puntos = document.querySelectorAll(".punto");
let indiceActual = 0;

// Muestra la imagen con ese número (empieza en 0) y marca su punto
function mostrarDiapositiva(indice) {
    diapositivas.forEach((d, i) => d.classList.toggle("activa", i === indice));
    puntos.forEach((p, i) => p.classList.toggle("activo", i === indice));
    indiceActual = indice;
}

// Al pulsar un punto, se muestra esa imagen
puntos.forEach((punto, i) => {
    punto.addEventListener("click", () => mostrarDiapositiva(i));
});

// Cada 5 segundos pasa a la siguiente; al llegar a la última vuelve a la primera
setInterval(() => {
    mostrarDiapositiva((indiceActual + 1) % diapositivas.length);
}, 5000);