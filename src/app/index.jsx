import {store} from './store'

import React from "react";
import ReactDOM from 'react-dom';
import {Main} from "./components/Main";
import {Dashboard} from "./components/Dashboard";

ReactDOM.render(
    <Dashboard/>,
    document.getElementById("app")
);