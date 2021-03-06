import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assests/css/fonts.css'
import Dashboard from "./components/Dashboard";
import {Provider} from "react-redux";
import {BrowserRouter as Router,Route}  from "react-router-dom";
import store from "./store";
import Header from "./components/Header";
import CreateProject from "./components/CreateProject";
import AddProject from "./components/AddProject";
import UpdateProject from "./components/UpdateProject";
function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className="app">
                  <Header/>
                  <Route exact path="/">
                  <Dashboard/>
                  </Route>
                  <Route exact path="/dashboard">
                      <Dashboard/>
                  </Route>
                  <Route exact path="/addproject" component={AddProject}/>
                  <Route exact path="/updateproject/:id" component={UpdateProject}/>
              </div>
          </Router>
      </Provider>
        );
}

export default App;
