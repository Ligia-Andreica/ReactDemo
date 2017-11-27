import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import _ from 'lodash'

export default class AddSkill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newSkill: ''
        }
    }

    addSkillToList = () => {
        if (!_.isEmpty(this.state.newSkill)) {
            this.props.addSkill(this.state.newSkill)
            this.setState({
                newSkill: ''
            })
        }
    }

    handleNewSkillChange = (event) => {
        this.setState({
            newSkill: event.target.value
        })
    }

    render() {
        return (
            <div style={{bottom: 0, position: 'absolute'}}>
                <TextField
                      value={this.state.newSkill}
                      onChange={this.handleNewSkillChange}
                      hintText="New Skill"
                      errorText={this.state.newSkill ? undefined : "This field is required"}/>
                <RaisedButton label="Add Skill to Grid"
                        onClick={this.addSkillToList}
                        primary={true} style={{margin: 12}}
                        disabled={!this.state.newSkill}/>
            </div>
    )}
}

AddSkill.propTypes = {
    addSkill: PropTypes.func
}