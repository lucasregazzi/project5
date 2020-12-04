import firebase from './firebase.js';
import { Component, Fragment } from 'react';
import SavedProjects from './SavedProjects.js';
import NewSavedProject from './NewSavedProject.js';

class Submission extends Component {

    constructor(){
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (data) => {
            const firebaseDataObj = data.val();
            let projectsArray = [];
            for (let prop in firebaseDataObj) {
                const propValues = firebaseDataObj[prop];
                projectsArray.push(propValues);
            }
            this.setState({
                projects: projectsArray
            })
        });
    }

    handleAdd = () => {
        const dbRef = firebase.database().ref();
        dbRef.push(this.state);
    }

    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <Fragment>
                    <SavedProjects>
                        {this.state.projects.map((project) => {
                        return(
                            <NewSavedProject title={project.projectTitle} description={project.projectDescription}/>
                        )}
                    )}
                    </SavedProjects>
            <div className="submissionForm" id="submissionForm">
                <div className="projectTitle">
                    <h2><div className="projectTitleInputNew"><input className="addProject" defaultValue="Project Title" placeholder="Project Title" id="projectTitle" onChange={this.handleInput}></input></div></h2>
                </div>
                <form action="#savedProjects" onChange={this.handleInput}>
                    <div className="projectDescription">
                        <div className="node">
                            <label htmlFor="projectDescription"><h2>Write a Brief Description</h2></label>
                            <textarea id="projectDescription" name="projectDescription"/>
                        </div>
                    </div>
                    <div className="workingBibliography">
                        <div className="node">
                            <label htmlFor="workingBibliography"><h2>Working Bibliography</h2></label>
                            <textarea id="workingBibliography" name="workingBibliography"/>
                        </div>
                    </div>
                    <div className="selectedArtists">
                        <div className="node">
                            <label htmlFor="selectedArtists"><h2>Selected Artists</h2></label>
                            <input type="text" id="selectedArtists" name="selectedArtists"/>
                            <input type="text" id="selectedArtists1" name="selectedArtists"/>
                            <input type="text" id="selectedArtists2" name="selectedArtists"/>
                            <input type="text" id="selectedArtists3" name="selectedArtists"/>
                            <input type="text" id="selectedArtists4" name="selectedArtists" />
                        </div>
                    </div>
                    <div className="thematicTags">
                        <div className="node">
                            <label htmlFor="thematicTags"><h2>Thematic Tags</h2></label>
                            <input type="text" id="thematicTags" defaultValue="#"/>
                            <input type="text" id="thematicTags1" defaultValue="#"/>
                            <input type="text" id="thematicTags2" defaultValue="#"/>
                            <input type="text" id="thematicTags3" defaultValue="#"/>
                            <input type="text" id="thematicTags4" defaultValue="#" />
                        </div>
                    </div>
                    <div className="submissionFormSubmit">
                        <a href="#savedProjects"><button type="submit" onClick={this.handleAdd} href="#savedProjects">Submit</button></a>
                    </div>
                </form>
            </div>
            </Fragment>
        )
    }
}

export default Submission;