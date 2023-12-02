import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {

    const repo = 12;
  useEffect(() => {
    getRestaurants();
  },[]);
  const [text, setText] = useState("fuck");

  const getRestaurants = async () => {

      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const data = await response.json();
      console.log(data);
  };

return (
    <div>
         <h1>hey</h1>
         <button onClick={()=>{
            text==="fuck"?setText("fuckOff"):setText("fuck")
         }}>
            {text}
        </button>
    </div>
   
)
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />)