document.addEventListener("DOMContentLoaded", function () {
  // Obtener elementos del DOM
  var currentTimeElement = document.getElementById("current-time");
  var currentDateElement = document.getElementById("current-date");
  var flightNumberElement = document.getElementById("flight-number");
  var terminalElement = document.getElementById("terminal");
  var notificationElement = document.querySelector(".notification");
  var notificationMessageElement = document.getElementById(
    "notification-message"
  );
  var closeButton = document.getElementById("close-button");

  // Obtener la hora y la fecha actual
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var day = currentTime.getDate();
  var month = currentTime.getMonth() + 1; // Los meses en JavaScript empiezan desde 0

  // Agregar cero delante si los minutos son menores a 10
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Actualizar los elementos del DOM con la hora y la fecha actual
  currentTimeElement.textContent = hours + ":" + minutes + " hrs";
  currentDateElement.textContent = day + "-" + month + "-2023";

  // Obtener el número de vuelo más próximo y el terminal
  var flightNumber = 1625;
  var terminal = 4;

  // Actualizar los elementos del DOM con el número de vuelo y el terminal
  flightNumberElement.textContent = flightNumber;
  terminalElement.textContent = terminal;

  // Mostrar la notificación al pasajero
  var notificationMessage =
    "Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma.";
  notificationMessageElement.textContent = notificationMessage;
  notificationElement.style.display = "block";
});
