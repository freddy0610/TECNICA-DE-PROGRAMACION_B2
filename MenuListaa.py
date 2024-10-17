crearLista = []

def menu():
    opcion = 0
    
    print("""
          BIENVENIDO A OPERACIONES CON LISTAS
          """)
    
    while True:
        print("""
          ////////////// MENU DE LA LISTA /////////////
          1. Crear la Lista
          2. Mostrar la Lista
          3. Modificar la Lista
          4. Eliminar [Lifo]
          5. Eliminar [Fifo]
          6. Salir del Programa
          """)
        
        opcion = input("Ingrese la opcion [1 - 6]: ")
        
        if opcion in ["1","2","3","4","5","6"]:
            if opcion == "1": #Crear lista
                crearListaUser()
            elif opcion == "2": #Mostrar Lista
                mostrarListaUser()
            elif opcion == "3": #Modificar Lista
                modificarListaUser()
            elif opcion == "4": #Eliminar Lifo
                eliminarListaLifoUser()
            elif opcion == "5": #Eliminar Fifo
                eliminarListaFifoUser()
            elif opcion == "6": #Salir Programa
                print("""
                      Saliendo del programa...
                      """)
                break
        else:
            print("""
                  Opcion no valida, ingrese nuevamente...
                  """)

def crearListaUser():
    print("""
        >>>>> Crear la Lista <<<<<<
        """)
    global crearLista
    crearLista.clear()
    
    cantidadElementosLista = 0

    try:
        cantidadElementosLista = int(input("Ingrese la cantidad de elementos: "))
        if cantidadElementosLista <= 0 :
            print("""
                Ingrese elementos mayor a 0
                """)
            return
        
        for i in range(1, cantidadElementosLista + 1):
            valor = int(input(f"Ingrese el valor {i}: "))
            crearLista.append(valor)
            
        print("""
              Lista Creada
              """)
            
    except ValueError:
        print("""
                Error!, ponga numeros enteros..
                """)
        
def mostrarListaUser():
    
    if crearLista:
        print(f"""
              Cantidad elementos lista: {len(crearLista)}
              Elementos: {crearLista}
              Indice Mayor: {len(crearLista) - 1 }
              Indice Menor: 0
              """)
    else:
        print("""
              No existen elementos en la lista
              """)
        
def modificarListaUser():
    
    print("""
          >>>>>>>> Modificar Lista <<<<<<<<<<
          """)
    
    indice = 0
    valorCambio = 0
    
    print("Lista anterior: ")
    mostrarListaUser()
    try:
        indice = int(input("Ingrese el elemento a modificar: "))
        
        if indice < 0 or indice > (len(crearLista) - 1):
            print("""
                  Error, elemento no valido
                  """)
            return
        
        valorCambio = int(input("Ingrese el numero nuevo: "))
        
        crearLista[indice] = valorCambio
        
        print("Su nueva lista actual: ")
        mostrarListaUser()
        
    except ValueError:
        print("""
              Error!, Ingrese valores solo numericos
              """)
    
def eliminarListaLifoUser():
    valorEliminado = 0
    if crearLista: 
        print("""
          ************** Eliminar Lista [Lifo] **************
          """)
    
        print("Su Lista anterior: ")
        mostrarListaUser()
        
        valorEliminado = crearLista.pop()
        
        print(f"""
              Se elimino el ultimo valor: [{valorEliminado}]
              """)
    else:
        print("""
              La lista no tiene elementos
              """)

def eliminarListaFifoUser():
    valorEliminado = 0
    
    if crearLista:
        print("""
          ************** Eliminar Lista [Fifo] **************
          """)
    
        print("Su Lista anterior: ")
        mostrarListaUser()
        
        valorEliminado = crearLista.pop(0)
        
        print(f"""
              Se elimino el primer valor: [{valorEliminado}]
              """)
    else:
        print("""
            No existe el elemento en la lista
            """)
        
    
menu()
        
        
    

               
            
            
        
        