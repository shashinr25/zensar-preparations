import { createContext, useContext } from "react";

export const UserContext = createContext(null);

function UserProvider({children}) {
    return (
        <>
            <UserContext.Provider value={{name: 'Shashi'}}>
                {children}
            </UserContext.Provider>
        </>
    )
};

export function useUser() {
    const context = useContext(UserContext);

    if(!context) {
        throw new Error('Error in getting context')
    }

    return context;
}

export default UserProvider;