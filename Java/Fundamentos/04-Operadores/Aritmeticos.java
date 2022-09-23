import java.util.Scanner;

public class Aritmeticos {
    public static void main(String[] args) {
        int a = 3, b = 2;
        var resultado = a + b;
        System.out.println("La suma es: " + resultado);

        resultado = a - b;
        System.out.println("La resta es: " + resultado);

        resultado = a * b;
        System.out.println("La multiplicacion es: " + resultado);

        var resultado2 = 3F / b;
        System.out.println("La division es: " + resultado2);

        resultado = a % b;
        System.out.println("El residuo es : " + resultado);

        System.out.println("Escribe un numero: ");
        var consola = new Scanner(System.in);
        a = Integer.parseInt(consola.nextLine());
        if( a % 2 == 0) {
            System.out.println("El numero es par");
        } else  {
            System.out.println("El numero es impar");
        }
    }
}