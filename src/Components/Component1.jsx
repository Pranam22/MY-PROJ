import { Component } from "react";

class Component1 extends Component{

    constructor(props)
    {
        super(props)

        this.state={
            first:0,
            second:100
        }
    }
    
    render()
    {
        function handleFirst()
        {
        this.setState({first:this.state.first+1})
        }
        return(
            <div>
                <h1>{this.state.first}</h1>
                <h1>{this.state.second}</h1>
                <button onClick={()=>(this.setState({first:this.state.first+1}))}>AddFirst</button>
            </div>
        )
    }
    
   
}
export default Component1;