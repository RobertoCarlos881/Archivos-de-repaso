public class Caracter {
    public static void main(String[] args) {
        //hay varios tipos de caracteres, si los descononces puedes buscar list unicode en google
        char miCaracter = 'a'; //la diferencia entre un char y short, es que char puede almacenar numeros flotantes
        System.out.println("miCaracter: " + miCaracter);

        char varChar = '\u0021';
        System.out.println("varchar: " + varChar);

        char varCharDecimal = 33;
        System.out.println("VarCharDecimal: " + varCharDecimal);

        char varCharSimbolo = '!';
        System.out.println("varCharSimobolo: " + varCharSimbolo);

        var varChar1 = '\u0021';
        System.out.println("varchar1: " + varChar1);
        var varCharDecimal1 = (char)33; //en este caso si estamos ocupando numeros con char
        //pero usamos var, nos lo va a tomar como int, entonces hay que convertir el dato
        System.out.println("VarCharDecimal1: " + varCharDecimal1);
        var varCharSimbolo1 = '!';
        System.out.println("varCharSimobolo1: " + varCharSimbolo1);

        //que pasa si definimos una variable entera y le pasamos un dato char
        //no nos marcara error pero en lo que salga de la pantalla sera el numero en la lista unicode
        int variableEnteraSimbolo = '!';
        System.out.println("variableEnteraSimbolo: " + variableEnteraSimbolo);
        int letra = 'A';
        System.out.println("letra: " + letra);
    }
}
