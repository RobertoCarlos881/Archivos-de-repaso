import java.util.Scanner;

public class Ejercicio {
    public static void main(String[] args) {
        String nombre = "";
        int id = 0;
        double precio = 0;
        boolean envioGratuito = true;
        var consola = new Scanner(System.in);

        System.out.println("Proporciona el nombre: ");
        nombre = String.valueOf(consola.nextLine());
        System.out.println("Proporciona el ID: ");
        id = Integer.parseInt(consola.nextLine());
        System.out.println("Proporciona el precio: ");
        precio = Double.parseDouble(consola.nextLine());
        System.out.println("Proporciona el envio gratuito: ");
        envioGratuito = Boolean.parseBoolean(consola.nextLine());
        System.out.println(nombre + " #" + id);
        System.out.println("Precio: $" + precio);
        System.out.println("Envio Gratuito: " + envioGratuito);
    }
}
