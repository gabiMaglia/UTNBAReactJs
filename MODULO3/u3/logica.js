document.addEventListener("DOMContentLoaded", () => {
  const inputEj1 = document.getElementById("inputEj1");
  const inputEj2 = document.getElementById("inputEj2");
  const outputEj1 = document.getElementById("outputEj1");
  const outputEj2 = document.getElementById("outputEj2");
  const submitEj1 = document.getElementById("submitEj1");
  const submitEj2 = document.getElementById("submitEj2");

  submitEj1.addEventListener("click", () => {
    outputEj1.innerHTML = evaluarDistancia(inputEj1.value);
  });

  submitEj2.addEventListener("click", () => {
    outputEj2.innerHTML = analizaElMayor(inputEj2.value);
  });

  limpiarEj1.addEventListener("click", () => {
    outputEj1.innerHTML = "";
  });

  limpiarEj2.addEventListener("click", () => {
    outputEj2.innerHTML = "";
  });

  function evaluarDistancia(metros) {
    switch (true) {
      case metros <= 0 || metros === "":
        return "Ingresa una distancia valida";
        break;

      case metros > 0 && metros < 1000:
        return "Debes viajar a pie";
        break;

      case metros > 1000 && metros < 10000:
        return "Debes viajar en Bicicleta";
        break;

      case metros > 10000 && metros < 30000:
        return "Debes viajar en Colectivo";
        break;

      case metros > 30000 && metros < 100000:
        return "Debes viajar en Auto";
        break;

      case metros > 100000:
        return "Debes viajar en Avion";
        break;

      default:
        break;
    }
  }

  function analizaElMayor(str) {
    const splittedString = str.split(",");

    const mayor = splittedString.reduce((acc, num) => {
      return Math.max(acc, num);
    }, 0);

    const respuesta =
      isNaN(mayor) || mayor === 0
        ? "Debes escribir correctamente el patron de numeros"
        : "El numero mayor de esta coleccion es : " + mayor;

    return respuesta;
  }
});
