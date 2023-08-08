const container = document.getElementById("container");

$(document).ready(function () {
  // Mostrar ventana modal cuando se hace clic en el botón "Contacto"
  $("#contactModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Botón que abrió la ventana modal
    var recipient = button.data("whatever"); // Extraer información de atributos de datos

    var modal = $(this);
    modal.find(".modal-title").text("Contacto"); // Título dinámico para la ventana modal
    modal.find(".modal-body input").val(recipient); // Colocar información en el formulario
  });

  // Ocultar ventana modal cuando se envía el formulario
  $("#contactForm").submit(function (event) {
    event.preventDefault(); // Evitar que se envíe el formulario
    $("#contactModal").modal("hide"); // Ocultar la ventana modal
  });
});

function fetchDigimons() {
  fetch("https://digimon-api.vercel.app/api/digimon")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((digimon) => {
        const digimonCard = document.createElement("div");
        digimonCard.classList.add("card");

        const digimonImage = document.createElement("img");
        digimonImage.src = digimon.img;
        digimonImage.classList.add("card-img-top");
        digimonImage.classList.add("img-fluid");
        digimonImage.setAttribute("alt", `${digimon.name} image`);

        const digimonCardBody = document.createElement("div");
        digimonCardBody.classList.add("card-body");

        const digimonName = document.createElement("h5");
        digimonName.classList.add("card-title");
        digimonName.textContent = digimon.name;

        const digimonLevel = document.createElement("p");
        digimonLevel.classList.add("card-text");
        digimonLevel.textContent = `Level: ${digimon.level}`;

        digimonCard.addEventListener("mouseover", () => {
          digimonImage.classList.remove("img-fluid");
        });

        digimonCard.addEventListener("mouseout", () => {
          digimonImage.classList.add("img-fluid");
        });

        digimonCard.addEventListener("click", () => {
          alert(`${digimon.name} - Level: ${digimon.level}`);
        });

        digimonCardBody.appendChild(digimonName);
        digimonCardBody.appendChild(digimonLevel);

        digimonCard.appendChild(digimonImage);
        digimonCard.appendChild(digimonCardBody);

        container.appendChild(digimonCard);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchDigimons();

const cardsContainer = document.querySelector(".cards-container");

async function fetchDigimons() {
  const response = await fetch("https://digimon-api.vercel.app/api/digimon");
  const digimons = await response.json();
  return digimons;
}

function createCard(digimon) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card-image");
  cardImage.setAttribute("src", digimon.img);
  card.appendChild(cardImage);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = digimon.name;
  cardContent.appendChild(cardTitle);

  const cardSubtitle = document.createElement("h3");
  cardSubtitle.classList.add("card-subtitle");
  cardSubtitle.textContent = `Level: ${digimon.level}`;
  cardContent.appendChild(cardSubtitle);

  card.appendChild(cardContent);

  card.addEventListener("click", () => {
    card.classList.toggle("maximized");
  });

  return card;
}

async function renderDigimons() {
  const digimons = await fetchDigimons();

  digimons.forEach((digimon) => {
    const card = createCard(digimon);
    cardsContainer.appendChild(card);
  });
}

renderDigimons();
