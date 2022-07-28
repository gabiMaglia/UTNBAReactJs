document.addEventListener("DOMContentLoaded", () => {
  
    //cambia fondo//
  const box1 = document.getElementById("bg1");
  const box2 = document.getElementById("bg2");
  const box3 = document.getElementById("bg3");
  const body = document.getElementById("body");

  box1.addEventListener("click", () => {
    body.style.backgroundImage = "url(/img/flats.jpg)";
  });

  box2.addEventListener("click", () => {
    body.style.backgroundImage = "url(/img/mountains.jpg)";
  });

  box3.addEventListener("click", () => {
    body.style.backgroundImage = "url(/img/moon.jpg)";
  });

    //cuenta caracteres
  const textArea = document.getElementById("txt1");
  const result1 = document.getElementById("result1");

  textArea.addEventListener("input", () => {
    cantCaracteres = textArea.value.length;
    result1.innerHTML = cantCaracteres;
  });

    //muestra aprobados
  const alumnos = [
    {
      nombre: "Juan Gomez",

      nota: 7,
    },
    {
      nombre: "Pedro Rodriguez",

      nota: 4,
    },
    {
      nombre: "Roxana García",

      nota: 8,
    },
    {
      nombre: "Luciano Lopez",

      nota: 5,
    },
    {
      nombre: "Fernanda Gimenez",

      nota: 6,
    },
    {
      nombre: "Florencia Martinez",

      nota: 10,
    },
    {
      nombre: "Raul Sanchez",

      nota: 7,
    },
    {
      nombre: "Sandra Figueroa",

      nota: 8,
    },
  ];

  const btnAlumnos = document.getElementById("alumnosAprobadosBTN");
  const tablaAlumnos = document.getElementById("tablaAlumnos")
  
  function iteraArrayDeObjetos(arr) {
    arr.forEach((alumno) => {
      for (const dato in alumno) {
        tablaAlumnos.value += `${dato.charAt(0).toUpperCase() + dato.slice(1)}: ${alumno[dato]}\n `;
      }
    });
  }
  
  btnAlumnos.addEventListener("click", () => {
    const alumnosAprobados = alumnos.filter((alumno) => alumno.nota >= 7);
      iteraArrayDeObjetos(alumnosAprobados);
  });
});
