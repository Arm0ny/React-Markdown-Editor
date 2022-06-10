import React from 'react';
import {Component} from 'react'
import './App.css';
import {Preview, Editor} from "./components";

class App extends Component {
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div className='App'>
                <Editor/>
            </div>
        )
    }

}
export default App;
