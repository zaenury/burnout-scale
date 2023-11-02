<script setup>
const props = defineProps({
  value: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['input', 'close'])

const snackbar = ref(props.value)

function actionClose() {
  snackbar.value = false
}

watch(
  () => snackbar.value,
  (value) => {
    emit('input', value)
    if (!value) {
      emit('close')
    }
  },
  {
    immediate: true
  }
)
watch(
  () => props.value,
  (v) => {
    snackbar.value = v
  },
  {
    immediate: true
  }
)
</script>

<template>
  <v-snackbar v-model="snackbar" bottom :color="color">
    {{ text }}

    <template #actions>
      <v-btn variant="text" @click="actionClose"> Close </v-btn>
    </template>
  </v-snackbar>
</template>
