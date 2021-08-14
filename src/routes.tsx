import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from 'pages/DashBoard';


const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={DashBoard} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;