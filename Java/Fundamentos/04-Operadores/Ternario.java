public class Ternario {
    public static void main(String[] args) {
        var resultado = (3 > 4) ? "verdad" : "falso";
        System.out.println("Resltado: " + resultado);

        var numero = 7;
        resultado = (numero % 2 == 0) ? "Es par" : "Es impar";
        System.out.println(resultado);
    }
}
