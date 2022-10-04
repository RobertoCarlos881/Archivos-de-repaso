public class For {
    public static void main(String[] args) {
        //break, es para romper un ciclo
        //continue, es para ir a la siguiente iteracion
        //declaracion de variable; condicion a cumplir; se checa el incremento o decremento
        //no es buena practica usar labels
        //inicio: 
        for( var contador = 0; contador < 3; contador++) {
            if (contador % 2 == 0) {
                System.out.println("Contador: " + contador);
                break;
            }
        }

        for(contador = 0; contador < 3; contador++) {
            if (contador % 2 != 0) {
                continue /*inicio*/;
            }
            System.out.println("Contador: " + contador);
        }
    }
}
