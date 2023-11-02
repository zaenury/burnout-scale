<script setup>
const props = defineProps({
  value: {
    type: String,
    default: undefined
  },
  label: {
    type: String,
    default: 'Label'
  },
  placeholder: {
    type: String,
    default: 'Placeholder'
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  errors: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['input'])

const entry = ref()
const innerIsLoading = ref(false)
const innerIsDisabled = ref(false)

const entries = computed(() => [
  {
    label: 'Guru',
    value: 'guru'
  },
  {
    label: 'Murid',
    value: 'murid'
  }
])

watch(
  () => props.value,
  (value) => {
    entry.value = value
  }
)

watch(
  () => props.loading,
  (value) => {
    innerIsLoading.value = value
  }
)

watch(
  () => props.disabled,
  (value) => {
    innerIsDisabled.value = value
  }
)

watch(
  () => entry.value,
  (value) => {
    emit('input', value)
  }
)
</script>

<template>
  <v-select
    v-model="entry"
    variant="outlined"
    :error-messages="errors"
    :label="label"
    :placeholder="placeholder"
    :items="entries"
    item-title="label"
    item-value="value"
    :loading="innerIsLoading"
    :disabled="innerIsDisabled"
  />
</template>
