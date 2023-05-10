import { useEffect, useState } from 'react'

const PERFIX = 'react-codepen'

export default function useLocalStorage( key, intialValue) 
{
    const perfixKey = PERFIX + '-' + key
    const [ value, setValue] = useState( () => setValueFromLocalStorage( perfixKey, intialValue ) )
    
    useEffect(() => {
        localStorage.setItem( perfixKey, JSON.stringify( value ))
        
    }, [perfixKey, value])

    
    return [ value, setValue ]
}

function setValueFromLocalStorage( key, initialValue ) 
{
    const jsonValue = localStorage.getItem( key )

    if( jsonValue )
    {
        return JSON.parse( jsonValue )
    }

    return initialValue
}
