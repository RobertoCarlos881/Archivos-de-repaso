package pasoporvalor;

public class PasoPorValor {
    //algo que tienes que recordar, es si el main es estatico los metodos tienen que ser estaticos
    public static void main(String[] args) {
        int x = 10;
        System.out.println("X = " + x);
        cambioValor(x);
        System.out.println("Valor nuevo X = " + x);
    }
    
    public static void cambioValor(int arg1) {
        System.out.println("Argumento: " + arg1);
        arg1 = 20; //este valor, no puede cambiar el valor de x, se tiene que hacer un return para regresarlo
    }
}
