import { useEffect } from "react";

const AboutFunc = ()=>{
     useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("fcuk");
        },1000)

       return()=>{
         clearInterval(timer)
       }
    },[])
    return(
        <h1>this is about us</h1>
    )
}
export default AboutFunc;