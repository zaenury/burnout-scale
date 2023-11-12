<script setup>
import { useKyc } from '@/composables'

definePageMeta({
  layout: 'basic'
})

const router = useRouter()
const { kycType } = useKyc()

function actionNext() {
  router.push('/app/quiz/1')
}
</script>

<template>
  <div class="l-landing landing--app">
    <div class="landing__top-content">
      <div class="top-content__wrapper">
        <h3 class="text-xl">
          <strong>Let's Play Quiz</strong>
        </h3>

        <p>Test Burnout untuk {{ kycType }}</p>
      </div>
    </div>
    <div class="landing__bottom-content">
      <div class="bottom-content__wrapper">
        <v-row>
          <v-col cols="12">
            <div class="w-full text-center flex justify-center">
              <img src="/images/tutwuri-handayani.jpeg" width="150" />
            </div>
          </v-col>

          <v-col cols="12">
            <div class="w-full text-center flex justify-between">
              <img src="/images/unida.jpeg" width="120" />

              <img src="/images/smkn1jenangan.jpeg" width="120" />
            </div>
          </v-col>

          <v-col cols="12">
            <v-btn
              color="primary"
              block
              size="large"
              class="mb-4"
              @click="actionNext"
            >
              Let's Start Quiz
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
