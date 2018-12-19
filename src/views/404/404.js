import React, { Component } from 'react'
class NotFound extends Component {
  constructor (props) {
    super(props)
    console.log(global.$AxiosFetch)
  }
  render () {
    return (
    	<div>404页面不存在</div>
     )
  }
}

export default NotFound
