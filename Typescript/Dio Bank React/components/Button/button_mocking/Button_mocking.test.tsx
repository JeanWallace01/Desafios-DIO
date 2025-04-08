import { Button_mocking } from "./Button_mocking";


describe(Button_mocking,() => {

    //Mock
    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Botão será clicado e irá aparecer o pop up', () => {

        Button_mocking()
        expect(mockAlert).toBeCalledWith("Faça seu login !")

    })

})