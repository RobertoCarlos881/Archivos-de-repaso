#Tipo de dato
#El primer dato es el none o nada
nada = None
#El segundo tipo de dato es la cadena o string
cadena = "Hola soy Roberto Carlos"
#El tercer tipo de dato es el int o entero
entero = 99
#El cuarto tipo de dato es el flotante o float
flotante = 15.82
#El quinto tipo de dato es el booleano
booleano = True
#El sexto tipo de dato es la lista o array, algo importante es que dentro de la lista puedes incluir cualquier tipo de dato
lista = [10, 20, 30, 40, 50]
#El septimo tipo de dato es la dupla, que es una lista pero no puedo cambiar sus valores
dupla = ("Hola", "Como", "Estas")
#El octavo es el diccionario, que es un tipo json, donde permite tener clave y valor
diccionario = {
    "nombre": "Roberto Carlos",
    "apellido": "Cortes Ramirez",
    "Hola": "You're welcome"
}
#El noveno es el rango, donde puedes definir un inicio y un limite y de otras formas imprimirlos
rango = range(9)
#El decimo dato es el set, que es un tipo de diccionario y se parece a la dupla
#El decimo primero es el tipo byte, que no se ocupa tanto, pero existe
dato_byte = b"Hola"
#Existen mas tipos de datos pero los primero 9 son los que mas se ocupan

#Impresion de variable
print(nada)
print(cadena)
print(entero)
print(flotante)
print(booleano)
print(lista)
print(dupla)
print(diccionario)
print(rango)
print(dato_byte)

#Mostrar tipo de dato
print(type(nada))
print(type(cadena))
print(type(entero))
print(type(flotante))
print(type(booleano))
print(type(lista))
print(type(dupla))
print(type(diccionario))
print(type(rango))
print(type(dato_byte))