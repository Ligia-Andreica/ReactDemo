import Immutable from 'immutable'

import * as types from '../../constants/actionTypes'
import { paths } from '../../constants/constants'

let initialState = Immutable.Map({})
initialState = initialState.setIn(paths.fetchSkillsStatus, true)

export default function masteryReducer(state = initialState, action = undefined) {
  let newState = state
  let index
  switch (action.type) {
      case types.ADD_SKILL:
        newState = newState.updateIn(paths.skills, arr => arr.push(action.skill));
        return newState
      case types.ADD_SKILLS:
        newState = newState.setIn(paths.skills, Immutable.List(action.skills))
        return newState
      case types.IS_FETCH_SKILLS_IN_PROGRESS:
        newState = newState.setIn(paths.fetchSkillsStatus, action.isInProgress)
        return newState
      case types.DELETE_SKILL:
        index = _.findIndex(newState.getIn(paths.skills).toJS(), skill => {
            return skill.id == action.id
        })
        newState = newState.updateIn(paths.skills, arr => arr.splice(index, 1))
        return newState
    }
  return newState
}