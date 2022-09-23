public class Asignacion {
    public static void main(String[] args) {
        int a = 3, b = 2;
        int c = a + 5 - b;
        System.out.println("Operacion: " + c);

        a+=1;
        System.out.println("a+= " + a);
        a+=3;
        System.out.println("a+= " + a);

        a-=2;
        System.out.println("a-= " + a);

        a*=5;
        System.out.println("a*= " + a);

        a/=2;
        System.out.println("a/= " + a);

        a%=2;
        System.out.println("a%= " + a);
    }
}
