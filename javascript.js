const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1560518883-ff5129648c66?q=80&w=2070&auto=format&fit=crop",
    type: "Apartamento",
    location: "Barranquilla",
    price: "321.100.000",
    area: "80m²",
    rooms: "3",
    bathrooms: "2",
    parking: "1",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    type: "Casa",
    location: "Bogotá",
    price: "255.000.000",
    area: "56m²",
    rooms: "4",
    bathrooms: "2",
    parking: "0",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b252?q=80&w=1954&auto=format&fit=crop",
    type: "Apartamento",
    location: "Jamundí",
    price: "350.000.000",
    area: "100m²",
    rooms: "2",
    bathrooms: "1",
    parking: "0",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1583608242145-fd61073b6480?q=80&w=2070&auto=format&fit=crop",
    type: "Apartamento",
    location: "Rionegro",
    price: "190.000.000",
    area: "54m²",
    rooms: "3",
    bathrooms: "2",
    parking: "1",
  },
];

const catalogContainer = document.getElementById("property-catalog");

function createPropertyCard(property) {
  const card = document.createElement("div");
  card.classList.add("property-card");
  card.innerHTML = `
        <img src="${property.image}" alt="Imagen de ${property.type} en ${property.location}">
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
    `;
  return card;
}
function renderCatalog() {
  properties.forEach((property) => {
    const card = createPropertyCard(property);
    catalogContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderCatalog);
