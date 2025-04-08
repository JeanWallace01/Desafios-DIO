/*

- Todo arquivo que trabalha com typescript + HTKL precisa ser TSX

- Todas as tag possuem tags de fechamento

- Componentes faz a praticidade de repetuição de códigos 

- Elementos irmãos não pode se duplicar no REACT, nesse caso eu uso REACT FRAGMENT OU <>

- PROPS DRILLING = Tendo a possibilidades de passar propriedades de um local para o outro

- Sempre preciso definir quando for nomear alguma coisa com o {}

*/

// import { Header } from "./components/Header/Header";
// import { Button_props } from "./components/Button/Button_props";
// import { login } from "./services/login";
// import { Button_mocking } from "./components/Button/Button_mocking";

import { Header } from '../Header/Header'
import { Button_props } from '../Button/button_props/Button_props'
import { login } from '../../services/login'
import { Button_mocking } from '../Button/button_mocking/Button_mocking'
import { Button_welcome } from '../Button/button_welcome/Button_welcome_dio'

import { 
  ChakraProvider,
  Input,
  Button,
  Box,
  Center,
  
} from '@chakra-ui/react'




//Estou criando um componente card, fazendo retornar o card 
export const Card = () => {
    return(

        <ChakraProvider>

            <Header></Header>

        <Box minHeight='100vh' backgroundColor='#9413dc' padding={'25px'}>  
                    <Box backgroundColor={'#FFFFFF'} borderRadius={'25px'} padding={'30px'}>   
                      
                      <Center marginBottom={'6px'}>
                        <h1>Faça o login</h1>
                      </Center>
        
                      <Input placeholder="email" marginBottom={'20px'}/>
                      <Input placeholder="password" />
                

                      <Center>  
                        <Button_props  onClick={Button_mocking} text="Login"></Button_props>
                      </Center>  


                      {/* <Center>
                        <Button  onClick={login} colorScheme='green' marginTop={'10px'} width={'20%'} size={'sm'}>Registrar</Button>
                      </Center> */}

                      <Center>
                        <Button marginTop={'10px'} width={'20%'} size={'sm'}  onClick={Button_welcome}>Conheça o dio Bank</Button>
                      </Center>
        
                      
                      
                      
        
                      
                    </Box>     
                </Box>    

        </ChakraProvider>


    )
    

}