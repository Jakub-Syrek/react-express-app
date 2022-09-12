import {
    take,
    put,
    select
} from 'redux-saga/effects';

import * as mutations from './mutations';
import uuid from 'uuid';

export function* taskCreationSaga(){
    while (true){
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = `u1`;
        const task = uuid();
        yield put(mutations.createTask(taskID, roupID, ownerID));
        console.log("Got groupId", groupID);
    }
}

