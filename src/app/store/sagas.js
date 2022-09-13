import {
    take,
    put,
    select
} from 'redux-saga/effects';
import * as mutations from './mutations';
import uuid from "uuid";
import axios from 'axios';

const url = "http://localhost:7777";

export function* taskCreationSaga(){
    while (true){
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = `U1`;
        const taskID = uuid();

        const { res } = yield axios.post(url + `/task/new`, {
            task:{
                id: taskID,
                group: groupID,
                owner: ownerID,
                isComplete: false,
                name: "New task"
            }
        });
        console.info("Got response,", res)
        yield put(mutations.createTask(taskID,groupID,ownerID));
    }
};