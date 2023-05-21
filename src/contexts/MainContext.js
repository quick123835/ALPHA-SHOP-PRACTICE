import{ useState , createContext , useContext , useRef } from 'react'

export const MainContext = createContext()

export const MainProvider = ({children}) => {
    const mainRef = useRef({
        name:'',
        creditNum:'',
        timeBar:'',
        cvc:'',
        total:0
    })

    return(
        <MainContext.Provider value={mainRef}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => {
    const info = useContext(MainContext)
    return info
}

