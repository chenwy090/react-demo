import Home from '../views/home/home'
import Mine from '../views/mine/mine'
import Login from '../views/login/login'
import ErrorPage from '../views/404/404'
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
		path:'/login',
		component:Login,
		exact:true,
		requireAuth:false
	},
	{
		path:'/404',
		component:ErrorPage,
		exact:true
	}
]
export default routes