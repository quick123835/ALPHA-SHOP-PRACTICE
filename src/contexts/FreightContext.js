import{ useState , useContext , createContext } from 'react'

export const FreightContext = createContext()

export const FreightProvider = ({children}) => {
    const [freight , setFreight] = useState(0)
    const value = {
        freight,
        setFreight
    }

    return(
        <FreightContext.Provider value={value}>
            {children}
        </FreightContext.Provider>
    )
}

export const useFreightContext = () => {
    const use = useContext(FreightContext)
    return use
}