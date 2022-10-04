public class While {
    public static void main(String[] args) {
        var contador = 0;
        //while
        // while (contador < 3) {
        //     System.out.println("Contador: " + contador);
        //     contador++;
        // }

        //do while
        do {
            System.out.println("Contador: " + contador);
            contador++;
        } while (contador < 3);
    }
}