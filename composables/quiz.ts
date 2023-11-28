import { useAppStore, type QuizResponse, type QuizOptions } from '~/stores/app'
import { useKyc } from '~/composables'
import { studentQuestions, teacherQuestions } from '~/quiz'

export const KEY_QUIZ_RESPONSE = 'BS_QUIZ_RESPONSE'

export const useQuiz = () => {
  const route = useRoute()
  const router = useRouter()
  const appStore = useAppStore()
  const { entry: kycEntry } = useKyc()

  const entry = ref<QuizResponse[]>([])
  const loading = ref(false)

  const quizEntries = computed(() =>
    kycEntry.value.type === 'teacher' ? teacherQuestions() : studentQuestions()
  )
  const quizId = computed(() => route.params.id)
  const quizTotal = computed(() => quizEntries.value.length)
  const quizResponse = computed(() =>
    window.localStorage.getItem(KEY_QUIZ_RESPONSE)
  )
  const quizDetail = computed(() => {
    if (!quizId.value) return

    const quiz = quizEntries.value.find((item) => item.id === quizId.value)

    return quiz
  })
  const quizPosition = computed(() => {
    if (!quizId.value) return 0

    const quizIndex = quizEntries.value.findIndex(
      (item) => item.id === quizId.value
    )

    return quizIndex + 1
  })
  const entryDetail = computed(() =>
    entry.value.find((item) => item.quizId === quizId.value)
  )
  const quizScore = computed(() => entry.value.reduce((a, b) => a + b.score, 0))
  const quizDefinition = computed(() => {
    if (kycEntry.value.type === 'student') {
      if (quizScore.value > 15 && quizScore.value <= 30)
        return 'Anda mengalami burnout pada tingkat keparahan rendah'
      if (quizScore.value > 30 && quizScore.value <= 45)
        return 'Anda mengalami burnout pada tingkat keparahan sedang'
      if (quizScore.value > 45 && quizScore.value <= 75)
        return 'Anda mengalami burnout pada tingkat keparahan tinggi'
      if (quizScore.value > 75) return 'Anda mengalami burnout'
    }

    if (kycEntry.value.type === 'teacher') {
      if (quizScore.value > 20 && quizScore.value <= 35)
        return 'Anda mengalami burnout pada tingkat keparahan rendah'
      if (quizScore.value > 35 && quizScore.value <= 55)
        return 'Anda mengalami burnout pada tingkat keparahan sedang'
      if (quizScore.value > 55 && quizScore.value <= 75)
        return 'Anda mengalami burnout pada tingkat keparahan tinggi'
      if (quizScore.value > 75) return 'Anda mengalami burnout'
    }

    return 'Anda tidak mengalami burnout'
  })
  const disabledPrev = computed(
    () => loading.value || !quizPosition.value || quizPosition.value === 1
  )
  const disabledNext = computed(
    () => loading.value || !quizPosition.value || !entryDetail.value
  )

  function nextQuestion() {
    if (!quizDetail.value) return
    const activeQuizId = +quizDetail.value.id
    const nextQuizId = activeQuizId + 1

    saveQuiz()

    if (quizPosition.value === quizTotal.value) {
      router.push('/app/quiz/score')

      return
    }

    router.push(`/app/quiz/${nextQuizId}`)
  }

  function prevQuestion() {
    if (!quizDetail.value) return
    const activeQuizId = +quizDetail.value.id
    const prevQuizId = activeQuizId - 1

    saveQuiz()
    router.push(`/app/quiz/${prevQuizId}`)
  }

  function chooseResponse(item: QuizOptions) {
    if (!quizDetail.value) return
    const quizId = quizDetail.value.id
    const response = entry.value

    if (response.find((itemResponse) => itemResponse.quizId === quizId)) {
      const responseIndex = response.findIndex(
        (itemResponse) => itemResponse.quizId === quizId
      )

      response[responseIndex] = {
        ...response[responseIndex],
        quizResponse: item.id,
        score: item.score
      }

      entry.value = response

      return
    }

    entry.value.push({
      id: quizDetail.value.id,
      quizId,
      quizResponse: item.id,
      score: item.score
    })
  }

  function saveQuiz() {
    window.localStorage.setItem(KEY_QUIZ_RESPONSE, JSON.stringify(entry.value))
  }

  function removeQuiz() {
    appStore.setQuizResponse([])
    window.localStorage.removeItem(KEY_QUIZ_RESPONSE)
  }

  watch(
    () => quizResponse.value,
    (value) => {
      if (!value) return

      appStore.setQuizResponse(JSON.parse(value))
    },
    {
      immediate: true
    }
  )

  watch(
    () => appStore.quizResponse,
    (value) => {
      entry.value = value
    },
    {
      immediate: true,
      deep: true
    }
  )

  return {
    entry,
    entryDetail,
    quizEntries,
    quizResponse,
    quizDetail,
    quizTotal,
    quizPosition,
    quizScore,
    quizDefinition,
    disabledPrev,
    disabledNext,
    loading,

    saveQuiz,
    removeQuiz,
    chooseResponse,
    nextQuestion,
    prevQuestion
  }
}
