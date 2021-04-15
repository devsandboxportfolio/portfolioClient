import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header   from './components/common/header/header'
import Layout   from './components/common/layout/layout'
import Home     from './components/home/index'
import AboutUs  from './components/aboutUs/index'
import Articles from './components/article/index'
import Project  from './components/project/index'
import User    from './components/user/index'

const App = () => {
  //;
  return (
    <>
      <Router>
        <Header />
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/user"    component={User} />
          <Route path="/article" component={Articles} />
          <Route path="/project" component={Project} />
        </Layout>
      </Router>
    </>
  );
}

export default App