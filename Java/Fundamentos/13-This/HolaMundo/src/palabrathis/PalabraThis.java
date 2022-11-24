package palabrathis;

public class PalabraThis {
    public static void main(String[] args) {
        Persona persona = new Persona("Roberto", "Cortes");
        System.out.println("Persona =" + persona);
        System.out.println("Persona =" + persona.nombre);
    }
}

class Persona {
    String nombre;
    String apellido;
    
    Persona(String nombre, String apellido) {
        //super();
        this.nombre = nombre;
        this.apellido = apellido;
        System.out.println("Persona constructor = " + this);
        new Imprimir().imprimir(this);
    }
}

class Imprimir {
    public Imprimir() {
        super(); //el constructor de la clase padres
    }
    public void imprimir(Persona persona) {
        System.out.println("Persona desde imprimir: " + persona);
        System.out.println("Impresion del objeto actual(this): " + this);
    }
}