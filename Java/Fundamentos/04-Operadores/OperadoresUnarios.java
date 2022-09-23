public class OperadoresUnarios {
    public static void main(String[] args) {
        var a = 3;
        var b = -a;
        System.out.println("Variable a: " + a);
        System.out.println("Variable b: " + b);

        var c = true;
        var d = !c;
        System.out.println("Valor c: " + c);
        System.out.println("valor d: " + d);

        //incremento
        //1.-Preincremento(simbolo antes de la variable)
        var e = 3;
        var f = ++e; //primero se incrementa la variable y despues se usa su valor
        System.out.println("Valor e: " + e);
        System.out.println("Valor f: " + f);
        //2.-Postincremento(simbolo despues de la variable)
        var g = 5;
        var h = g++; //primero se utiliza el valor y despues se incrementa
        System.out.println("Valor de g: " + g);
        System.out.println("Valor de h: " + h);

        //Decremento
        //1.-Predecremento
        var i = 2;
        var j = --i;
        System.out.println("Valor de i: " + i);
        System.out.println("Valor de j: " + j);
        //2.-Postdecremento
        var k = 3;
        var l = k--; //primero se usa el valor de la variable y queda pendiente el decremento
        System.out.println("Valor de k: " + k);
        System.out.println("Valor de l: " + l);
    }
}
