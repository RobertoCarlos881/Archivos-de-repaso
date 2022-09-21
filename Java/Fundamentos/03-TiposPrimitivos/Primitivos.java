public class Primitivos {
    public static void main(String[] args) {
        /*
        Tipos primitivos enteros: byte, short, int, long        
        */
        byte numeroByte = (byte)150;
        //las clases inician con mayusculas como Byte, Short, Int, Long
        System.out.println("Valor minimo byte: " + Byte.MIN_VALUE); //-128
        System.out.println("Valor maximo byte: " + Byte.MAX_VALUE); //127
        System.out.println(numeroByte);

        short numeroShort = 32767; //se le puede dar cualquier dato
        System.out.println("Este es el numero: " + numeroShort);
        System.out.println("Valor minimo de short: " + Short.MIN_VALUE); //-32768
        System.out.println("Valor maximo de short: " + Short.MAX_VALUE); //32767

        int numeroEntero = 15;
        System.out.println("Este es el numero entero: " + numeroEntero);
        System.out.println("Valor minimo de int: " + Integer.MIN_VALUE); //-2147483648
        System.out.println("Valor maximo de int: " + Integer.MAX_VALUE); //2147483647

        //si vemos el ejemplo de byte, de convertir el dato, poniendo entre parentesis el tipo(byte o short) funciona
        //pero en el tipo int esto no se puede entonces lo que se hace es entrar en los long, que se agrega una
        //L mayuscula principalmente al final del numero
        int numeroIntLong = (int)2147483648L; //aqui tambien aparece la perdidad de precision, que nos regresa al minimo
        System.out.println("Este es el numero entero: " + numeroIntLong);

        long numeroLong = 10;
        System.out.println("Este es el numero long: " + numeroLong);
        System.out.println("Valor minimo de long: " + Long.MIN_VALUE); //-9223372036854775808
        System.out.println("Valor maximo de long: " + Long.MAX_VALUE); //9223372036854775807
    }
}
