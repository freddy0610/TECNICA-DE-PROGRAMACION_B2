//1. Crea una función nombrada que sume dos números.
function sumar(num1, num2) {
    return num1 + num2;
}
let resultado = sumar(5, 3); // Esto devolverá 8
console.log(resultado);


//2. Escribe una función nombrada que reste dos números.
function restar(num1,num2){
    return num1 - num2;
}
let result = restar(6,4);
console.log(result);


//3. Desarrolla una función nombrada que multiplique dos números.
function mult(num1,num2){
    return num1 * num2;
}
let resp = mult(7,6);
console.log(resp);


//4. Implementa una función nombrada que divida dos números.
function dividir(num1,num2){
    if (num2 === 0){
        return 'No se puede dividir para 0'
    }else{
        return num1 / num2;

    }
}
let resultdiv = dividir(40,8);
console.log(resultdiv);


//5. Diseña una función nombrada que calcule el módulo de dos números.
function calcularmod(num1,num2){
    let modulo = num1 % num2;
    return modulo;
}
let resultmod = calcularmod(26,9)
console.log(resultmod);


//6. Asigna una función anónima a una variable que eleve un número al cuadrado.
let = elevarcuadrado = function(numero){
    return numero **2;
}
let resultelevado = elevarcuadrado(5);
console.log(resultelevado);


//7. Usa una función anónima para convertir grados Celsius a Fahrenheit.
let convertCelsiusAFahrenheit = function(celsius) {
    return celsius * 9/5 + 32;
};
let tempCelsius = 20;
let tempFahrenheit = convertCelsiusAFahrenheit(tempCelsius);
console.log(tempFahrenheit); 


//8. Crea una función anónima que calcule el perímetro de un rectángulo.
let perimetrorectangulo = function(base,altura){
    return 2 * (base + altura)
}
let perimetro = perimetrorectangulo(4,3)
console.log(perimetro)


//9. Implementa una función anónima que determine si un número es par o impar.

let paroimpar = function(num){
    if (num %2 === 0){
        return 'Este numero es par'
    }else{
        return 'Este numero es impar'
    }
}    
let resultparoimpar = paroimpar(10)
console.log(resultparoimpar)


//10. Escribe una función anónima que devuelva el número mayor entre dos números.
let encontrarNumMayor = function(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};
let numeroMayor = encontrarNumMayor(10, 5);
console.log("El número mayor es: " + numeroMayor);


//11. Desarrolla una función flecha que calcule el área de un círculo.
let calcularAreaCirculo = (radio) => Math.PI * radio ** 2;
let radio = 5;
let area = calcularAreaCirculo(radio);
console.log("El área del círculo es: " + area);


//12. Crea una función flecha que convierta kilómetros a millas.
let convertirKmaMillas = (kilometros) => kilometros * 0.621371;
let kilometros = 10;
let millas = convertirKmaMillas(kilometros);
console.log(kilometros + " kilómetros son aproximadamente " + millas + " millas");


//13. Escribe una función flecha que retorne el nombre completo dado un nombre y apellido.
let obtenernombrecompleto = (nombre,apelido) => `${nombre} ${apellido}`
let nombre = "Freddy"
let apellido = "Calle"
let nombrecompleto = obtenernombrecompleto(nombre,apellido);
console.log("El nombre completo es: " + nombrecompleto)


//14. Implementa una función flecha que verifique si un texto contiene la letra 'a'.
let contieneLetraA = texto => {
    return texto.includes('a');
};

// Ejemplo de uso:
let texto1 = "Hola mundo";
let texto2 = "Pedro tiene moto";

console.log("El texto1 " + (contieneLetraA(texto1) ? "sí" : "no") + " contiene la letra 'a'");
console.log("El texto2 " + (contieneLetraA(texto2) ? "sí" : "no") + " contiene la letra 'a'");

