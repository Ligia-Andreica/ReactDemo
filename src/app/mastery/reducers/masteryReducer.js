import _ from 'lodash'

import { ADD_SKILL } from '../actions/masteryActions'

const initialState = {
  skills: ['React', 'Redux']
}

export default function masteryReducer(state = initialState, action = undefined) {
  let newState = state

  switch (action.type) {
      case 'ADD_SKILL':
        newState = _.merge({}, {skills: [...state.skills, action.name]})
        break
    }
  return newState
}