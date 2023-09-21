import React,{Component} from "react"

class ModalButton extends Component{
    constructor(){
        super();
        this.state = {
            target: "#modal",
            label: "Open Modal"
        }
    }
// check how to plug in state values
    render(){
        return (
                <button type="button" data-toggle="modal" data-target={this.target}>
                    <p>{this.label}</p>
                </button>
        );
    }
}

export default ModalButton