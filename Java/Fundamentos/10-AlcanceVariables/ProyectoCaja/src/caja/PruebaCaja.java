package caja;

public class PruebaCaja {
    public static void main(String[] args) {
        int ancho = 3, profundo = 6, alto = 2;
        
        Caja caja1 = new Caja();
        caja1.ancho = ancho;
        caja1.profundo = profundo;
        caja1.alto = alto;
        int resultado = caja1.calcularVolumen();
        System.out.println("El volumen es: " + resultado);
    
        Caja caja2 = new Caja(3, 6, 2);
        System.out.println("El volumen es: " + caja2.calcularVolumen());
    }  
}
