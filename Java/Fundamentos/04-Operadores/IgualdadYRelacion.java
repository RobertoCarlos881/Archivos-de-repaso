public class IgualdadYRelacion {
    public static void main(String[] args) {
        var a = 3;
        var b = 2;
        var c = (a == b);
        System.out.println("Este es c: " + c);

        var d = (a != b);
        System.out.println("Este es d: " + d);

        var cadena = "Hola";
        var cadena2 = "ados";
        var e = (cadena == cadena2); //aqui se compara la refencia de objetos
        System.out.println("Este es e: " + e);

        var f = cadena.equals(cadena2); //comparamos contenido de cadenas
        System.out.println("Este es f: " + f);

        var g = a >= b; //mayor que > o el mayor o igual >=
        System.out.println("Este es g: " + g);

        if (a % 2 == 0) {
            System.out.println("Este es par");
        } else {
            System.out.println("Este es impar");
        }

        var edad = 30;
        var adulto = 18;
        if (edad >= adulto) {
            System.out.println("Es un adulto");
        } else {
            System.out.println("Es menor de edad");
        }
    }
}
