public class Swtich {
    public static void main(String[] args) {
        var numero = 5;
        var numeroTexto = "Valor desconocido";

        switch (numero) {
            case 1:
                numeroTexto = "Numero uno";
                break;
            
            case 2:
                numeroTexto = "Numero dos";
                break;

            case 3:
                numeroTexto = "Numero tres";
                break;
            
            case 4:
                numeroTexto = "Numero cuatro";
                break;

            default:
                numeroTexto = "Valor desconocido";
                break;
        }
        System.out.println(numeroTexto);

        var mes = 1;
        var estacion = "Estacion desconocida";
        switch (mes) {
            case 1, 2, 12:
                estacion = "Invierno";
                break;
            
            case 3, 4, 5:
                estacion = "Primavera";
                break;

            case 6, 7, 8:
                estacion = "Verano";
                break;

            case 9, 10, 11:
                estacion = "Otonio";
                break;

            default:
                estacion = "Estacion desconocida";
                break;
        }
        System.out.println("En la estacion que estamos es: " + estacion);
    }
}
