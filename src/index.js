import React from "react";
import ReactDOM from "react-dom";
import  TextField from "@mui/material/TextField";
import Button  from "@mui/material/Button";
function App() {
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('0');
    function onChange(e){
        setName(e.target.value);
    } 
    function onAgeChange(e){
        setAge(e.target.value);
    }
    return (
        <div>
            <h1>Hello World!</h1>
            <h1>{ name } - { age }</h1>
            <TextField 
                value={name}
                variant="filled"
                onChange={onChange} 
                placeholder="Enter Name"/>
            <input onChange={onAgeChange} placeholder="Enter Age" />
            <Button variant="contained">Submit</Button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name:''
//         }
//         this.onChange = this.onChange.bind(this);
//     }
//     onChange(event){
//         this.setState({name: event.target.value});
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Hello World!</h1> 
//                 <h1>{this.state.name}</h1>
//                 <input onChange={this.onChange} placeholder="Enter Name" />
//             </div>
            

//         )
//     }
// }
// ReactDOM.render(<App />, document.getElementById("root"));


// import React from 'react';

// class App extends React.Component {
//     render() {
//         return (
//             <button>Hi</button>
//         )
//     }
// }