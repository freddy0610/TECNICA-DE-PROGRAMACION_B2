import math


class CalcularArea:
    def area_circulo(self, radio):
        return math.pi * radio ** 2

    def area_cuadrado(self, lado):
        return lado ** 2

    def area_rectangulo(self, base, altura):
        return base * altura

class Calculadora:
    def sumar(self, a, b):
        return a + b

    def restar(self, a, b):
        return a - b

    def multiplicar(self, a, b):
        return a * b

    def dividir(self, a, b):
        if b != 0:
            return a / b
        else:
            return "Error: División por cero"

def mostrar_menu():
    print("----- Menú -----")
    print("1. Calcular Área")
    print("2. Usar Calculadora")
    print("3. Salir")
    opcion = int(input("Selecciona una opción: "))
    return opcion

def menu_area():
    area_calculadora = CalcularArea()
    print("----- Calcular Área -----")
    print("1. Círculo")
    print("2. Cuadrado")
    print("3. Rectángulo")
    figura = int(input("Selecciona una figura: "))

    if figura == 1:
        radio = float(input("Introduce el radio del círculo: "))
        print(f"Área del círculo: {area_calculadora.area_circulo(radio)}")
    elif figura == 2:
        lado = float(input("Introduce el lado del cuadrado: "))
        print(f"Área del cuadrado: {area_calculadora.area_cuadrado(lado)}")
    elif figura == 3:
        base = float(input("Introduce la base del rectángulo: "))
        altura = float(input("Introduce la altura del rectángulo: "))
        print(f"Área del rectángulo: {area_calculadora.area_rectangulo(base, altura)}")
    else:
        print("Opción no válida")

def menu_calculadora():
    calculadora = Calculadora()
    print("----- Calculadora -----")
    print("1. Sumar")
    print("2. Restar")
    print("3. Multiplicar")
    print("4. Dividir")
    operacion = int(input("Selecciona una operación: "))

    a = float(input("Introduce el primer número: "))
    b = float(input("Introduce el segundo número: "))

    if operacion == 1:
        print(f"Resultado: {calculadora.sumar(a, b)}")
    elif operacion == 2:
        print(f"Resultado: {calculadora.restar(a, b)}")
    elif operacion == 3:
        print(f"Resultado: {calculadora.multiplicar(a, b)}")
    elif operacion == 4:
        print(f"Resultado: {calculadora.dividir(a, b)}")
    else:
        print("Opción no válida")

def main():
    while True:
        opcion = mostrar_menu()
        if opcion == 1:
            menu_area()
        elif opcion == 2:
            menu_calculadora()
        elif opcion == 3:
            print("Saliendo...")
            break
        else:
            print("Opción no válida, intenta de nuevo.")

if __name__ == "__main__":
    main()
