import { defineStore } from 'pinia'

export interface Snackbar {
  opened: boolean
  text: string
  color: 'success' | 'info' | 'error'
}

export interface Kyc {
  type?: string
  name: string
  identityNumber: string
}

export interface QuizOptions {
  id: string
  title: string
  score: number
}

export interface QuizResponse {
  id: string
  quizId: string
  quizResponse: string
  score: number
}

export interface Quiz {
  id: string
  question: string
  options: QuizOptions[]
}

export const useAppStore = defineStore('app', {
  state: () => ({
    isLoading: {
      page: true,
      list: false,
      form: false
    },
    kyc: {
      type: undefined,
      name: '',
      identityNumber: ''
    } as Kyc,
    quizResponse: [] as QuizResponse[],
    snackbar: {
      opened: false,
      text: '',
      color: 'success'
    }
  }),
  actions: {
    setKyc(value: Kyc) {
      this.kyc = value
    },

    setQuizResponse(value: QuizResponse[]) {
      this.quizResponse = value
    },

    setSnackbar(value: Snackbar) {
      this.snackbar = value
    },

    setLoadingList(value: boolean) {
      this.isLoading.list = value
    },

    setLoadingForm(value: boolean) {
      this.isLoading.form = value
    },

    setLoadingPage(value: boolean) {
      this.isLoading.page = value
    }
  }
})

// make sure to pass the right store definition, `useAppStore` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
