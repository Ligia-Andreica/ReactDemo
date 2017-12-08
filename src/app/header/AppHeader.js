import React, { Component } from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'

import AppBar from 'material-ui/AppBar'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import StarBorder from 'material-ui/svg-icons/toggle/star'
import { MASTERY_LEVEL } from '../constants/constants'

export default class AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.numberOfSkills !== nextProps.numberOfSkills || this.state.open !== nextState.open
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }


    render() {

        let minStars = Math.max(1, Math.ceil(this.props.numberOfSkills / 5))
        let maxStars = Math.min(5, minStars)
        let stars = _.times(maxStars, (index) => <StarBorder onClick={this.handleOpen} key={index} color="gold"/>)

        const actions = [
            <FlatButton
                key='ok'
                label='OK'
                primary={true}
                onClick={this.handleClose}
            />
        ]

        return (
            <div>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    Congrats! Your mastery level is: {MASTERY_LEVEL[maxStars]}.
                </Dialog>
                <AppBar showMenuIconButton={false}
                        title={this.props.title}
                        iconElementRight={<div>{stars}</div>}/>
            </div>
        )
    }
}

AppHeader.defaultProps = {
    title: 'Hello world!'
}

AppHeader.propTypes = {
    title: PropTypes.string.isRequired,
    numberOfSkills: PropTypes.number
}