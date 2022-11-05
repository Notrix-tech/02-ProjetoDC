

public class CondicoesFrutas {
    public static void main(String[] args) {
        
        String corFruta = "verde";

        if(corFruta == "vermelho"){
            System.out.println("Está madura");
        } else if (corFruta == "Amarelo"){
            System.out.println("Está quase madura");
        } else if (corFruta == "verde"){
            System.out.println("Não estar boa para comer");
        } else {
            System.out.println("Fruta esta podre");
        }
    }
}
