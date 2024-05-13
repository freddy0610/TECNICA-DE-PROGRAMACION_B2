// 1. Define una clase Coche que tenga propiedades para marca, modelo y año.
class Coche {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
}
const miCochee = new Coche("Chevrolet", "Aveo", 2015);
console.log(miCochee);



// 2. Escribe una función que tome un array de nombres y los transforme a mayúsculas.
function convertirAMayusculas(nombres) {
    const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
    return nombresMayusculas;
}
const nombres = ["Juan", "María", "Pedro"];
const nombresEnMayusculas = convertirAMayusculas(nombres);
console.log(nombresEnMayusculas); 


// 3. Crea una función que reciba un arreglo de números y devuelva un nuevo arreglo 
// que solo contenga los números mayores que 10.
function numerosMayoresQue10(arr) {
    let mayoresQue10 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            mayoresQue10.push(arr[i]);
        }
    }
    return mayoresQue10;
}
const numeros = [5, 15, 3, 12, 8, 20];
const resultado = numerosMayoresQue10(numeros);
console.log(resultado);


// 4. Escribe una función que imprima los primeros 10 números naturales usando un bucle while.
function imprimirPrimeros10NumerosNaturales() {
    let contador = 1; 
    while (contador <= 10) {
        console.log(contador); 
        contador++;
    }
}
imprimirPrimeros10NumerosNaturales();
console.log("Fin del programa");


// 5. Utiliza filter y map para encontrar todos los números en un arreglo que sean mayores que 10 
// y luego multiplícalos por 2.
const arreglo = [5, 15, 3, 12, 8, 20];
const resul = arreglo.filter(numero => numero > 10).map(numero => numero * 2);
console.log(resul);


// 6. Implementa una función que recorra una lista hasta encontrar el número 0,
// momento en el que el bucle deberá terminar.
function recorrerLista(lista) {
    let i = 0;
    while (i < lista.length) {
        if (lista[i] === 0) {
            console.log("El número 0 se encuentra en el índice:", i);
            break;
        }
        i++;
    }
}
const lista = [1, 2, 3, 4, 0, 6, 7];
recorrerLista(lista);




