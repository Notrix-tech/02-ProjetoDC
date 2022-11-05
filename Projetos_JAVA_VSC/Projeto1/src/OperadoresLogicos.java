public class OperadoresLogicos {
    public static void main(String[] args) {
        /*
         * && e AND (e)
         * || ou  (OU)
         * ! negação (NAO)
         */
        //CREDENCIAIS PARA ENTRAR NO PROJETO
        String string = " academia dev";
        String usuario = string;
        String senha = "123456";
        final String usuarioDigitado = string;
        String senhaDigitada = "123456";

        boolean loginCorreto = usuarioDigitado == usuario && senhaDigitada == senha;
        System.out.println(loginCorreto);
    }
}
