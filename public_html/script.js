// Lista de barberos
const barberos = [
  {
    nombre: "Juan Pérez",
    especialidad: "fades",
    imagen: "imagenes/barbero1.png",
    descripcion: "Especialista en fades y barbas"
  },
  {
    nombre: "Carlos Soto",
    especialidad: "clásico",
    imagen: "imagenes/barbero2.png",
    descripcion: "Estilo clásico y afeitados premium"
  },
  {
    nombre: "Luis Ramírez",
    especialidad: "diseños",
    imagen: "imagenes/barbero3.png",
    descripcion: "Diseños personalizados y urbanos"
  },
  {
    nombre: "Andrés López",
    especialidad: "fades",
    imagen: "imagenes/barbero4.png",
    descripcion: "Fade limpio y barba perfilada"
  },
  {
    nombre: "Miguel Torres",
    especialidad: "clásico",
    imagen: "imagenes/barbero5.png",
    descripcion: "Cortes clásicos con navaja"
  },
  {
    nombre: "Kevin Silva",
    especialidad: "diseños",
    imagen: "imagenes/barbero6.png",
    descripcion: "Tatuajes capilares y líneas únicas"
  },
  {
    nombre: "Sergio Delgado",
    especialidad: "fades",
    imagen: "imagenes/barbero7.png",
    descripcion: "Fade skin con estilo callejero"
  },
  {
    nombre: "Diego Rojas",
    especialidad: "clásico",
    imagen: "imagenes/barbero8.png",
    descripcion: "Old school y estilo europeo"
  }
];

// Accede al contenedor correcto (con ID distinto al anterior)
const contenedor = document.getElementById("contenedor-barberos-filtrados");

// Función para mostrar una lista de barberos en pantalla
function mostrarBarberos(lista) {
  contenedor.innerHTML = ""; // Limpia el contenedor antes de insertar

  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron barberos con esa especialidad.</p>";
    return;
  }

  lista.forEach(barbero => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-barbero");

    tarjeta.innerHTML = `
      <img src="${barbero.imagen}" alt="${barbero.nombre}">
      <h3>${barbero.nombre}</h3>
      <p>${barbero.descripcion}</p>
    `;

    contenedor.appendChild(tarjeta);
  });
}

// Función para filtrar por categoría
function filtrarBarberos(categoria) {
  if (categoria === "todos") {
    mostrarBarberos(barberos);
  } else {
    const barberosFiltrados = barberos.filter(b => b.especialidad === categoria);
    mostrarBarberos(barberosFiltrados);
  }
}

// Mostrar todos los barberos al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  mostrarBarberos(barberos);
});
