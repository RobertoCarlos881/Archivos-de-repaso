package operaciones;

public class PruebaAritmetica {
    public static void main(String[] args) {
        Aritmetica aritmetica1 = new Aritmetica();
        System.out.println("aritmetica1 a: " + aritmetica1.a);
        System.out.println("aritmetica1 b: " + aritmetica1.b);
        
        Aritmetica aritmetica2 = new Aritmetica(10, 30);
        System.out.println("aritmetica1 a: " + aritmetica2.a);
        System.out.println("aritmetica1 b: " + aritmetica2.b);
    }
}