// 7. Crea una clase Persona que tenga propiedades para nombre, edad y un método
// que devuelva una descripción básica de la persona.
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    descripcion() {
        return `Mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
const persona1 = new Persona("Juan", 30);
console.log(persona1.descripcion());



// 8. Define una clase Libro con propiedades para título, autor, y año. Agrega un método que devuelva 
// un string con el título y el autor del libro.
class Libro {
    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
    }
    obtenerTituloAutor() {
        return `${this.titulo} - ${this.autor}`;
    }
}
const libro1 = new Libro("El Señor de los Anillos", "J.R.R. Tolkien", 1954);
console.log(libro1.obtenerTituloAutor());



// 9. En la clase CuentaBancaria, añade propiedades privadas para titular y saldo. 
// Usa getters y setters para modificar el saldo.
class CuentaBancaria {
    #titular;
    #saldo;
    constructor(titular, saldoInicial) {
        this.#titular = titular;
        this.#saldo = saldoInicial;
    }
    get saldo() {
        return this.#saldo;
    }
    set saldo(nuevoSaldo) {
        this.#saldo = nuevoSaldo;
    }
    get titular() {
        return this.#titular;
    }
}
const cuenta = new CuentaBancaria("Juan", 1000);
console.log(cuenta.saldo);
cuenta.saldo = 1500;
console.log(cuenta.saldo);
console.log(cuenta.titular);




// 10. Crea una clase Utilidad que tenga un método estático que convierta grados Celsius a Fahrenheit.
class Utilidad {
    static celsiusToFahrenheit(gradosCelsius) {
        return (gradosCelsius * 9/5) + 32;
    }
}
const temperaturaCelsius = 20;
const temperaturaFahrenheit = Utilidad.celsiusToFahrenheit(temperaturaCelsius);
console.log(`${temperaturaCelsius} grados Celsius son equivalentes a ${temperaturaFahrenheit} grados Fahrenheit.`);




// 11. Define una clase Empleado que herede de la clase Persona y añade una propiedad salario.
class Empleado {
    constructor(nombre, edad, salario) {
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salario;
    }
    descripcion() {
        return `Mi nombre es ${this.nombre}, tengo ${this.edad} años y mi salario es ${this.salario} dólares.`;
    }
}
const empleado1 = new Empleado("Juan", 30, 50000);
console.log(empleado1.descripcion());




// 12. Implementa una clase Coche que encapsule las propiedades marca, modelo, 
// y kilometraje y prevenga el acceso directo a kilometraje.
class Coche2 {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this._kilometraje = 0; 
    }
    get kilometraje() {
        return this._kilometraje;
    }
    conducir(distancia) {
        this._kilometraje += distancia;
    }
}
const miCoche2 = new Coche2("mazda", "323");
console.log(miCoche2.kilometraje);
miCoche2.conducir(100);
console.log(miCoche2.kilometraje);




// 13. Crea una clase Tienda que contenga un array de objetos de la clase Producto. 
// Implementa métodos para añadir, remover y buscar productos.
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Tienda {
    constructor() {
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    removerProducto(nombre) {
        this.productos = this.productos.filter(producto => producto.nombre !== nombre);
    }
    buscarProducto(nombre) {
        return this.productos.find(producto => producto.nombre === nombre);
    }
}
const tienda = new Tienda();
const producto1 = new Producto("Camiseta", 20);
const producto2 = new Producto("Pantalón", 30);
tienda.agregarProducto(producto1);
tienda.agregarProducto(producto2);
const resultadoBusqueda = tienda.buscarProducto("Camiseta");
console.log(resultadoBusqueda);
tienda.removerProducto("Pantalón");
console.log(tienda.productos);



// 14. En la clase Usuario, permite que se añadan propiedades dinámicas que no están definidas
// en el constructor como hobbies o intereses.
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    agregarPropiedad(nombrePropiedad, valorPropiedad) {
        this[nombrePropiedad] = valorPropiedad;
    }
}
const usuario1 = new Usuario("Juan", 25);
usuario1.agregarPropiedad("hobbies", ["lectura", "cine"]);
usuario1.agregarPropiedad("intereses", ["viajar", "cocinar"]);
console.log(usuario1);



// 15. Define una clase Configuracion donde ciertas propiedades como nombreDeUsuario 
// no puedan modificarse después de ser inicializadas.
class Configuracion {
    constructor(nombreDeUsuario) {
        Object.defineProperty(this, 'nombreDeUsuario', {
            value: nombreDeUsuario,
            writable: false, 
            enumerable: true, 
            configurable: false 
        });
    }
}
const configuracion = new Configuracion("Freddycb06");
console.log(configuracion.nombreDeUsuario); 
configuracion.nombreDeUsuario = "Freddycb06";
console.log(configuracion.nombreDeUsuario);



// 16. En la clase Persona, asegura que la edad no pueda ser menor que 0 ni mayor que 120 usando setters.
class Person {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this._edad = edad;
    }
    set edad(nuevaEdad) {
        if (nuevaEdad >= 0 && nuevaEdad <= 120) {
            this._edad = nuevaEdad;
        } else {
            console.log("La edad debe estar en el rango de 0 a 120 años.");
        }
    }
    get edad() {
        return this._edad;
    }
}
const person1 = new Person("Juan", 30);
person1.edad = 25;
console.log(person1.edad);
persona1.edad = 150; 
console.log(person1.edad);



// 17. Implementa una clase Cadena que tenga métodos para contar número de vocales, 
// invertir la cadena, y verificar si es un palíndromo.
class Cadena {
    constructor(cadena) {
        this.cadena = cadena;
    }
    contarVocales() {
        const vocales = ['a', 'e', 'i', 'o', 'u'];
        let count = 0;
        for (let letra of this.cadena.toLowerCase()) {
            if (vocales.includes(letra)) {
                count++;
            }
        }
        return count;
    }
    invertirCadena() {
        return this.cadena.split('').reverse().join('');
    }
    esPalindromo() {
        const cadenaSinEspacios = this.cadena.toLowerCase().replace(/ /g, '');
        return cadenaSinEspacios === this.invertirCadena(cadenaSinEspacios);
    }
}
const cadena = new Cadena("Anita lava la tina");
console.log("Número de vocales:", cadena.contarVocales());
console.log("Cadena invertida:", cadena.invertirCadena());
console.log("¿Es un palíndromo?", cadena.esPalindromo());



// 18. Implementa la clase Calculadora de modo que se puedan encadenar métodos como sumar, restar, etc.
class Calculadora {
    constructor() {
        this.resultad = 0;
    }
    sumar(valor) {
        this.resultad += valor;
        return this;
    }
    restar(valor) {
        this.resultad -= valor;
        return this;
    }
    multiplicar(valor) {
        this.resultad *= valor;
        return this;
    }
    dividir(valor) {
        if (valor !== 0) {
            this.resultad /= valor;
        } else {
            console.log("Error: No se puede dividir por cero.");
        }
        return this;
    }
    obtenerResultado() {
        return this.resultad;
    }
}
const calculadora = new Calculadora();
const resultad = calculadora.sumar(5).restar(2).multiplicar(3).dividir(2).obtenerResultado();
console.log("Resultado:", resultad); 





