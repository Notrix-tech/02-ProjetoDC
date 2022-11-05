public class App {
    public static void main(String[] args) throws Exception {
        String nomeCompleto; // estou Declarando a variavel %
        nomeCompleto = "Clairton de Oliveira Dev"; // estou Inicializando a variavel
        int anoNascimento = 1980; // %d
        int idade = 42;
        float altura = 1.70f;// %f
        double peso = 88.90;
        boolean dev = true;//%b
        System.err.println(nomeCompleto);// estou usando a variavel

        // essa impressão e chamado de concatenação com apenas um + se for ++ o java vai somar
        System.out.println("O nome é " + nomeCompleto + " o seu ano de nascimento é " + anoNascimento + " com \n " + idade + " anos e " + altura + " com " + peso + " e sua profissão é  Dev");
       
        String texto = "O nome é " + nomeCompleto + " o seu ano de nascimento é " + anoNascimento + " com  " + idade + " anos e " + altura + " com " + peso + " e sua profissão é  Dev";
        System.err.println(texto);

        String texto2 = String.format(null, " Clairton Desenvolvedor Java", args);
        System.out.println(texto2);

    }
}
// \n ---->quebra de linha em java