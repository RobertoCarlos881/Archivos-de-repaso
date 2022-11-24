package test;

import domain.Persona;

public class PersonaPrueba {
    //private int contador; no va a dejarlo usar porque no es estatico
    
    public static void main(String[] args) {
        Persona persona1 = new Persona("Roberto");
        Persona persona2 = new Persona("Jimena");
        imprimir(persona1);
        imprimir(persona2);
    }
    
    public static void imprimir(Persona persona) {
        System.out.println("persona = " + persona);
    }
}
