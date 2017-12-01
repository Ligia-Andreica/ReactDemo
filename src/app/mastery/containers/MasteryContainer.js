import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import _ from 'lodash'
import * as masteryActions from '../actions/masteryActions'
import { paths } from '../../constants/constants'

import MasteryList from '../components/MasteryList'
import AddSkill from '../components/AddSkill'

class MasteryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'John Doe'
        }
    }

    render () {
        return (
            <div>
                <MasteryList name={this.state.name} skills={this.props.skills}/>
                <AddSkill addSkill={this.props.actions.addSkill}/>
            </div>
    )}
}

const mapStateToProps = (state) => {
  return {
    skills: state.masteryReducer.getIn(paths.skills)
  }
}

/*const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (text) => {
      dispatch(masteryActions.addItem(text))
    }
  }
}*/

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(_.merge({}, masteryActions), dispatch) }
}

export default MasteryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MasteryContainer)

MasteryContainer.propTypes = {
    skills: PropTypes.array,
    actions: PropTypes.array
}