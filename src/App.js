import logo from './logo.svg';
import './App.css';
import React from "react"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import CreateEmployeeComponent from "./components/CreateEmployeeComponent"
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent"
import ViewEmployeeComponent from "./components/ViewEmployeeComponent"


function App() {
  return (
      <div>
          <Router forceRefresh={true}>
              <HeaderComponent/>
              <div className="container">
                  <Switch>
                      <Route exact path = "/" component = {ListEmployeeComponent}/>
                      <Route path = "/employees" component = {ListEmployeeComponent}/>
                      <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}/>
                      <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}/>
                      {/*<Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}/>*/}
                      <Redirect to = "/" component={ListEmployeeComponent}/>
                  </Switch>
              </div>
              <FooterComponent/>
          </Router>
      </div>
  );
}

export default App;
