


  //write your code here
  console.log("Hello Rigo from the console!");

  // TIPOS de VARIABLE
  var nombre = "Mario"
  let edad = 25
  const pais = "Mushroom Kingdom"


  //POR QUE NO USAR VAR

  //No respeta el “bloque”
  // Con let y const, una variable sólo vive dentro de las llaves {} donde fue creada.
  // Con var, no. Vive en toda la función (o incluso en todo el archivo si está fuera de una función).

  //ejemplo 
  if (true) {
    var nombre = "Ana";
  }
  console.log(nombre);  // 👉 Imprime "Ana" (aunque estaba dentro del if)

  //con let
  if (true) {
    let nombreTwo = "Ana";
  }
  //console.log(nombreTwo);  // ❌ Error: nombre no está definido

  // Se puede declarar dos veces sin error
  // Con var puedes declarar la misma variable dos veces sin que el programa diga nada. Eso puede causar errores difíciles de detectar.

  var fruta = "manzana";
  var fruta = "banana"; // 😱 No hay error, pero ¡perdiste la manzana!

  //CON let
  let frutaTwo = "manzana";
  //let frutaTwo = "banana"; // ❌ Error: ya existe una variable llamada fruta

  console.log(frutaTwo); // 👉 Imprime "banana"

  // TIPOS DE DATOS

  let texto = "¡Mamma Mia!"
  let numero = 42
  let tieneBigote = true
  let powerUps = ["flor de fuego", "estrella", "super hongo"];
  let princesa = {
    name: "Peach",
    edad: 25,
    cabello: "amarillo",
    cualidades: ["valiente", "amable", "líder", "dejarse atrapar por bowser"]
  }


  // OPERADORES 

  //MATEMATICOS
  let total = 5 + 10; // 15 monedas
  let daño = 10 - 3;  // Bowser le quitó 3
  let duplicar = 4 * 2;
  let dividir = 20 / 4;


  //COMPARACION 
  let vidas = 3;
  vidas > 1    // true
  vidas == 3   // true
  vidas != 0   // true


  //LOGICOS
  let tieneLlave = true;
  let puertaAbierta = false;

  tieneLlave && puertaAbierta   // false
  tieneLlave || puertaAbierta   // true
  !tieneLlave                   // false



  // FUNCIONES
  //funcion clasica
  function saltar() {
    console.log("¡Mario saltó!");
  }
  saltar();  // 👉 ¡Mario saltó!

  //funsion flecha (mas moderna)
  const correr = () => {
    console.log("¡Mario está corriendo!");
  };
  correr();


  //funsion anonima
  setTimeout(function () {
    console.log("Toad dice: '¡Espera 3 segundos!'");
  }, 3000);


  //CONDICIONALES
  let tieneEstrella = false;

  if (tieneEstrella) {
    console.log("¡Invencible! Corre sin miedo.");
  } else {
    console.log("Cuidado con los Goombas.");
  }


  //varias condiciones IF ELSE

  let puntos = 100;

  if (puntos >= 100) {
    console.log("¡Ganaste una vida extra!");
  } else if (puntos >= 50) {
    console.log("¡Buen trabajo!");
  } else {
    console.log("¡Sigue intentándolo!");
  }

  let objetos = ["hongo", "flor", "estrella"];

  for (let i = 0; i < objetos.length; i++) {
    console.log("Mario encontró un " + objetos[i]);

  }

  for (let item of objetos) {
    console.log("Mario encontró un " + item);
  }







