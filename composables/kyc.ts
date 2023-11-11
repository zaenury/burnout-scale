import { useAppStore } from '~/stores/app'

export const KEY_KYC = 'BS_KYC'

export const useKyc = () => {
  const appStore = useAppStore()

  const entry = ref()
  const loading = ref(false)

  const kycEntries = computed(() => window.localStorage.getItem(KEY_KYC))
  const kycType = computed(() =>
    entry.value && entry.value.type === 'teacher' ? 'Guru' : 'Murid'
  )

  function saveKyc() {
    window.localStorage.setItem(KEY_KYC, JSON.stringify(entry.value))
  }

  function removeKyc() {
    window.localStorage.removeItem(KEY_KYC)
  }

  watch(
    () => kycEntries.value,
    (value) => {
      if (!value) return

      appStore.setKyc(JSON.parse(value))
    },
    {
      immediate: true
    }
  )

  watch(
    () => appStore.kyc,
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
    kycType,
    loading,

    saveKyc,
    removeKyc
  }
}
