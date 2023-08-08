const url = "https://geek-jokes.sameerkumar.website/api?format=json";
const botonBuscar = document.getElementById("buscar");

function mostrarFrase() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const frase = data.joke;
      alert(frase);
    })
    .catch((error) => {
      console.error("Hubo un problema al solicitar la frase", error);
      alert("No se pudo obtener la frase en este momento.");
    });
}

botonBuscar.addEventListener("click", mostrarFrase);
