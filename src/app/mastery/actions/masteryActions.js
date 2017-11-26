import * as types from '../../constants/actionTypes'
import request from 'superagent'

export function addSkill(name) {
  return {
    type: types.ADD_SKILL,
    name
  }
}

export function addSkills(skills) {
    return {
        type: types.ADD_SKILLS,
        skills
    }
}

export function getSkills() {
    return function (dispatch) {
        let req = request.get('http://localhost:9000/skills').accept('application/json')
        let reqCallback = (error, response) => {
            if (error) {
                console.log(error)
            } else {
                dispatch(addSkills(response.body))
            }
         }
        req.end(reqCallback)
    }
}
