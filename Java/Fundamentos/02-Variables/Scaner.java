import java.util.Scanner;

public class Scaner {
    public static void main(String[] args) {
        System.out.println("Escribe tu nombre:");
        Scanner consola = new Scanner(System.in); //system.in es la entrada de datos
        var usuario = consola.nextLine(); //leer una linea completa de la consola
        System.out.println("Tu nombre es: " + usuario);

        System.out.println("¿Eres ingeniero o licenciado?");
        var titulo = consola.nextLine();
        System.out.println("Vaya eres: " + titulo);
    }
}
