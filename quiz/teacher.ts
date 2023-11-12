import options from './bank-quiz/options.json'
import questions from './bank-quiz/teacher.json'
import factors from './factor/student.json'
import tips from './tips/student.json'

export const teacherQuestions = () => {
  return questions.map((item) => ({
    ...item,
    options
  }))
}

export const teacherFactors = factors
export const teacherTips = tips
