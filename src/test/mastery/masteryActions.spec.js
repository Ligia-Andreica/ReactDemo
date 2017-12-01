import * as actions from '../../app/mastery/actions/masteryActions'
import * as types from '../../app/constants/actionTypes'

import expect from 'expect'

describe('Mastery actions', function () {
    it('it should handle ADD_SKILL', ()  => {
        const skill = {id: 0, skill: 'newSkill'}
        const expectedAction = {
            type: types.ADD_SKILL,
            skill: skill
        }
        expect(actions.saveSkill(skill)).toEqual(expectedAction)
    })
})