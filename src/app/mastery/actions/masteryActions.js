import * as types from '../../constants/actionTypes'
import request from 'superagent'

export function saveSkill(name) {
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

export function addSkill(name) {
    return function(dispatch) {
        let req = request.post('http://localhost:9000/skills')
            .send({ skill: name })
            .accept('application/json')
        let reqCallback = (error, response) => {
            if (error) {
                console.log(error)
            } else {
                dispatch(saveSkill(name))
            }
        }
        req.end(reqCallback)
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
