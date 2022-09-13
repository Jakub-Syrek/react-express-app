import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleWare = createSagaMiddleware();
import * as sagas from './sagas.mock'
import {taskCreationSaga} from "./sagas.mock";
import * as mutations from './mutations'


export const store = createStore(
    combineReducers({
      tasks(tasks = defaultState.tasks, action){
          switch (action.type){
              case mutations.CREATE_TASK:
                  console.log(action);
          }
          return tasks;
      },
        comments(comments = defaultState.comments){
          return comments;
        },
        groups(groups = defaultState.groups){
            return groups;
        },
        users(users = defaultState.users){
            return users;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleWare)
);

for(let saga in sagas){
    sagaMiddleWare.run(taskCreationSaga)
}
