import React, { Component } from 'react'

import AppHeader from '../header/AppHeader'
import MasteryContainer from '../mastery/containers/MasteryContainer'

export default class App extends Component {
    render () {
        return (
            <div>
                <AppHeader title = 'React Redux Example App'/>
                <MasteryContainer/>
            </div>
    )}
}