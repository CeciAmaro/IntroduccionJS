//Dado un arreglo de números enteros, Imprimir solamente aquellos que
//son denominados números primos, (usar arreglo denominado como
//   "ejercicio1")

const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ];

  function esPrimo(ejercicio1){
    console.log("------------------------------EJERCICIO 1----------------------------");
  
      for (let i = 0; i < ejercicio1.length; i++) {
        let num = ejercicio1[i];
        if (num % 2  === 1 ) {
          console.log(`${num} es un numero primo`);
        }
      }
  };
  
  esPrimo(ejercicio1);
  console.log("------------------------------EJERCICIO 2----------------------------");
  //Ramón quiere hacer una fiesta privada en donde solo entre un número
  //exclusivo de personas, ayudale al portero a solo dejar pasar a
  //aquellas personas mayores de edad que sean familiares de Ramón. (con
  //imprimir los usuarios que se admitirán basta, usar el arreglo
  //denominado como "ejercicio2").
  
  const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];
  
  function accesoFiesta(invitado){
  
    if (invitado.edad >= 18 && invitado.esFamiliar=== true) {
        console.log(`Sean bienvenidos a la fiesta de Ramon`);
      console.log(`Hola ${invitado.nombre}, Puedes pasar.`);
    }
  }
  
  ejercicio2.forEach(element => {
    console.log(accesoFiesta(element));
  });
  
  console.log("  ");
  
  //Con ayuda de ciclos imprime los primeros 50 números de la suceción de fibonacci, (1,1,2,3,5,8,13,21).
  console.log("------------------------------EJERCICIO 3----------------------------");
  
  let  numero1 = 0;
  let numero2 = 1;
  let suma = 1;
  console.log(suma);
  for (let i = 1; i < 50; i++) {
      
    suma = numero1 + numero2;
    numero1 = numero2;
    numero2= suma;
  
    console.log(suma);
  
  } 
