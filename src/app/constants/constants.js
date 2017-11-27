export const NOVICE = 'Novice'
export const APPRENTICE = 'Apprentice'
export const SOLVER = 'Solver'
export const SYNTHESIZER = 'Synthesizer'

export const MASTERY_LEVEL = [NOVICE, NOVICE, APPRENTICE, SOLVER, SYNTHESIZER]

export const paths = {
    skill: ['skill'],
    skills: ['skill', 'skills'],
    fetchSkillsStatus: ['skill', 'isFetchInProgress'],
    errorMessage: ['errorMessage']
}