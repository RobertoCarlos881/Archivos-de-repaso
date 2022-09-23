import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        int numero1 = 0, numero2 = 0;
        var consola = new Scanner(System.in);
        System.out.println("Proporciona el numero1: ");
        numero1 = Integer.parseInt(consola.nextLine());
        System.out.println("Proporciona el numero2: ");
        numero2 = Integer.parseInt(consola.nextLine());
        var resultado = (numero1 > numero2) ? numero1 : numero2;
        System.out.println("El numero mayor es: \n" + resultado);
    }
}
