import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import './Sidebar.css';

export default function Sidebar() {


    return (
        <div id='sidebar-div'>
            <h1>PlanPilot</h1>
            <div className="input-div">
                <h2>Insert here</h2>
                <input placeholder="Enter task..."></input>
                <select>
                    <option>Select priority...</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <button>Add</button>
            </div>
            <a href="https://github.com/ZadniproIon/plan-pilot-task-tracker" target="_blank"><FontAwesomeIcon icon={faGithub} />Press to go to GitHub page</a>
        </div>
    );
}