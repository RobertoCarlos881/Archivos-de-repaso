#Concatenacion 
nombre = "Roberto Carlos"
apellidos = "Cortes Ramirez"
web = "robertoweb.es"

#Existen varias formas de concatenar veamoslas
#La primera es deja un espacio entre comillas para que haga efecto en un texto
print(nombre + " " + apellidos + " - " + web)
#La segunda forma es con f
print(f"{nombre} {apellidos} - {web}")
#La tercera forma es con la funcion format
print("Hola me llamo {} {} y mi web es: {}".format(nombre, apellidos, web))
#Una cuarta forma de concatenar
print(nombre, apellidos, web)