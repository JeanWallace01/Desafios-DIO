import React from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
/* 

- Criando layout
- o contrúdo do site as informações será o children que irá acionar

OBSERVAÇÃO:

- Que no caso caso eu só estou chamando o Componente Layout
pois a primeira tag teria o valor do header e a de fechameneto de footer 
e o children com o conteúdo no App.tsx ? 

- Então o props drilling ele repasse as informações de forma hierarquica como no HTML

*/
export const Layout = ( {children}: any ) => {

    return(

      <React.Fragment>  
        <Header/>

        {children}

        <Footer />
    </React.Fragment> 

    )

}