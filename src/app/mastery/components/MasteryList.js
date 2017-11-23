import React, { Component } from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'

export default class MasteryList extends Component {
    mapSkills = () => {
        return _.map(this.props.skills.toJS(), function (skill, index) {
            return <li key={skill + index}>{skill}</li>
        })
    }

    render() {
        return (
            <div>
                <h1>{`${this.props.name}'s skills (${this.props.skills.size})`}</h1>
                <ul>
                  {this.mapSkills()}
                </ul>
            </div>
    )}
}

MasteryList.propTypes = {
    name: PropTypes.string,
    skills: PropTypes.object
}

