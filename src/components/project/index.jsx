import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import List from './list'
import View from './view'
import Create from './create'
import Update from './update'


const Project = (props) => {
  return (
    <>
      <Router>
        <Route path="/project/list" component={List} />
        <Route path="/project/view/:projectId" component={View} />
        <Route path="/project/create/" component={Create} />
        <Route path="/project/update/:projectId" component={Update} />
      </Router>
    </>
  );
}

export default Project