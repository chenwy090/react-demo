import React, { Component } from 'react'
import {requireAuth} from '../../auth/Auth'
class Home extends Component {
	componentWillMount() {
		requireAuth(this)
	}
  	render () {
    	return (
    		<div>1111</div>
     	)
  	}
}

export default Home
