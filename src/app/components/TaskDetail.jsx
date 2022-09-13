import React from "react";
import { connect} from "react-redux";
import {Link} from 'react-router-dom'
import * as muatations from '../store/mutations'


const TaskDetail = ({
    id,
    comments,
    task,
    groups,
    isComplete,
    setTaskCompletion
})=>(
    <div>
        <div>
            <input value={task.name}/>
        </div>
        <div>
            <button onClick={()=> setTaskCompletion(id, !isComplete)}>{isComplete ? `Reopen` : `Complete` }</button>
        </div>
        <div>
            <select>
                {groups.map(group=>(
                    <option key={group.id} value={group.id}>{group.name}</option>
                ))}
            </select>
        </div>
        <div>
            <Link to="/dashboard">
                <button>Done</button>
            </Link>
        </div>
    </div>
);

const mapStateToProps = (state, ownProps)=>{
    let id = ownProps.match.params.id;
    let task = state.tasks.find(task=>task.id === id);
    let groups = state.groups;
    let comments = 'aa';
    return {
        id,
        task,
        groups,
        isComplete: task.isComplete
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    const id = ownProps.match.params.id;
    return {
       setTaskCompletion(id,isComplete) {
           dispatch(muatations.setTaskCompletion(id, isComplete));
       }
    }
}

export const ConnectTaskDetail = connect(mapStateToProps ,mapDispatchToProps) (TaskDetail);