
import { createContext } from "react";


export const ThemeContext = createContext(null);

 



const Theme = ({ children }) => {

    
  

   
    return (
        <ThemeContext.Provider value={{}} >
            {children}
        </ThemeContext.Provider>
    )
}

export default Theme




