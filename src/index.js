import React from "react";
import ReactDOM from "react-dom";
// import { App } from "./App";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name:''
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(event){
        this.setState({name: event.target.value});
    }
    render() {
        return (
            <div>
                <h1>Hello World!</h1> 
                <h1>{this.state.name}</h1>
                <input onChange={this.onChange} placeholder="Enter Name" />
            </div>
            

        )
    }
}
// const app = document.getElementById("root");
ReactDOM.render(<App />, document.getElementById("root"));


// import React from 'react';

// class App extends React.Component {
//     render() {
//         return (
//             <button>Hi</button>
//         )
//     }
// }