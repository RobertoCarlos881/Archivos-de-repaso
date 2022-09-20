public class Variables {
    public static void main(String[] args) {
        int miVariableEntera = 10; //mi variable entera
        System.out.println(miVariableEntera); //manda a imprimir la variable

        miVariableEntera = 25; //modificacion de una variable
        System.out.println(miVariableEntera); //sout para no escribir todo

        String miVariableCadena = "Hola"; //tipo string o cadena
        System.out.println(miVariableCadena);
        
        miVariableCadena = "Adios";
        System.out.println(miVariableCadena);

        //La palabra reservada var - hace inferencia de tipos en java
        var miVariableEntera2 = 20;
        System.out.println(miVariableEntera2);

        var miVariableCadena2 = "Ayudaaa";
        System.out.println(miVariableCadena2);

        //Valores permitidos para los nombres de las variables
        var miVariable = 1;
        var _miVariable = 2;
        var $miVariable = 3;
        //no se recomienda utilizar caracteres especiales o con acento
    }
}
