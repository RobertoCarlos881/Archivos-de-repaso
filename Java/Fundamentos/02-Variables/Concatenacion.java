public class Concatenacion {
    public static void main(String[] args) {
        var usuario = "Roberto";
        var titulo = "Ingeniero";
        var union = titulo + " " + usuario;
        System.out.println(union);

        var numero1 = 3;
        var numero2 = 6;
        System.out.println(numero1 + numero2); //suma de numeros
        System.out.println(numero1 + numero2 + usuario); //evaluacion de izq a der, realiza suma
        System.out.println(usuario + numero1 + numero2); //contexto cadena, todo es una cadena
        System.out.println(usuario + (numero1 + numero2)); //uso de parentesis, modifica la prioridad
    }
}
