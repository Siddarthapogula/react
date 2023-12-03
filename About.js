import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.timer =  setInterval(()=>{
            console.log("fcuk");
        },1000);
    }
    componentDidUpdate (){
        
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log(this.props.name + "unmounted");
    }
    render(){
        return(
            <div>
                <h1>Name = {this.props.name}</h1>
            </div>
        )
    }
}

export default About;