//15. Diseña una función flecha que cuente cuántos elementos en un array son números.
let contarNumeros = array => {
    let contador = 0;
    for (let elemento of array) {
        if (typeof elemento === 'number') {
            contador++;
        }
    }
    return contador;
};
let array1 = [1, 'a', 3, 'b', 5];
console.log("En el array1 hay " + contarNumeros(array1) + " números");


//16. Escribe una función de orden superior que tome una función y la aplique a todos los 
//elementos de un array.
let aplicarFuncion = (array, funcion) => {
    let res = [];
    for (let elemento of array) {
        res.push(funcion(elemento));
    }
    return res;
};
let array = [1, 2, 3, 4, 5];
let duplicar = numero => numero * 2;
let res= aplicarFuncion(array, duplicar);

console.log("Array original: " + array);
console.log("Después de aplicar la función 'duplicar': " + res);


//17. Crea una función de orden superior que filtre elementos de un array basándose en una 
//condición dada.
let filtrarCondicion = (array2, condición) =>{
    let respu = [];
    for (let elemento of array2) {
        if (condición(elemento)) {
            respu.push(elemento);
        }
    }
    return respu;
}
let array2 = [2, 5, 7, 8, 11];
let condición = numero => numero % 2 === 0;
let respu = filtrarCondicion(array2, condición);

console.log("El Array es: " + array2); 
console.log("El Array con la Condicion aplicada es: " + respu);


//18. Desarrolla una función de orden superior que retorne una nueva función 
//incrementadora.
let crearIncrementadora = (numero) => {
    return () => {
        return numero++;
    };
};
let incrementar = crearIncrementadora(5);

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());


//19. Implementa una función de orden superior que tome dos funciones como argumentos 
//y elija una para ejecutar basada en una condición.
let operacionSegunSigno = (numero, suma, resta) => {
    if (numero >= 0) {
        return suma(numero);
    } else {
        return resta(numero);
    }
};
let Sumar = (num) => num + 10;
let Restar = (num) => num - 5;
let resultado1 = operacionSegunSigno(5, Sumar, Restar);
console.log("Resultado cuando el número es positivo:", resultado1);
let resultado2 = operacionSegunSigno(-5, Sumar, Restar);
console.log("Resultado cuando el número es negativo:", resultado2); 


//20. Diseña una función de orden superior que modifique un objeto utilizando otra función 
//proporcionada.
let modificarObjeto = (objeto, funcionModificadora) => {
    return funcionModificadora(objeto);
};
let objeto = { x: 10, y: 20 };
let incrementarPropiedad = (objeto) => {
    objeto.x++;
    objeto.y++;
    return objeto;
};
console.log("Objeto original:", objeto);
let objetoModificado = modificarObjeto(objeto, incrementarPropiedad);
console.log("Objeto modificado:", objetoModificado);


//21. Define una función constructora para un objeto "Coche" que tenga propiedades como 
//marca, modelo y año.
function Coche(marca,color,año){
    this.marca = marca;
    this.color = color;
    this.año = año;
}    
let miCoche = new Coche("Toyota" , "rojo", 2015);
console.log(miCoche);


//22. Crea una función constructora para un objeto "Libro" con propiedades de autor, título 
//y año de publicación.
function Libro(autor, titulo, añoPublicacion) {
    this.autor = autor;
    this.titulo = titulo;
    this.añoPublicacion = añoPublicacion;
}
let miLibro = new Libro("J.K. Rowling", "Harry Potter y la Piedra Filosofal", 1997);
console.log(miLibro);


//23. Implementa una función constructora que cree objetos "Usuario" con nombre, correo 
//electrónico y contraseña.
function Usuario(nombre, correoElectronico, contraseña) {
    this.nombre = nombre;
    this.correoElectronico = correoElectronico;
    this.contraseña = contraseña;
}
let nuevoUsuario = new Usuario("Juan", "juan@example.com", "contraseña123");
console.log(nuevoUsuario);



//24. Escribe una función constructora para "Producto" con propiedades de nombre, precio y 
//cantidad.
function Producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}
let nuevoProducto = new Producto("Camisa", 25.99, 10);
console.log(nuevoProducto);


//25. Desarrolla una función constructora que inicialice objetos "Estudiante" con nombre, 
//matrícula y carrera.
function Estudiante(nombre, matricula, carrera) {
    this.nombre = nombre;
    this.matricula = matricula;
    this.carrera = carrera;
}
let nuevoEstudiante = new Estudiante("Juan", "123456", "Ingeniería Informática");
console.log(nuevoEstudiante);


//26. Escribe una función recursiva para calcular el factorial de un número.
function fac(nume) {
    if (nume === 0) {
        return 1;
    } 
    else {
        return nume * fac(nume - 1);
    }
}
let nume = 5;
let resu = fac(nume);
console.log("El factorial de " + nume + " es: " + resu);


//27. Crea una función recursiva que sume todos los números hasta un número dado.
function sumaHasta(numer) {
    if (numer === 1) {
        return 1;
    } 
    else {
        return numer + sumaHasta(numer - 1);
    }
}
let numer = 5;
let resulta = sumaHasta(numer);
console.log("La suma de todos los números hasta " + numer + " es: " + resulta);


//28. Implementa una función recursiva que encuentre el máximo común divisor (MCD) de 
//dos números.
function mcd(a, b) {
    if (b === 0) {
        return a;
    } 
    else {
        return mcd(b, a % b);
    }
}
let numero1 = 48;
let numero2 = 18;
let resultad = mcd(numero1, numero2);
console.log("El MCD de " + numero1 + " y " + numero2 + " es: " + resultad);


//29. Diseña una función recursiva que genere la secuencia de Fibonacci hasta un número 
//específico.
function fibonacciHasta(numero, secuencia = [0, 1]) {
    if (secuencia[secuencia.length - 1] > numero) {
        return secuencia.slice(0, -1); 
    if (numero === 0) {
        return [0];
    }
    if (numero === 1) {
        return secuencia;
    }
    let siguienteNumero = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
    return fibonacciHasta(numero, secuencia.concat(siguienteNumero));
    }
}
let numeroEspecifico = 50;
let secuenciaFibonacci = fibonacciHasta(numeroEspecifico);
console.log("Secuencia de Fibonacci hasta " + numeroEspecifico + ":", secuenciaFibonacci);


//30. Desarrolla una función recursiva que invierta una cadena de texto.
function invertirCadena(cadena) {
    if (cadena.length <= 1) {
        return cadena;
    } 
    else {
        return invertirCadena(cadena.substring(1)) + cadena[0];
    }
}
let texto = "Hola Mundo";
let textoInvertido = invertirCadena(texto);
console.log("Texto invertido:", textoInvertido);


//31. Demuestra el uso de una variable global modificándola dentro de una función.
let conta= 0;
function aumentarContador() {
    conta++;
}
console.log("Valor inicial del contador:", conta); 
aumentarContador(); 
console.log("Valor después de aumentar el contador:", conta); 


//32. Escribe un código donde una variable local oculte una variable global del mismo nombre.
let contad = 0;
function aumentarContador() {
    let contad = 10; 
    console.log("Valor de contador dentro de la función:", contad); 
}
console.log("Valor inicial del contador:", contad); 
aumentarContador(); 
console.log("Valor después de llamar a la función:", contad); 


//33. Explica mediante un ejemplo cómo las variables locales pueden evitar conflictos de 
//nombres.
let Nombre = "Juan"; 
function saludar() {
    let Nombre = "María"; 
    console.log("Hola " + Nombre); 
}
console.log("Nombre global:", Nombre); 
saludar(); 


//34. Implementa un contador utilizando una variable global.
let contadorGlobal = 0; 
function aumentarCont() {
    contadorGlobal++; 
}
function disminuirCont() {
    contadorGlobal--; 
}
function obtenerCont() {
    return contadorGlobal; 
}
console.log("Valor inicial del contador:", obtenerCont()); 
aumentarCont(); 
console.log("Valor después de aumentar el contador:", obtenerCont()); 
disminuirCont(); 
console.log("Valor después de disminuir el contador:", obtenerCont()); 


//35. Crea una función que intente modificar una variable local definida en otra función.
function funcionExterna() {
    let variableLocal = 0; 

    function funcionInterna() {
        variableLocal++; 
    }

    funcionInterna(); 
    console.log("Valor de la variable local después de intentar modificarla:", variableLocal); 
}
funcionExterna(); 


//36. Escribe una función que determine si un año es bisiesto.
function esBisiesto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}
console.log(esBisiesto(2020)); 
console.log(esBisiesto(2021)); 
console.log(esBisiesto(2000)); 
console.log(esBisiesto(1900)); 


//37. Implementa una función que evalúe tres números y retorne el mayor.
function encontrarMayor(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(encontrarMayor(10, 5, 8)); 
console.log(encontrarMayor(-3, -8, -1));
console.log(encontrarMayor(5, 5, 5)); 


//38. Diseña una función que decida si un estudiante aprueba o reprueba basado en su nota.
function decidirAprobacion(nota) {
    if (nota >= 0 && nota <= 10) {
        if (nota >= 6) {
            return "Aprobado";
        } else {
            return "Reprobado"; 
        }
    } else {
        return "Nota inválida"; 
    }
}
console.log(decidirAprobacion(8)); 
console.log(decidirAprobacion(4)); 
console.log(decidirAprobacion(11)); 


//39. Crea una función que clasifique una edad en categorías (niño, adolescente, adulto, 
//anciano).
function clasificarEdad(edad) {
    if (edad >= 0 && edad <= 12) {
        return "Niño";
    } else if (edad >= 13 && edad <= 17) {
        return "Adolescente";
    } else if (edad >= 18 && edad <= 64) {
        return "Adulto";
    } else if (edad >= 65) {
        return "Anciano";
    } else {
        return "Edad inválida";
    }
}
console.log(clasificarEdad(5)); 
console.log(clasificarEdad(15)); 
console.log(clasificarEdad(30)); 
console.log(clasificarEdad(70)); 
console.log(clasificarEdad(-5)); 


//40. Desarrolla una función que verifique si un usuario tiene acceso basado en su edad.
function verificarAcceso(edad) {
    const EDAD_MINIMA_ACCESO = 18;
    if (edad >= EDAD_MINIMA_ACCESO) {
        return "Acceso permitido"; 
    } else {
        return "Acceso denegado"; 
    }
}
console.log(verificarAcceso(20)); 
console.log(verificarAcceso(15)); 


//41. Escribe un bucle while que cuente de 1 a 100.
let contador = 1; 

while (contador <= 100) { 
    console.log(contador); 
    contador++; 
}

//42. Implementa un bucle while que sume los primeros 50 números naturales.
let cont= 1; 
let suma = 0; 
while (cont <= 50) { 
    suma += cont; 
    cont++; 
}
console.log("La suma de los primeros 50 números naturales es:", suma);


//43. Crea un bucle while que repita un saludo hasta que el usuario decida parar.
let seguirSaludando = true; 
while (seguirSaludando) { 
    let decision = 's'; 
    decision = decision.toLowerCase();

    if (decision === 's') {
        console.log("¡Hola de nuevo!"); 
        console.log("Usuario eligió seguir recibiendo saludos."); 
    } else if (decision === 'n') { 
        console.log("Entendido. ¡Hasta luego!"); 
        seguirSaludando = false; 
        console.log("Usuario decidió dejar de recibir saludos. Bucle detenido."); 
    } else { 
        console.log("Opción no válida. Por favor, ingresa 's' para seguir saludando o 'n' para parar."); 
        console.log("Usuario ingresó una opción no válida."); 
    }
}


//44. Desarrolla un bucle while que encuentre el primer número divisible por 7 en un rango.
let numeroInicial = 1; 
let numeroDivisible = null; 

while (!numeroDivisible) { 
    if (numeroInicial % 7 === 0) { 
        numeroDivisible = numeroInicial; 
    }
    numeroInicial++; 
}
console.log("El primer número divisible por 7 en el rango es:", numeroDivisible); 


//45. Diseña un bucle while que verifique la entrada del usuario hasta que sea válida.
let entradaValida = false; 
let entrada = "5"; 
if (!isNaN(entrada) && Number(entrada) >= 1 && Number(entrada) <= 10) {
    entradaValida = true; 
    console.log("¡Gracias! Has ingresado un número válido:", entrada); 
} else {
    console.log("La entrada no es válida. Por favor, ingresa un número entre 1 y 10."); 
}


//46. Escribe una función que use switch para asignar calificaciones (A, B, C, D, F) basado en 
//puntos.
function asignarCalificacion(puntos) {
    let calificacion;

    switch (true) {
        case puntos >= 90:
            calificacion = "A";
            break;
        case puntos >= 80:
            calificacion = "B";
            break;
        case puntos >= 70:
            calificacion = "C";
            break;
        case puntos >= 60:
            calificacion = "D";
            break;
        default:
            calificacion = "F";
    }
    return calificacion;
}
console.log("Calificación para 95 puntos:", asignarCalificacion(95)); 
console.log("Calificación para 82 puntos:", asignarCalificacion(82)); 
console.log("Calificación para 75 puntos:", asignarCalificacion(75)); 
console.log("Calificación para 68 puntos:", asignarCalificacion(68)); 
console.log("Calificación para 50 puntos:", asignarCalificacion(50));


//47. Implementa una función que use switch para responder a diferentes comandos de un 
//chatbot.
function chatbot(command) {
    let response;

    switch (command) {
        case "saludar":
            response = "¡Hola! ¿Cómo puedo ayudarte?";
            break;
        case "despedirse":
            response = "¡Hasta luego! Que tengas un buen día.";
            break;
        case "hora":
            let now = new Date();
            let hour = now.getHours();
            let minute = now.getMinutes();
            response = `La hora actual es ${hour}:${minute < 10 ? '0' + minute : minute}.`;
            break;
        case "ayuda":
            response = "Estos son los comandos que puedo entender: 'saludar', 'despedirse', 'hora' y 'ayuda'.";
            break;
        default:
            response = "Lo siento, no entendí ese comando. ¿Puedes repetirlo o pedir 'ayuda'?";
    }

    return response;
}
console.log(chatbot("saludar")); 
console.log(chatbot("despedirse")); 
console.log(chatbot("hora")); 
console.log(chatbot("ayuda")); 
console.log(chatbot("otro")); 


//48. Crea un switch para manejar diferentes tipos de métodos de pago (efectivo, tarjeta, 
//cheque).
function procesarPago(metodoPago, monto) {
    let mensaje;

    switch (metodoPago) {
        case "efectivo":
            mensaje = `Pago realizado en efectivo por un monto de ${monto} dólares.`;
            break;
        case "tarjeta":
            mensaje = `Pago realizado con tarjeta por un monto de ${monto} dólares.`;
            break;
        case "cheque":
            mensaje = `Pago realizado con cheque por un monto de ${monto} dólares.`;
            break;
        default:
            mensaje = "Método de pago no válido.";
    }

    return mensaje;
}
console.log(procesarPago("efectivo", 50));
console.log(procesarPago("tarjeta", 100)); 
console.log(procesarPago("cheque", 200)); 
console.log(procesarPago("transferencia", 150)); 


//49. Desarrolla una función que utilice switch para realizar cálculos básicos (+, -, *, /).
function calcular(op, num1, num2) {
    let resultado;

    switch (op) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operación no válida";
    }

    return resultado;
}

