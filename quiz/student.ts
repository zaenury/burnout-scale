import options from './bank-quiz/options.json'
import questions from './bank-quiz/student.json'

export const studentQuestions = () => {
  return questions.map((item) => ({
    ...item,
    options
  }))
}
