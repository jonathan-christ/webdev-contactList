import React,{Component} from "react"

class Modal extends Component{
    constructor(){
        super();
        this.state={
            id: "0",
            title: "Modal Title",
            body: "Bitch",
            save: "Save changes"
        }

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            body: this.props.innerHTML,
            save: this.props.save
        })
    }

    render(){
        return(
            <div id={this.state.id} className="modal fade" tabIndex={"-1"} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.state.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {this.state.body}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">{this.state.save}</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;