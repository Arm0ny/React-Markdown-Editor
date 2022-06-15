import React, {Component} from 'react';
import './Editor.css';
import Preview from "../preview/Preview";
import DOMPurify from "dompurify";
import {marked} from "marked";

class Editor extends Component{
    constructor(props){
        super(props)

        this.state = {
            input: 'This is your preview'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            input: DOMPurify.sanitize(marked(event.target.value))
        })
    }

    render(){
        return(
            <div className='wrapper'>
                <div className='editor-div'>
                <h1>Editor</h1>
                <textarea onChange={this.handleChange}/>
                </div>
                <Preview text={this.state.input}/>
            </div>
        );
    }
}
export default Editor