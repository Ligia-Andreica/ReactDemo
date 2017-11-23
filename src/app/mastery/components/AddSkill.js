import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddSkill extends Component {
    addSkillToList = () => {
        this.props.addSkill(this.refs.itemName.value)
        this.refs.itemName.value = ''
    }

    render() {
        return (
            <div>
                <input ref={'itemName'}></input>
                <input type='button' onClick={this.addSkillToList} value = "Add Skill to List" />
            </div>
    )}
}

AddSkill.propTypes = {
    addSkill: PropTypes.func
}