import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppHeader from '../../header/AppHeader'
import MasteryContainer from '../../mastery/containers/MasteryContainer'
import * as masteryActions from '../../mastery/actions/masteryActions'
import { getSkillsCountSelector } from '../../mastery/selectors/skillsSelector'
import { paths } from '../../constants/constants'
import CircularProgress from 'material-ui/CircularProgress'

class App extends Component {
    componentWillMount() {
        this.props.actions.getSkills()
    }

    render () {
        let appContent = this.props.isSkillFetching ?
                                  <CircularProgress size={80} thickness={5} /> :
                                  <div>
                                      <AppHeader title='React Redux Example App' numberOfSkills={this.props.skillNo}/>
                                      <MasteryContainer/>
                                  </div>
        return (appContent)
    }
}


const mapStateToProps = (state) => {
  return {
    isSkillFetching: state.masteryReducer.getIn(paths.fetchSkillsStatus),
    skillNo: getSkillsCountSelector(state)
  }
}

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(_.merge({}, masteryActions), dispatch) }
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)