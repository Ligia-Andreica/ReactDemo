import * as types from '../../shell/actionTypes'

export function addSkill(name) {
  return {
    type: types.ADD_SKILL,
    name
  }
}
