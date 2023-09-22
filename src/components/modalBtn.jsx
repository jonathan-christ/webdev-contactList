import React,{Component} from "react"

class ModalButton extends Component{
    constructor(){
        super();
        this.state = {
            target: "#modal",
            label: "Open Modal"
        }

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        this.setState({
            target: this.props.target,
            label: this.props.label
        })
    }
// check how to plug in state values
    render(){
        return (
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#"+this.state.target}>
                    {this.state.label}
                </button>
        );
    }
}

export default ModalButton