public class PrimitivosFlotantes {
    public static void main(String[] args) {
        /*
        Tipos primitivos de tipo flotante: float y double
         */
        float numeroFloat = 10.202F; //se puede hacer de las 2 formas
        //float numeroFloat = (float)10.202;
        //float numeroFloat = (float)3.4028237E38D; una vez sobrepasado esto, el compilador no soporta y nos marca que es infinito
        System.out.println("Numero flotante: " + numeroFloat);
        System.out.println("Valor minimo de float: " + Float.MIN_VALUE); //1.4E-45
        System.out.println("Valor maximo de float: " + Float.MAX_VALUE); //3.4028235E38

        double numeroDouble = 10;
        System.out.println("Numero double: " + numeroDouble);
        System.out.println("Valor minimo de double: " + Double.MIN_VALUE); //4.9E-324
        System.out.println("Valor maximo de double: " + Double.MAX_VALUE); //1.7976931348623157E308
    }
}
