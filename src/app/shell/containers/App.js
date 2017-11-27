import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppHeader from '../../header/AppHeader'
import MasteryContainer from '../../mastery/containers/MasteryContainer'
import * as masteryActions from '../../mastery/actions/masteryActions'
import { getSkillsCountSelector } from '../../mastery/selectors/skillsSelector'

class App extends Component {
    componentWillMount() {
        this.props.actions.getSkills()
    }

    render () {
        return (
            <div>
                <AppHeader title='React Redux Example App' numberOfSkills={this.props.skillNo}/>
                <MasteryContainer/>
            </div>
    )}
}


const mapStateToProps = (state) => {
  return {
    skillNo: getSkillsCountSelector(state),
  }
}

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(_.merge({}, masteryActions), dispatch) }
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)