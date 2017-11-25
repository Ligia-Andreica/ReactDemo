import _ from 'lodash'
import Immutable from 'immutable'

import * as types from '../../shell/actionTypes'
import { paths } from '../../shell/constants'

const initialState = Immutable.fromJS({
  skills: ['React', 'Redux']
})

export default function masteryReducer(state = initialState, action = undefined) {
  let newState = state

  switch (action.type) {
      case types.ADD_SKILL:
        newState = newState.updateIn(paths.skills, arr => arr.push(action.name));
        return newState
    }
  return newState
}