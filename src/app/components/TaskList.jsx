import React from "react";
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {requestTaskCreation} from '../store/mutations';

export const TaskList = ({tasks, name, id, createNewTask})=>(
    <div>
        <h3>
            {name}
        </h3>
        <div>

            {tasks.map(task=>(
                <Link to={`/task/${task.id}`} key={task.id}>
                    <div>{task.name}</div>
                </Link>
                ))}
        </div>
        <button onClick={()=>createNewTask(id)}>Add new</button>
    </div>
)

const mapStateToProps = (state, ownProps)=>{
    return {
        name: ownProps.name,
        id: ownProps.id,
        tasks: state.tasks.filter(task=>task.group === ownProps.id)
    }
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        createNewTask(id){
            console.log("Creating new task", id);
        }
    }
}

export const ConnectedTaskList = connect (mapStateToProps, mapDispatchToProps) (TaskList);
