import { renderCard } from "./CardComponent.js";

// Función que crea el select y lo filtra según la categoría seleccionada
const filterSelect = (data) => {
  // Crear un elemento div para el select y el título
  const row = document.createElement("div");
  row.className = "row my-3";
  const titleCol = document.createElement("div");
  titleCol.className = "col-md-4";
  const selectCol = document.createElement("div");
  selectCol.className = "col-md-8";
  row.appendChild(titleCol);
  row.appendChild(selectCol);

  // Crear un elemento título para el select
  const title = document.createElement("h5");
  title.innerHTML = "Filtrar por categorías";
  titleCol.appendChild(title);

  // Crear un elemento select
  const selectEl = document.createElement("select");
  selectEl.className = "form-select";
  selectCol.appendChild(selectEl);

  // Agregar opciones al select
  const options = ["Todas", "TV", "Radio", "Internacional", "Regional", "Nacional"];
  options.forEach((option) => {
    const optionEl = document.createElement("option");
    optionEl.value = option.toLowerCase();
    optionEl.textContent = option;
    selectEl.appendChild(optionEl);
  });

  // Agregar evento de cambio al select
  selectEl.addEventListener("change", async (event) => {
    const category = event.target.value;
    let filteredData = data;

    // Filtrar los datos según la categoría seleccionada
    if (category !== "todas") {
      filteredData = data.filter((channel) => channel.Category.toLowerCase() === category);
    }

    // Obtener el contenedor y vaciarlo
    const containerEl = document.getElementById("card-container");
    containerEl.innerHTML = "";

    // Renderizar las tarjetas filtradas en el contenedor
    renderCard(filteredData, containerEl);
  });

  // Obtener el contenedor para el select y el título
  const containerEl = document.getElementById("filters");

  // Agregar la fila al contenedor
  containerEl.appendChild(row);
};

export { filterSelect };
