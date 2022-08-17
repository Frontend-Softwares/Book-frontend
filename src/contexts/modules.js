import {createContext} from "react";
const ModuleContext = createContext();

const Module = ({children})=>{
    // validate : isEmail
    function isEmail(emailAdress){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAdress)) 
        return true; 
       else 
        return false; 
    };

    // return new on change handler
    const onChange = (setter)=>{
        return (e)=>{
            setter(e.target.value);
        };
    };
      
    const values = {isEmail , onChange};

    return <ModuleContext.Provider value={values}>
        {children}
    </ModuleContext.Provider>
};

export {ModuleContext};
export default Module;
