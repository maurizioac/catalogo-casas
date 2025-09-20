const properties = [
  {
    id: 1,
    image: "./imagenes/imagen_barranquila.jpg",
    type: "Apartamento",
    location: "Barranquilla",
    price: "321.100.000",
    originalPrice: "435.141.509",
    area: "80m²",
    rooms: "3",
    bathrooms: "2",
    parking: "1",
    badgeText: "26% EXTERNO",
  },
  {
    id: 2,
    image: "./imagenes/imagen_bogotá.jpg",
    type: "Casa",
    location: "Bogotá",
    price: "255.000.000",
    originalPrice: "315.000.000",
    area: "56m²",
    rooms: "4",
    bathrooms: "2",
    parking: "0",
    badgeText: "19%",
  },
  {
    id: 3,
    image: "./imagenes/imagen_jumandi.jpg",
    type: "Apartamento",
    location: "Jamundí",
    price: "350.000.000",
    originalPrice: "400.000.000",
    area: "100m²",
    rooms: "2",
    bathrooms: "1",
    parking: "0",
    badgeText: "12% EXTERNO",
  },
  {
    id: 4,
    image: "./imagenes/imagen_rionegro.jpg",
    type: "Apartamento",
    location: "Rionegro",
    price: "190.000.000",
    originalPrice: "240.000.000",
    area: "54m²",
    rooms: "3",
    bathrooms: "2",
    parking: "1",
    badgeText: "21%",
  },
];

const catalogContainer = document.getElementById("property-catalog");

const modal = document.getElementById("property-modal");
const closeBtn = document.querySelector(".close-btn");

function createPropertyCard(property) {
  const card = document.createElement("div");
  card.classList.add("property-card");
  const isExternal = property.badgeText.includes("EXTERNO");
  const badgeClass = `badge ${isExternal ? "external" : ""}`;

  card.innerHTML = `
        <img src="${property.image}" alt="Imagen de ${property.type} en ${
    property.location
  }">
        <span class="${badgeClass}">${property.badgeText.replace(
    " EXTERNO",
    ""
  )}</span>
        <div class="card-content">
            <h3>${property.location}</h3>
            <p class="location">${property.location} - ${property.type}</p>
            <p class="price">$${property.price}</p>
            <div class="card-details">
                <span class="detail-item">${property.area}</span>
                <span class="detail-item">${property.rooms} Hab</span>
                <span class="detail-item">${property.bathrooms} Baños</span>
                <span class="detail-item">${property.parking} Parq</span>
            </div>
        </div>
        <button class="info-card-btn">Ver información</button>
    `;

  const infoBtn = card.querySelector(".info-card-btn");

  infoBtn.addEventListener("click", () => {
    document.getElementById("modal-image").src = property.image;
    document.getElementById("modal-location").textContent = property.location;
    document.getElementById(
      "modal-type"
    ).textContent = `Tipo: ${property.type}`;
    document.getElementById(
      "modal-price"
    ).textContent = `Precio: $${property.price}`;
    document.getElementById(
      "modal-area"
    ).textContent = `Área: ${property.area}`;
    document.getElementById(
      "modal-rooms"
    ).textContent = `Habitaciones: ${property.rooms}`;
    document.getElementById(
      "modal-bathrooms"
    ).textContent = `Baños: ${property.bathrooms}`;
    document.getElementById(
      "modal-parking"
    ).textContent = `Parqueos: ${property.parking}`;

    modal.style.display = "flex";
  });

  return card;
}

function renderCatalog() {
  properties.forEach((property) => {
    const card = createPropertyCard(property);
    catalogContainer.appendChild(card);
  });
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", renderCatalog);

// Obtener el menú desplegable y el contenedor del catálogo
const sortDropdown = document.querySelector(".sort-dropdown");
const propertyCatalog = document.getElementById("property-catalog");

// Función para ordenar las propiedades
function sortProperties() {
  const sortBy = sortDropdown.value;
  let sortedProperties = [...properties]; // Crea una copia para no modificar el array original

  if (sortBy === "precio-asc") {
    // Ordenar de menor a mayor
    sortedProperties.sort((a, b) => {
      // Limpia y convierte los precios a números
      const priceA = parseInt(a.price.replace(/\./g, ""));
      const priceB = parseInt(b.price.replace(/\./g, ""));
      return priceA - priceB;
    });
  } else if (sortBy === "precio-desc") {
    // Ordenar de mayor a menor
    sortedProperties.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/\./g, ""));
      const priceB = parseInt(b.price.replace(/\./g, ""));
      return priceB - priceA;
    });
  } else {
    // Si es "relevancia", no se hace nada o se vuelve al orden original
    // Por ahora lo dejaremos como estaba
  }

  // Limpiar el catálogo actual
  propertyCatalog.innerHTML = "";

  // Renderizar las propiedades ordenadas
  sortedProperties.forEach((property) => {
    const card = createPropertyCard(property);
    propertyCatalog.appendChild(card);
  });
}

// Escuchar el evento de cambio en el menú desplegable
sortDropdown.addEventListener("change", sortProperties);

// Llama a la función una vez al inicio para renderizar el catálogo por defecto
renderCatalog();
