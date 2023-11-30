import React from "react";
import  ReactDOM  from "react-dom";
import Layout from "./Layout";

const heading = React.createElement("h1", {}, [
    "this is heading",
    <Layout/>
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);