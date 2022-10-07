package caja;

public class Caja {
    //Atributos
    int ancho, profundo, alto;
    
    //constructores
    public Caja() {
        System.out.println("Constructor vacio");
    }
    
    public Caja(int ancho, int profundo, int alto) {
        System.out.println("Constructor lleno");
        this.ancho = ancho;
        this.profundo = profundo;
        this.alto = alto;
    }
    
    //Metodos
    public int calcularVolumen(){
        return ancho*profundo*alto;
    }
}
