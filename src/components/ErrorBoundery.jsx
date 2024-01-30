import React, { Component } from 'react'

export default class ErrorBoundery extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { hasError: false };
    // }
    state = { hasError: '' };
    static getDerivedStateFromError(error) { 
        return { hasError: error };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
  render() {
    return (
      <>
        {this.state.hasError ? this.props.fallback : this.props.children}
      </>
    )
  }
}
