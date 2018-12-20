import AxiosFetch from '../fetch'
export const requireAuth =({props}) => {
	AxiosFetch.get('https://api.uneedme.cn/cms/banner/list?type=home&_=15',{
	}).then(()=>{
		props.history.push('/')
	})
}