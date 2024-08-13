import { useEffect, useState } from "react";

const useOnlinestatus = () =>{

    const [onlinestatus, setOnlinestatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("Offline", ()=>{
            setOnlinestatus(false);
        })

        window.addEventListener("online", ()=>{
            setOnlinestatus(true);
        })
    },[])

    return onlinestatus;
}
export default useOnlinestatus;