console.log(calcular("+", 5, 3)); 
console.log(calcular("-", 10, 4)); 
console.log(calcular("*", 7, 2));
console.log(calcular("/", 20, 5)); 
console.log(calcular("%", 15, 3)); 


//50. Diseña un switch para cambiar entre diferentes idiomas de un sitio web.
function cambiarIdioma(idioma) {
    switch (idioma) {
        case 'es':
            console.log('Idioma cambiado a Español');
            break;
        case 'en':
            console.log('Idioma cambiado a Inglés');
            break;
        case 'fr':
            console.log('Idioma cambiado a Francés');
            break;
        default:
            console.log('Idioma no soportado');
    }
}
cambiarIdioma('es'); 
cambiarIdioma('en');
cambiarIdioma('fr'); 
cambiarIdioma('de');


//51. Implementa un bucle for que imprima todos los elementos de un array.
let miArray = ["uno", "dos", "tres", "cuatro", "cinco"];
for (let i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
}


//52. Escribe un bucle for que multiplique todos los elementos de un array.
let Array = [2, 3, 4, 5];
let respues = 1;
for (let i = 0; i < Array.length; i++) {
    respues *= Array[i];
}
console.log("El resultado de la multiplicación es:", respues);


//53. Crea un bucle for para encontrar el menor número en un array.
let Array3 = [5, 2, 8, 1, 9, 3];
let menor = Array3[0];
for (let i = 1; i < Array3.length; i++) {
    if (Array3[i] < menor) {
        menor = Array3[i];
    }
}
console.log("El menor número en el array es:", menor);


