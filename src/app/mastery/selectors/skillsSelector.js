import { createSelector } from 'reselect'

const getSkills = state => state.masteryReducer.skills
const getSkillsCount = skills => skills.length

export const getSkillsCountSelector = createSelector(
    getSkills,
    skills => getSkillsCount(skills)
)