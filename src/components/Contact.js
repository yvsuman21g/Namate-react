import { useEffect } from "react";
const Contact = () =>{
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Namste React OP Contact Us")
        }, 1000);
        return(()=>{
            clearInterval(timer);
        })
    }
        
    ,[])
    return(
        <div>
            <h1>Hello, I'm a Contact Us Page</h1>
        </div>
    )
}
export default Contact;