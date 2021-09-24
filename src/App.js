import React from "react"
import { Switch, Route } from 'react-router-dom'
import './assets/css/style.css'
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Barn from "./pages/Barn"
import DeviceManagement from "./pages/DeviceManagement"
import Admin from "./pages/Admin"

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/barn" component={Barn} />
        <Route exact path="/devicemanagement" component={DeviceManagement} />
        <Route exact path="/admin" component={Admin} />
      </Switch>

    </>
  );
}

export default App;
