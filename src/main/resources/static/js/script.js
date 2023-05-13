function ingresoDashboard(){
  // Evita que se envíe el formulario al hacer clic en el botón
  event.preventDefault();
  // Redirige al usuario a la página del panel de control
  window.location.href = "http://localhost:8080/dashboard";
}