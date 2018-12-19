import React, { Component } from 'react'
import { Route, Redirect, Switch} from 'react-router-dom'
import {routes, NotFound} from './router'
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact={route.exact} render={ props =>(
    route.requireAuth && (localStorage.getItem('loginStatus') !== "true")? 
    (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />) : 
    (<route.component {...props} routes={route.routes}/>)
  )} />
)
class App extends Component {
    componentWillMount(){
        console.log(111)
        setTimeout(()=>{
            return <Redirect to="/login"/>
        },10000)
    }
    render() {
        return (
        <div className='App'>
            <Switch>
            {routes.map((route, key) => (
                <RouteWithSubRoutes key={key} {...route} />
            ))}
            <Route component={NotFound} />
            </Switch>
        </div>
    );
  }
}
export default App;






