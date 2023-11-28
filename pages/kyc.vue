<script setup>
import { useKyc, useQuiz } from '@/composables'

definePageMeta({
  layout: 'basic'
})

const router = useRouter()
const { entry, loading, saveKyc, removeKyc } = useKyc()
const { removeQuiz } = useQuiz()

function actionSave() {
  saveKyc()
  removeQuiz()

  router.push('/app')
}

function actionCancel() {
  removeKyc()

  router.push('/')
}
</script>

<template>
  <div class="l-landing">
    <div class="landing__top-content">
      <div class="top-content__wrapper">
        <h3>Bolehkah saya mengenal anda?</h3>
      </div>
    </div>
    <div class="landing__bottom-content">
      <div class="bottom-content__wrapper">
        <v-row>
          <v-col class="!pb-52 !pt-14" cols="12">
            <TypeSelector
              v-model="entry.type"
              label="Peran"
              placeholder="Masukan peran"
              :loading="loading"
            />
          </v-col>

          <v-col cols="6">
            <v-btn
              color="secondary"
              variant="outlined"
              size="large"
              block
              @click="actionCancel"
            >
              Batal
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
              color="primary"
              block
              size="large"
              class="mb-4"
              :disabled="!entry.type"
              @click="actionSave"
            >
              Lanjutkan
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
