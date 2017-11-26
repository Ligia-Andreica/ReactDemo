import { createSelector } from 'reselect'

import { paths } from '../../constants/constants'

const getSkills = state => state.masteryReducer.getIn(paths.skills)
const getSkillsCount = skills => skills ? skills.size : 0

export const getSkillsCountSelector = createSelector(
    getSkills,
    skills => getSkillsCount(skills)
)