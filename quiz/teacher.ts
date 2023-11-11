import options from './bank-quiz/options.json'
import questions from './bank-quiz/teacher.json'

export const teacherQuestions = () => {
  return questions.map((item) => ({
    ...item,
    options
  }))
}
