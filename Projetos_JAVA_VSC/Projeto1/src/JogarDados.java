import javax.swing.JOptionPane;
import java.util.Random;

public class JogarDados {
    public static void main(String[] args) {
        Random gerador = new Random();
       // int facesDado = Integer.parseInt(JOptionPane.showInputDialog(null, "Digite quantas fases tem um dado")) ;
       String facesString = JOptionPane.showInputDialog(null, "Digite quantas fases tem um dado");

       int facesDado = Integer.parseInt(facesString);

       int resultado = 1 + gerador.nextInt(facesDado);
       JOptionPane.showMessageDialog(null,"Voce tirou " + resultado + " no dado ");
        
        
        
        //double dado6Faces = 1 +  Ma th.random() * 2;

        //JOptionPane.showMessageDialog(null, dado6Faces);
       
        /*int nuemro = gerador.nextInt(6) + 1;
        JOptionPane.showMessageDialog(null,nuemro);*/
}
}
