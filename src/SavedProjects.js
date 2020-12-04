import { Component } from 'react';

class SavedProjects extends Component {

    render(){
        return (
            <div className="savedProjects" id="savedProjects">
                <header className="clearfix">
                    <h2>Saved curatorial projects</h2>
                </header>
                <div className="projects clearfix">
                    <a href="#submissionForm"> 
                        <div className="createProject">
                            <p><span className="projectTrigger">+</span> Create a new project</p>
                        </div>
                    </a>
                {this.props.children} 
                </div>
            </div>
        )
    }
}

export default SavedProjects;