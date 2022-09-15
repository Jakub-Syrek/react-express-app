import React from "react";
import { connect } from 'react-redux';
import { ConnectedTaskList } from "./TaskList";
import {Link} from "react-router-dom";

export const Dashboard = ({groups}) => (
    <div style={{backgroundColor: 'lightblue'}}>
        <h2 >Dashboard </h2>
        {groups.map(group=>(
            <ConnectedTaskList key={group.id} id={group.id} name={group.name} />
        ))}
        <h3>
            <Link to="/"> Back to login page </Link>
        </h3>
    </div>
);
function mapStateToProps(state){
    return {
        groups:state.groups
    }
}
export const ConnectedDashboard = connect(mapStateToProps) (Dashboard);