import java.util.Scanner;

public class Ejercicio {
    public static void main(String[] args) {
        float valor = 0;
        var consola = new Scanner(System.in);
        System.out.println("Proporciona un valor entre 0 y 10: ");
        valor = Float.parseFloat(consola.nextLine());
        if (valor >= 9.0 || valor == 10) {
            System.out.println("A");
        } else if (valor >= 8 && valor <= 8.9) {
            System.out.println("B");
        } else if (valor >= 7 && valor <= 7.9) {
            System.out.println("C");
        } else if (valor >= 6 && valor <= 6.9) {
            System.out.println("D");
        } else if (valor >= 0 && valor <= 5.9) {
            System.out.println("F");
        } else {
            System.out.println("Valor desconocido");
        }
    }
}