//54. Desarrolla un bucle for para verificar si un array contiene un elemento específico.
let Array4 = [2, 4, 6, 8, 10];
let elementoBuscado = 6;
let encontrado = false;
for (let i = 0; i < Array4.length; i++) {
    if (Array4[i] === elementoBuscado) {
        encontrado = true;
        break; 
    }
}
if (encontrado) {
    console.log("El elemento", elementoBuscado, "se encuentra en el array.");
} else {
    console.log("El elemento", elementoBuscado, "no se encuentra en el array.");
}


//55. Diseña un bucle for que copie un array en otro.
let arrayOriginal = [1, 2, 3, 4, 5];
let arrayCopia = [];
for (let i = 0; i < arrayOriginal.length; i++) {
    arrayCopia[i] = arrayOriginal[i];
}
console.log("Array copiado:", arrayCopia);


//56. Utiliza un bucle do-while para pedir al usuario que ingrese un número hasta que sea 
let numero;

do {
    numero = parseInt(prompt("Por favor, ingresa un número mayor que 10:"));
} while (numero <= 10);

console.log("¡Gracias! Has ingresado el número:", numero);


//57. Implementa un for-in para mostrar todas las propiedades de un objeto.
let persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};

for (let propiedad in persona) {
    console.log(propiedad + ': ' + persona[propiedad]);
}


//58. Usa un for-of para iterar sobre un array de nombres y saludar a cada uno.
let nombres = ['Juan', 'María', 'Pedro', 'Ana'];

for (let nombre of nombres) {
    console.log('¡Hola, ' + nombre + '!');
}


//59. Crea un forEach para aplicar un descuento del 10% a precios en un array.
let precios = [100, 200, 300, 400];
precios.forEach((precio, index) => {
    let descuento = precio * 0.1; 
    let precioConDescuento = precio - descuento; 
    precios[index] = precioConDescuento; 
});

console.log(precios);


//60. Escribe un código que use map para convertir todas las temperaturas de un array de 
let temperaturasCelsius = [0, 10, 20, 30, 40];
let temperaturasFahrenheit = temperaturasCelsius.map((celsius) => {
    return (celsius * 9/5) + 32; 
});
console.log("Temperaturas en Fahrenheit:", temperaturasFahrenheit);
