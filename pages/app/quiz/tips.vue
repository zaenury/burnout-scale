<script setup>
import { useQuiz, useKyc } from '~/composables'
import { studentTips, teacherTips } from '~/quiz'

definePageMeta({
  layout: 'grey'
})

const router = useRouter()

function actionBack() {
  router.go(-1)
}

const { quizResponse, removeQuiz } = useQuiz()
const { kycType, entry: kycEntry, removeKyc } = useKyc()

const entries = computed(() =>
  kycEntry.value.type === 'teacher' ? teacherTips : studentTips
)

function endProcess() {
  removeQuiz()
  removeKyc()

  router.push('/')
}
</script>

<template>
  <div class="l-landing landing--quiz-score">
    <div class="landing__top-content">
      <div class="top-content__wrapper">
        <h3 class="text-xl">
          <strong>
            Strategi untuk Mengurangi Burnout pada {{ kycType }}:
          </strong>
        </h3>
      </div>
    </div>
    <div class="landing__bottom-content">
      <div class="bottom-content__wrapper">
        <v-card v-if="!quizResponse">
          <v-card-text>
            Maaf quiz score belum dapat dihitung. Cobalah untuk menjawab
            pertanyaan
          </v-card-text>
        </v-card>

        <v-card v-if="quizResponse">
          <v-card-text>
            <p
              v-for="(itemEntries, indexEntries) in entries"
              :key="indexEntries"
              class="mb-4"
            >
              {{ indexEntries + 1 }}. {{ itemEntries }}
            </p>
          </v-card-text>

          <v-card-actions class="justify-between">
            <v-btn
              variant="outlined"
              color="#00CAF2"
              size="large"
              class="mb-4 w-5/12"
              @click="actionBack"
            >
              Back
            </v-btn>
            <v-btn
              variant="flat"
              color="primary"
              size="large"
              class="mb-4 text-none w-5/12"
              @click="endProcess"
            >
              TUTUP APLIKASI
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.l-grey {
  & .c-main {
    background: #3248da !important;
  }
}

.l-landing {
  &.landing {
    &--quiz-score {
      & .title {
        font-size: 2rem !important;
        padding: 40px 24px;
      }
    }
  }
}
</style>
