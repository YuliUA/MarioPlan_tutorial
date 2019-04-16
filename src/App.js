import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar'
import Dashboard from './components/dashboard/Dashbord'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AllUsers from './components/layouts/AllUsers'
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path='/' component = {Dashboard}/> 
              <Route path='/project/:id' component={ProjectDetails}/>
              <Route path='/signin' component={SignIn}/>
              <Route path='/signup' component={SignUp}/>
              <Route path='/create' component={CreateProject}/>
              <Route path='/allusers' component ={AllUsers}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
