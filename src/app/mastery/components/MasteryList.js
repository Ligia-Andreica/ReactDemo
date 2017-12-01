import React, { Component } from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'

import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import DeleteButton from 'material-ui/svg-icons/action/delete'

const MARGIN_OFFSET = 10
const HEADER_OFFSET = 80

export default class MasteryList extends Component {
    mapSkills = () => {
        return this.props.skills &&_.map(this.props.skills.toJS(), (skill) => {
            return <GridTile style={{backgroundColor: 'lightGray'}}
                      key={skill.id}
                      title={skill.skill}
                      actionIcon={<IconButton><DeleteButton color="white" onClick={() => console.log('DELETED')}/></IconButton>}
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
            maxHeight: this.props.height - MARGIN_OFFSET - HEADER_OFFSET,
            overflowY: 'auto'
          }
        }

        return (
            <div style={styles.root}>
                {
                    this.props.skills &&
                    <GridList cols={4}
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
    height: PropTypes.number
}

