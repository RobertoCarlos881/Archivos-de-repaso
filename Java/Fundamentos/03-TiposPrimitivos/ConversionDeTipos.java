import java.util.Scanner;

public class ConversionDeTipos {
    public static void main(String[] args) {
        //Convertir tipo string a un tipo int
        var edad = Integer.parseInt("22");
        //var edad = "22";
        System.out.println("Edad: " + (edad + 1));

        //Convertir tipo string a double
        var valorPI = Double.parseDouble("3.1416");
        System.out.println("ValorPI: " + valorPI);

        //Pedir un valor
        // var consola = new Scanner(System.in);
        // System.out.println("Dame tu edad: ");
        // edad = Integer.parseInt(consola.nextLine());
        // System.out.println("Tu edad es: " + edad);

        //cualquier tipo a string
        var edadTexto = String.valueOf(edad);
        System.out.println("Edad texto: " + edadTexto);

        var caracter = "hola".charAt(1);
        System.out.println(caracter);
    }
}
