package operaciones;

public class PruebaAritmetica {
    public static void main(String[] args) {
    //Memoria stack
    //es la memoria donde se guardan las variables locales, que ocupamos
    //se eliminan cuando termina la clase
    //Memoria heap
    //Es para almacenar los objetos y las variables de la clase, a la hora de almacenar un objeto
    //se almacenan los atributos
    
    //el alcance de la variable es algo muy comun en todos los lenguajes de programacion
    //y esto es hasta donde puede llegar nuestra variable, obviamente hay locales y globales
    //local que va a morir al acabar una funcion, y global que termina cuando acaba el programa
    
        //variables locales
        //se almacenan en memoria stack
        int a = 10; 
        int b = 2;
        miMetodo();
        
        //System.gc(); no es recomendable usar el recolector de basura porque es un metodo muy pesado
        
        Aritmetica aritmetica1 = new Aritmetica(); //esto esta en memoria heap
        System.out.println("aritmetica1 a: " + aritmetica1.a);
        System.out.println("aritmetica1 b: " + aritmetica1.b);
        
        Aritmetica aritmetica2 = new Aritmetica(10, 30);
        System.out.println("aritmetica1 a: " + aritmetica2.a);
        System.out.println("aritmetica1 b: " + aritmetica2.b);
    }
    
    public static void miMetodo(){
        System.out.println("Otro metodo");
    }
}