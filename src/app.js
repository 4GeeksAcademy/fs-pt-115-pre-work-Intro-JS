


  //write your code here
  //console.log("Hello Rigo from the console!");

  // TIPOS de VARIABLE
  //var nombre = "Mario"
  let edad = 25
  const pais = "Mushroom Kingdom"


  //POR QUE NO USAR VAR

  //No respeta el “bloque”
  // Con let y const, una variable sólo vive dentro de las llaves {} donde fue creada.
  // Con var, no. Vive en toda la función (o incluso en todo el archivo si está fuera de una función).

  //ejemplo 
  if (true) {
    //var nombre = "Ana";
  }
  //console.log(nombre);  // 👉 Imprime "Ana" (aunque estaba dentro del if)

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

  //console.log(frutaTwo); // 👉 Imprime "banana"

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
    //console.log("¡Mario saltó!");
  }
  saltar();  // 👉 ¡Mario saltó!

  //funsion flecha (mas moderna)
  const correr = () => {
    //console.log("¡Mario está corriendo!");
  };
  correr();


  //funsion anonima
  setTimeout(function () {
    //console.log("Toad dice: '¡Espera 3 segundos!'");
  }, 3000);


  //CONDICIONALES
  let tieneEstrella = false;

  if (tieneEstrella) {
    //console.log("¡Invencible! Corre sin miedo.");
  } else {
    //console.log("Cuidado con los Goombas.");
  }


  //varias condiciones IF ELSE

  let puntos = 100;

  if (puntos >= 100) {
    //console.log("¡Ganaste una vida extra!");
  } else if (puntos >= 50) {
    //console.log("¡Buen trabajo!");
  } else {
    //console.log("¡Sigue intentándolo!");
  }

  let objetos = ["hongo", "flor", "estrella"];

  for (let i = 0; i < objetos.length; i++) {
    //console.log("Mario encontró un " + objetos[i]);

  }

  for (let item of objetos) {
    //console.log("Mario encontró un " + item);
  }



// --------------------------- SEGUNDO DIA --------------------------------------//



// METODOS


// .map
//crea un nuevo arreglo transformando cada elemento segun la funcion que se pase


//Toad necesita aumentar los salarios de todos los en Recursos Humanos

const empleados = [
  { nombre: "Mario", salario: 1000 },
  { nombre: "Peach", salario: 2000 },
  { nombre: "Toad", salario: 1500 }
];

const empleadosConAumento = empleados.map(empleado => {
  return {
    ...empleado,
    salario: empleado.salario + 500
  };
});

console.log(empleadosConAumento);



// . filter
//crea un nuevo arreglo con los elementos que cumplen la condicion que le pases

// Peach quiere saber quien gana mas de 1800 monedas

const empleadosQueGananMucho = empleados.filter(empleado => empleado.salario > 1800);

console.log(empleadosQueGananMucho);

// .push 

// MODIFICA el arreglo original agreando uno o mas elementos al final y devuelve la nueva longitud del arreglo

// Toad necesita agregar una tarea nueva al sistema.

let tareas = ["Preparar informe", "Actualizar base de datos"];
const nuevaCantidad = tareas.push("Mandar meme a Mario");

console.log(tareas);
console.log(nuevaCantidad); // 3


// .reduce
// Reduce todos los elementos de un arreglo a un solo valor usando una funcion que acumula el resultado

// Mario quiere saber cuánto ha gastado Bowser en snacks.

const gastos = [
  { item: "hongos", costo: 10 },
  { item: "flores de fuego", costo: 20 },
  { item: "estrellas", costo: 30 }
];
// array1.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue,);

const totalGastado = gastos.reduce((acumulador, gasto) => acumulador + gasto.costo, 0);

console.log(totalGastado); 


// .includes

// Verifica si un arreglo contiene un valor especifico y devuelve true o false 
// Peach verifica si hay reunión hoy.


const eventos = ["almuerzo", "code review", "reunión secreta"];
console.log(eventos.includes("reunión secreta")); // true


// DESESTRUCTURACION 

// EN OBJETOS

const empleado = {
  nombre: "Luigi",
  cargo: "QA Tester",
  salario: 1800
};

const { nombre, cargo } = empleado;
console.log(nombre); // Luigi
console.log(cargo);  // QA Tester


// EN ARREGLOS

const colores = ["rojo", "verde", "azul"];
const [primero, , tercero] = colores;
console.log(primero); // rojo
console.log(tercero); // azul



// Spread Operator (...) Copiar y combinar

// Permite copiar los elementos de un arreglo u objeto y combinarlos fácilmente.

const equipoA = ["Mario", "Toad"];
const equipoB = ["Peach", "Luigi"];
const superEquipo = [...equipoA, ...equipoB];
console.log(superEquipo);


const empleadoBase = {
  nombre: "Goomba",
  puesto: "Asistente",
  salario: 500
};

const empleadoPromocionado = {
  ...empleadoBase,
  salario: 800,
  beneficios: ["Seguro dental", "Casco nuevo"]
};

console.log(empleadoPromocionado);