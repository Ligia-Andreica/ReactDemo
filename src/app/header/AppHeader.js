import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AppHeader extends Component {
  render () {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{this.props.title}</h1>
        </div>
    )
  }
}

AppHeader.defaultProps = {
    title: 'Hello world!'
}

AppHeader.propTypes = {
    title: PropTypes.string.isRequired
}