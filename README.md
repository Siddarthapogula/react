# Namaste-React-Daily
# namaste React

## Episode 2

# parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement => it will automatically reloads
- File watching - Using File watcher Algorithm -> which is written in c++
- Image Optimization
- Minification
- compression
- Consistent Hashing
- Code splittind
- Differential Bundling -> support older browsers.
- Bundling
- Diagnostic 
- A good Error Handling 
- Tree shaking -> A algorithm which removes the unwanted code for you.. which make your code compressed.. and efficent.
- https -> it provides --https loading

## !!! Yeah parcel is such a "BEAST" right.!!!


## Yup!! Episode 3

- learnt about component. Types of components. 
- Class based component - which we do not use usually in nowadays so, we use function base components. which are quite easier to implement.
- learnt component composition. ususlly which is hair picking topic for most of the react developers

- learnt about what are elements in react how to create and to use. 

- yeah that is all!

- and one more thing learnt how to add script in configuration which is json file(A file which keep the tract of development).

# babel!!!

- Babel is Unsung Hero !!

- this is the thing which transpiles the jsx into our react.create element => object => domElements

- the flow is when we create a react element right, by using of Babel parcel transpiles the JSX in to the reactcreate element 

- at the end of the day react.createelement is and object right . and next further steps will be handled by reconciliation

- JSX is neither html nor a html in react/javascript, it is html "like" code that is it

## see you repo


## Episode 4

# code : 

- talk is cheap! show me the code :)


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


# started building a foodOrdering app

