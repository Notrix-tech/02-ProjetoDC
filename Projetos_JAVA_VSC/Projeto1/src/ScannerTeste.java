import java.io.InputStream;

import java.util.Scanner;
public class ScannerTeste {
    public static void main(String[] args) {
        float numero;
        Scanner leitor = new Scanner(System.in);
        System.out.println("digite um numero");
        numero = leitor.nextFloat();
    
        System.out.println( "numero é " + numero);
    }
    
    
}
