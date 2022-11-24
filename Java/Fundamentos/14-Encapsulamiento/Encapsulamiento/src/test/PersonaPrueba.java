package test;

import dominio.Persona;

public class PersonaPrueba {
    public static void main(String[] args) {
        Persona persona1 = new Persona("Roberto", 5000.00, false);
        persona1.setNombre("Pedro");
        System.out.println("persona1: " + persona1.toString());
    }
}
