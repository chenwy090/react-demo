import Home from '../views/home/home'
import Mine from '../views/mine/mine'
import Login from '../views/login/login'
import NotFound from '../views/404/404'
import FrontendAuth from '../views/FrontendAuth/FrontendAuth'
const routes = [
	{
		path:'/',
		component: Home,
		exact:true,
		requireAuth:true
	},
	{
		path:'/home',
		component:Home,
		exact:true,
		requireAuth:true
	},
	{
		path:'/mine',
		component:Mine,
		exact:true,
		requireAuth:false
	},
	{
		path:'/404',
		component:NotFound,
		exact:true
	}
]
export {routes, NotFound, Login, FrontendAuth}
