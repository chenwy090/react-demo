import React, { Component } from 'react'
class Home extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    console.log(global.$AxiosFetch)
  }
  render () {
    return (
    	<div>登录</div>
     )
  }
}

export default Home
