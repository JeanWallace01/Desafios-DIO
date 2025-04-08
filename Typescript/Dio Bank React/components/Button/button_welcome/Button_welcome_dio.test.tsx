//Importando o arquivo 
import { Button_welcome } from "./Button_welcome_dio"

describe(Button_welcome,() => {

//Mock
const Mockalert = jest.fn()
window.alert = Mockalert

//Comentários da mockagem
it("Após o clique será aberto um pop-up de boas-vindas", () => {
    
    //Executando a função
    Button_welcome()

    //O que eu espero
    expect(Mockalert).toBeCalledWith("Seja bem vindo")
})


}) 