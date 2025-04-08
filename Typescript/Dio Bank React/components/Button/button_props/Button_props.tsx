import React from "react"
import {Button} from '@chakra-ui/react'

interface ModeButton {
    text: string
    onClick: React.MouseEventHandler<HTMLButtonElement>; 
}

export const Button_props = ({text,onClick}:ModeButton ) => {

    return(

        <Button marginTop={'10px'} colorScheme="blue" size={'sm'} width={'20%'} onClick={onClick}>
            {text}
        </Button>

    )

}