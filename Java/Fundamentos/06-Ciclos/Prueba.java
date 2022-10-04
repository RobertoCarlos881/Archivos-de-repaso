public class Prueba {
    public static void main(String[] args) {
        String simbolo = "*";
        System.out.println(simbolo);
        for(int i = 0; i <= 10; i++) {
            simbolo += "\s *";
            System.out.println(simbolo);
        }
        System.out.println("\n \n");
        for(int i = 0; i <= 10; i++) {
            System.out.println(simbolo);
        }
        System.out.println("\n \n");
        for(int i = 0; i <= 5; i++) {
            System.out.println(simbolo.replaceAll("\s", ""));
        }

        for (int i = 0; i<=6; i++) {
			//espacio
			for (int j =1; j<=6-i; j++) {
				System.out.print(" ");
			}
			 //símbolos
			for (int k = 1; k<=2*i-1; k++) {
				System.out.print("*");
			}
			System.out.println();
		}
    }
}
