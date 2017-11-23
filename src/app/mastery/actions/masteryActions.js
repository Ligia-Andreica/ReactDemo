export const ADD_SKILL = 'ADD_SKILL'

export function addSkill(name) {
  return {
    type: ADD_SKILL,
    name
  }
}
