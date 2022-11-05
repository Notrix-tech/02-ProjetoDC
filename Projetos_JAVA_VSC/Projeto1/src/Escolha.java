import javax.swing.JOptionPane;

public class Escolha {
    public static void main(String[] args) {
        
        String [] opcoes = new String[] {
            "Filme 1",
            "Filme 2",
            "Filme 3",
            "Filme 4",
            "Filme 5",
            "Sair"
        };
    int opcaoEscolhida = 0;
    while (opcaoEscolhida != 5) {
        opcaoEscolhida = JOptionPane.showOptionDialog(
            null,
             " Qual filme quer escolher para assitir hoje", 
              null,
             JOptionPane.DEFAULT_OPTION, 
             JOptionPane.QUESTION_MESSAGE, 
             null,
              opcoes, 
              0);
              //System.out.println("Opção Escolhida " + opcaoEscolhida);
              if (opcaoEscolhida !=5) {
                String mensagem =" Voce assistiu " + opcoes[opcaoEscolhida];
                JOptionPane.showMessageDialog(null, mensagem);
                
              }
        
    }

    }
}
