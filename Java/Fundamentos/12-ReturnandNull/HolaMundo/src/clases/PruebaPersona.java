package clases;

public class PruebaPersona {
    public static void main(String[] args) {
        Persona persona1; //se declara una variable del tipo persona llamado persona1
        persona1 = new Persona(); //Persona es la llamada al constructor
        persona1.nombre = "Roberto Carlos";
        persona1.apellido = "Cortes Ramirez";
        persona1.desplegarInformacion();
        
        Persona persona2;
        persona2 = new Persona();
        persona2.nombre = "";
        persona2.apellido = "";
        persona2.desplegarInformacion();
        persona2.nombre = "Jose Praxedes";
        persona2.apellido = "Dominguez Acosta";
        persona2.desplegarInformacion();
    }
}
