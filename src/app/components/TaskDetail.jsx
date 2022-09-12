import React from "react";
import { connect} from "react-redux";

const TaskDetail = ({
    id,
    comments,
    task,
    isComlete
})=>(
    <div>
        Task Detail
    </div>
);

const mapStateToProps = state=>state;

export const ConnectTaskDetail = connect(mapStateToProps) (TaskDetail);