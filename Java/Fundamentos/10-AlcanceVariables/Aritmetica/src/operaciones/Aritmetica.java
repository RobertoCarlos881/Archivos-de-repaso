package operaciones;

public class Aritmetica {
    //Atributos de nuestra clase
    int a, b;
    
    //Constructor vacio
    public Aritmetica() {
        System.out.println("Soy el constructor");
    }
    
    public Aritmetica(int arg1, int arg2) {
        this.a = arg1;
        this.b = arg2;
        System.out.println("Soy el segundo constructor");
    }
    
    //Metodos de nuestra clase
    public void sumar() {
        int resultado = a + b;
        System.out.println("Resultado: " + resultado);
    }
    
    public int sumarConRetorno() {
        return a + b;
    }
    
    public int sumarConArgumentos(int arg1, int arg2) {
        this.a = arg1;
        this.b = arg2;
        return this.sumarConRetorno();
    }
}