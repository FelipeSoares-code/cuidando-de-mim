import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [linkDoctoralia, setLinkDoctoralia] = useState("https://www.doctoralia.com.br/rita-soares/psicologo/sao-bernardo-do-campo")

    const [pathPadrao, setPathPadrao] = useState("/cuidando-de-mim/")

    return (
        <AppContext.Provider 
          value={{
            linkDoctoralia, setLinkDoctoralia, 
            pathPadrao, setPathPadrao
          }}
        >
        {children}
        </AppContext.Provider>
    );
}

export function useApp() {
  return useContext(AppContext);
}