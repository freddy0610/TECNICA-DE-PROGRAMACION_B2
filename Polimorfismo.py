import math

class Figura(object):
    def __init__(self, x):
        self.x = x

    def area(self):
        pass

    def perimetro(self):
        pass


class Circulo(Figura):
    def __init__(self, radio):
        super().__init__(radio)

    def area(self):
        print(f"El area del circulo es {round((math.pi * math.pow(self.x, 2)), 2)}")

    def perimetro(self):
        print(f"El perimetro del circulo es {round((2 * math.pi * self.x), 2)}")


class Cuadrado(Figura):
    def __init__(self, lados):
        super().__init__(lados)

    def area(self):
        print(f"El area del cuadrado es {round(math.pow(self.x, 2), 2)}")

    def perimetro(self):
        print(f"El perimentro del cuadrado es {round((4 * self.x), 2)}")


def mostrarAreasPerimetro(instancia):
    instancia.area()
    instancia.perimetro()


# Se instancia la clase y se presenta con sus metodos usando el polimosfismo
def instanciarCirculo(radio):
    circulo = Circulo(radio)
    mostrarAreasPerimetro(circulo)


# Se instancia la clase y se presenta con sus metodos usando el polimosfismo
def instanciarCuadrado(lado):
    cuadrado = Cuadrado(lado)
    mostrarAreasPerimetro(cuadrado)


# Se muestra un menu para seleccionar que mostrar
def menu():
    radio = 0.0
    lado = 0

    print("""
        Calculadora Area y perimetro

        1. Circulo
        2. Cuadrado
        3. Salir

        Seleccione una opcion
        """)

    while True:
        opcion = input(""" Opcion [1 - 2 - 3]: """)

        if opcion in ["1", "2", "3"]:  # Se comprueba que la opcion sea la correcta
            if opcion == "1":
                # se valida que la entrada sea solo numerica
                try:
                    radio = float(input("Ingrese el radio del circulo: "))
                    # Se llama a la funcion
                    instanciarCirculo(radio)
                except ValueError:
                    print("Error, ingrese un valor numerico")
            elif opcion == "2":
                # se valida que la entrada sea solo numerica
                try:
                    lado = float(input("Ingrese el lado del cuadro: "))
                    # Se llama a la funcion
                    instanciarCuadrado(lado)
                except ValueError:
                    print("Error, ingrese un valor numerico")
            elif opcion == "3":
                print("Ha salido")
                break
        else:
            print("Opcion no valida, vuelva a intentarlo....")


menu()