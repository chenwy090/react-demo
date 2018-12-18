import React, { Component } from 'react'
import { Route, Redirect} from 'react-router-dom'
import routes from './router'
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact={route.exact} render={ props =>(
    route.requireAuth && (localStorage.getItem('loginStatus') !== "true") ? 
    (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />) : 
    (<route.component {...props} routes={route.routes}/>)
  )} />
)
class App extends Component {
  render() {
    return (
      <div className='App' >
        {routes.map((route, key) => (
          <RouteWithSubRoutes key={key} {...route} />
        ))}
      </div>
    );
  }
}
export default App;






