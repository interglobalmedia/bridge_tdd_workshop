import React, {Component} from 'react';
import Button from '../button';
import TextInput from '../text_input';

export default class App extends Component {
    state = {
        userInput: '',
        showValue: ''
    }
    handleInputChange = (e) => {
        this.setState({
            userInput: e.target.value
        });
    }
    handleInputClick = (e) => {
        let inputValue = this.state.userInput;
        this.setState({
            showValue: inputValue,
            userInput: ''
        })
    }
    render() {
        const titleStyle = {
            fontweight: 'lighter'
        }
        const style1 = {
            color: 'black',
            fontSize: '16px'
        }
        const style2 = {
            color: 'red',
            fontSize: '16px'
        }
        const appStyle = {
            margin: '60px auto',
            textAlign: 'center',
            fontFamily: 'Inconsolata, monospace',
            fontSize: '16px'
        }
        const paragraphStyle = {
            color: 'dodgerblue'
        }
        const inputStyle = this.state.userInput.length > 10 ? style2 : style1;
        return (
            <div style={appStyle}>
                <h1 style={titleStyle}>Render a paragraph!</h1>
                <TextInput style={inputStyle} changed={this.handleInputChange} type='text' placeholder='type text here' value={this.state.userInput}/>
                <p style={paragraphStyle}>{this.state.showValue}</p>
                <Button clicked={(e) => this.handleInputClick(e)} text='click me' />
            </div>
        )
    }
}
