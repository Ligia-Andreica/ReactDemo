import Immutable from 'immutable'

import * as types from '../../constants/actionTypes'
import { paths } from '../../constants/constants'

let initialState = Immutable.Map({})

export default function masteryReducer(state = initialState, action = undefined) {
  let newState = state

  switch (action.type) {
    case actionTypes.SHOW_ERROR_DIALOG:
        newState = newState.setIn(paths.errorMessage, action.errorMessage)
        return newState
  }
  return newState
}

export function showErrorDialog(errorMessage) {
    return {
        type: actionTypes.SHOW_ERROR_DIALOG,
        errorMessage
    }
}