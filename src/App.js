import logo from './logo.svg';
import './App.css';
import React from "react"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import CreateEmployeeComponent from "./components/CreateEmployeeComponent"
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent"


function App() {
  return (
      <div>
          <Router forceRefresh={true}>
              <HeaderComponent/>
              <div className="container">
                  <Switch>
                      <Route path = "/employees" component = {ListEmployeeComponent}/>
                      <Route path = "/add-employee" component = {CreateEmployeeComponent}/>
                      <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}/>
                      <Route exact path = "/" component = {ListEmployeeComponent}/>
                      <Redirect to = "/" component={ListEmployeeComponent}/>
                  </Switch>
              </div>
              <FooterComponent/>
          </Router>
      </div>
  );
}

export default App;
