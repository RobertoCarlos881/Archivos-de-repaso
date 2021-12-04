texto = "Hola soy un texto"
numero = 9858

#Si haces este print te va a marcar un error, porque no se puede
#print(texto + numero)
#Para hacer esto hay que convertir el numero a un string de esta forma:
numero = str(9858)
print(texto + numero)
#En la forma que se convirtio en string, se puede cambiar a otros datos de la misma forma un ejemplo
numero = int(9858)
numero = float(9858)