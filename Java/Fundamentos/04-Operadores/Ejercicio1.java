import java.util.Scanner;

public class Ejercicio1 {
    public static void main(String[] args) {
        int alto = 0, ancho = 0;
        var consola = new Scanner(System.in);
        System.out.println("Proporciona el alto: ");
        alto = Integer.parseInt(consola.nextLine());
        System.out.println("Proporciona el ancho: ");
        ancho = Integer.parseInt(consola.nextLine());
        var resultadoArea = (alto * ancho);
        var resultadoPerimetro = (alto + ancho) * 2;
        System.out.println("Area: " + resultadoArea);
        System.out.println("Perimetro: " + resultadoPerimetro);
    }
}
