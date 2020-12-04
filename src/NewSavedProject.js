import { Component } from 'react';

class NewSavedProject extends Component {
    render(){
        console.log(this.props)
        return(
            <div className="savedProject">
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default NewSavedProject;