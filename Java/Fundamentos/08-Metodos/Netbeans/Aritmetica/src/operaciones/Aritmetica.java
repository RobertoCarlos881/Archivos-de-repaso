package operaciones;

public class Aritmetica {
    //Atributos de nuestra clase
    int a, b;
    
    //Metodos de nuestra clase
    public void sumar() {
        int resultado = a + b;
        System.out.println("Resultado: " + resultado);
    }
    
    public int sumarConRetorno() {
        return a + b;
    }
    
    public int sumarConArgumentos(int arg1, int arg2) {
        //this es una palabra reservada y sirve para apuntar a la variable que se esta ejecutando en ese momento
        //this se ocupa mas cuando declaramos argumentos y no queremos cambiar el nombre
        //por ejemplo podemos hacer this.a = a;
        this.a = arg1;
        this.b = arg2;
        return this.sumarConRetorno();
    }
}
