import options from './bank-quiz/options.json'
import questions from './bank-quiz/student.json'
import factors from './factor/student.json'
import tips from './tips/student.json'

export const studentQuestions = () => {
  return questions.map((item) => ({
    ...item,
    options
  }))
}

export const studentFactors = factors
export const studentTips = tips
