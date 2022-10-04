package clases;

//Una clase es una plantila que se le puede crear un objeto, la clase posee atributos y metodos
//Un atributo puede ser el nombre de una persona, telefono, etc.
//metodos son para recuperar el nombre de la persona, cambiar el telefono de la persona, etc.
//No se trabaja directamente con la clase, si no con el objeto

public class Persona {
    //Atributos de la clase
    String nombre;
    String apellido;

    //Metodos de la clase
    public void desplegarInformacion() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Apellido: " + apellido);
    }
}