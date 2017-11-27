import _ from 'lodash'
import Immutable from 'immutable'

import * as types from '../../constants/actionTypes'
import { paths } from '../../constants/constants'

const initialState = Immutable.Map({})
export default function masteryReducer(state = initialState, action = undefined) {
  let newState = state

  switch (action.type) {
      case types.ADD_SKILL:
        newState = newState.updateIn(paths.skills, arr => arr.push(action.skill));
        return newState
      case types.ADD_SKILLS:
        newState = newState.setIn(paths.skills, Immutable.List(action.skills))
        return newState
    }
  return newState
}