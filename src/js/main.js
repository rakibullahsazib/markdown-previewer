
import React from 'react';
import ReactDOM from 'react-dom';

require('../css/main.scss');

import marked from 'marked';


let defaultText= "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears \n\nCreated By- \n\n *[Rakibullah Sazib](https://www.freecodecamp.org/rakibullahsazib)*";

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: defaultText  
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createMarkup = this.createMarkup.bind(this);
    }

    handleInputChange(e){
        this.setState({
            userInput: e.target.value   
        });
    }

    createMarkup (str) {
        let newMarkup = marked(str, {sanitize: true});
        return { __html: newMarkup };
    }

    render(){
        return(
            <div id ="container">
                <div id="input">
                    <div id="input-head">
                        Input
                    </div>
                    <textarea id="input-text" value={this.state.userInput} onChange={this.handleInputChange} type="text" >
                    </textarea>
                </div>
        
                <div id="output">
                    <div id="output-head">
                        Output
                    </div>
                    
                    <div id="output-text">
                        <span dangerouslySetInnerHTML={this.createMarkup(this.state.userInput)} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Input />,document.getElementById('jsx-container'));
