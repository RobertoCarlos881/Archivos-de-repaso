package pasoporreferencia;

import clases.Persona;

public class PasoPorReferencia {
    public static void main(String[] args) {
        Persona persona1 = new Persona();
        persona1.nombre = "Roberto";
        System.out.println("Nombre: " + persona1.nombre);
        cambiaValor(persona1);
        System.out.println("Nombre: " + persona1.nombre);
    }
    
    public static Persona cambiaValor(Persona persona){
        if(persona == null) {
            System.out.println("Valor de persona invalido: null");
            return null;
        }
        persona.nombre = "Jimena";
        return persona;
    }
}
