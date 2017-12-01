import * as types from '../../constants/actionTypes'
import request from 'superagent'

export function saveSkill(skill) {
  return {
    type: types.ADD_SKILL,
    skill
  }
}

function addSkills(skills) {
    return {
        type: types.ADD_SKILLS,
        skills
    }
}

function fetchSkillInProgress(isInProgress) {
    return {
        type: types.IS_FETCH_SKILLS_IN_PROGRESS,
        isInProgress
    }
}

function deleteSkillInner(id) {
    return {
        type: types.DELETE_SKILL,
        id
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
                let skill = { id: response.body.id, skill: name }
                dispatch(saveSkill(skill))
            }
        }
        req.end(reqCallback)
    }
}

export function getSkills() {
    return function(dispatch) {
        let req = request.get('http://localhost:9000/skills').accept('application/json')
        dispatch(fetchSkillInProgress(true))
        let reqCallback = (error, response) => {
            dispatch(fetchSkillInProgress(false))
            if (error) {
                console.log(error)
            } else {
                dispatch(addSkills(response.body))
            }
        }
        req.end(reqCallback)
    }
}

export function deleteSkill(id) {
    return function(dispatch) {
        let req = request.del('http://localhost:9000/skills')
            .send({ id })
            .accept('application/json')
        let reqCallback = (error, response) => {
            if (error) {
                console.log(error)
            } else {
                if(response.body.status === 200){
                    dispatch(deleteSkillInner(id))
                }
            }
        }
        req.end(reqCallback)
    }
}
