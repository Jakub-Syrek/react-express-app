import { createStore, applyMiddleware } from 'redux';
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleWare = createSagaMiddleware();
import * as sagas from './sagas.mock'
import {taskCreationSaga} from "./sagas.mock";

export const store = createStore(
    function reducer(state = defaultState, action){
        return state;
    },
    applyMiddleware(createLogger(), sagaMiddleWare)
);

for(let saga in sagas){
    sagaMiddleWare.run(taskCreationSaga)
}
