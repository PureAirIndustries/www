import React, { Component } from "react";

export default class Redirect extends Component {
  constructor( props ){
    super(props);
    this.state = { ...props };
  }
  componentWillMount(){
    window.location = this.state.location;
  }
  render(){
    return (<section>Redirecting...</section>);
  }
}
