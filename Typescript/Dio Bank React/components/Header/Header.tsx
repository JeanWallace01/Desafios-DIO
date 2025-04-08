import { color } from 'framer-motion'
import './Header.css'
import { 
  Text

} from '@chakra-ui/react'



export const Header = () => {
    return(
        <div className='header'>
            <Text fontSize={'4xl'} color={'white'} >
                Dio Bank 
            </Text>
        </div>

    )
}