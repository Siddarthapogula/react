import React from "react";
import  ReactDOM  from "react-dom/client";



const Heading1 = ()=>{
    return(
        <div>
        <   h1>this is heading no 1 🚀</h1>
        </div>
       
    )
}

const headElement = (
        <div>
            <Heading1/>
            <h1>this is heading in element 🚀🚩</h1>
        </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headElement);