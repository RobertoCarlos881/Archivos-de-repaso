package operaciones;

public class PruebaAritmetica {
    public static void main(String[] args) {
        Aritmetica aritmetica1 = new Aritmetica();
        aritmetica1.a = 3;
        aritmetica1.b = 2;
        aritmetica1.sumar();
        
        int resultado = aritmetica1.sumarConRetorno();
        System.out.println("Resultado desde la clase de prueba: " + resultado);
        
        resultado = aritmetica1.sumarConArgumentos(20, 30);
        System.out.println("Resultado de sumar con argumento: " + resultado);
    }
}
