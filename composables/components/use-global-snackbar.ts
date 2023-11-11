import { useAppStore } from '~/stores/app'
import type { Snackbar } from '~/stores/app'

export const useGlobalSnackbar = () => {
  const appStore = useAppStore()

  const state = computed(() => {
    return {
      ...appStore.snackbar
    }
  })

  return {
    state,
    info(text: string) {
      appStore.setSnackbar({
        opened: true,
        text,
        color: 'info'
      } as Snackbar)
    },
    success(text: string) {
      appStore.setSnackbar({
        opened: true,
        text,
        color: 'success'
      } as Snackbar)
    },
    error(error: Error | unknown) {
      process.env.NODE_ENV !== 'production' &&
        console.error('[globalSnackbar@error]', error)

      appStore.setSnackbar({
        opened: true,
        text: (error as Error).message,
        color: 'error'
      } as Snackbar)
    },
    reset(delay = 0) {
      setTimeout(() => {
        appStore.setSnackbar({
          opened: false,
          text: '',
          color: 'success'
        } as Snackbar)
      }, delay)
    }
  }
}
