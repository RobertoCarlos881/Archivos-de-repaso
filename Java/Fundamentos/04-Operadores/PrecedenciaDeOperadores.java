public class PrecedenciaDeOperadores {
    public static void main(String[] args) {
        //La precedencia de operadores es el orden en que se van a evaluar los operadores
        var x = 5;
        var y = 10;
        var z = ++x + y--; //primero van los operadores unarios y luego el aritmetico
        System.out.println(z);
        
        var resultado = 4 + 5 * 6 / 3;
        System.out.println(resultado);
    }
}
