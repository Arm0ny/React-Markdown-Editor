import React, {Component} from 'react';
import './Preview.css';


class Preview extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='preview-div'>
                <h1>Preview</h1>
                <div id='content'
                     dangerouslySetInnerHTML={{__html: this.props.text}}></div>

            </div>
        );
    }
}
export default Preview