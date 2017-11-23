import _ from 'lodash'
import Immutable from 'immutable'

import { ADD_SKILL } from '../actions/masteryActions'
import { paths } from '../../shell/constants'

const initialState = Immutable.fromJS({
  skills: ['React', 'Redux']
})

export default function masteryReducer(state = initialState, action = undefined) {
  let newState = state

  switch (action.type) {
      case 'ADD_SKILL':
        newState = newState.updateIn(paths.skills, arr => arr.push(action.name));
        return newState
    }
  return newState
}