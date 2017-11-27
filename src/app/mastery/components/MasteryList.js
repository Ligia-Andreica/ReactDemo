import React, { Component } from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'

import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import DeleteButton from 'material-ui/svg-icons/action/delete'

export default class MasteryList extends Component {

    deleteSkill = (id) => {
        this.props.deleteSkill(id)
    }

    mapSkills = () => {
        return this.props.skills &&_.map(this.props.skills.toJS(), (skill) => {
            return <GridTile style={{backgroundColor: 'lightGray'}}
                      key={skill.id}
                      title={skill.skill}
                      actionIcon={<IconButton onClick={() => this.deleteSkill(skill.id)}><DeleteButton color="white"/></IconButton>}
                    />
        })
    }

    render() {
        const styles = {
          root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginTop: 10
          },
          gridList: {
            width: '90%',
            height: '100%',
            overflowY: 'auto',
            bottom: 100
          }
        }

        return (
            <div style={styles.root}>
                {
                    this.props.skills &&
                    <GridList cols={4}
                          cellHeight={180}
                          style={styles.gridList}>
                           <Subheader style={{fontWeight: 'bold'}}>{`${this.props.name}'s skills (${this.props.skills.size})`}</Subheader>
                           {this.mapSkills()}
                    </GridList>
                }
            </div>
    )}
}

MasteryList.propTypes = {
    name: PropTypes.string,
    skills: PropTypes.object,
    deleteSkill: PropTypes.func
}

