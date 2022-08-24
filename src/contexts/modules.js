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

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    
      
    const values = {isEmail , onChange , isInViewport};

    return <ModuleContext.Provider value={values}>
        {children}
    </ModuleContext.Provider>
};

export {ModuleContext};
export default Module;
