import React from "react";
import ReactDOM from "react-dom/client";

const element1 = ( 
    <h1>this is element1</h1>
);
const element2 = ( 
    <h1>this is element2</h1>
);
const element3 = ( 
    <h1>this is element3</h1>
);
const element4 = ( 
    <h1>this is element4</h1>
);

const elementArray = [element1, element2, element3, element4];

const ExecuteElement = function (props){
    console.log(props.content);
}

const ElementPass = ()=>{
    return(
        <>
           { elementArray.map((element)=>{
                <ExecuteElement content= {element.props.children}/>
            })}
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< ElementPass />);

