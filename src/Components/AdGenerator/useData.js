// import { createContext, useContext, useState } from "react";

// // Create the context
// const dataContext = createContext();

// // Custom hook to use the context
// export function useData() {
//     return useContext(dataContext);
// }

// // Context provider component
// export function DataContextProvider({ children }) {
//     const [data, setData] = useState(null); // Initialize state here

//     return (
//         <dataContext.Provider value={{ data, setData }}>
//             {children}
//         </dataContext.Provider>
//     );
// }
