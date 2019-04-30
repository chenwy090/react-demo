import React, { Component } from 'react'
import { Route, Redirect, Switch, withRouter} from 'react-router-dom'
import {routes, NotFound, Login, FrontendAuth} from './router'
//路由
const RouteWithSubRoutes = (route) => {
    return <Route path={route.path} exact={route.exact} render={ props =>(
        route.requireAuth && (localStorage.getItem('loginStatus') !== "true") ? 
        (<Redirect to={{ pathname:'/login', state: { from: props.location } }}/>) : 
        (<route.component {...props} routes={route.routes}/>)
    )}/>
}
class App extends Component {
    componentDidMount() {
        if(this.props.location.pathname === '/mine') {
            this.props.history.push('/404')
        }   
    } 
    render() {
        return (
        <div className='App'>
            <Switch>
                <Route path="/login" component={Login} exact />
                <Route path="/FrontendAuth" component={FrontendAuth}/>
                {routes.map((route, key) => (
                    <RouteWithSubRoutes key={key} {...route} />
                ))}
                <Route component={NotFound} />
            </Switch>
        </div>
    );
  }
}
export default  withRouter(App)






