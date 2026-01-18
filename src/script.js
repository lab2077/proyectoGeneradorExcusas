window.onload = function () {
  let who = [
    "El gato",
    "Mi abuela",
    "El cartero",
    "Mi pajaro"
  ];

  let action = [
    "se comió",
    "orinó",
    "falló",
    "rompió"
  ];

  let what = [
    "mi tarea",
    "el proyecto",
    "el código",
    "el archivo"
  ];

  let when = [
    "justo antes de enviarlo",
    "anoche",
    "esta mañana",
    "cinco minutos antes"
  ];

  document.getElementById("generate").addEventListener("click", function () {
    let excuse =
      who[Math.floor(Math.random() * who.length)] + " " +
      action[Math.floor(Math.random() * action.length)] + " " +
      what[Math.floor(Math.random() * what.length)] + " " +
      when[Math.floor(Math.random() * when.length)];

    document.getElementById("excuse").innerHTML = excuse;
  });
};