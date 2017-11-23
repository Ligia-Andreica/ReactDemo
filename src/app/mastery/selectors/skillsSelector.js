import { createSelector } from 'reselect'

import { paths } from '../../shell/constants'

const getSkills = state => state.masteryReducer.getIn(paths.skills)
const getSkillsCount = skills => skills.size

export const getSkillsCountSelector = createSelector(
    getSkills,
    skills => getSkillsCount(skills)
)