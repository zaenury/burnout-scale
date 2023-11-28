<script setup>
import { useQuiz } from '~/composables'

definePageMeta({
  layout: 'grey'
})

const { quizResponse, quizScore, quizDefinition } = useQuiz()
</script>

<template>
  <div class="l-landing landing--quiz-score">
    <div class="landing__top-content">
      <div class="top-content__wrapper">
        <img src="/images/score.png" width="250" />
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
          <v-card-title>
            <div class="w-full text-center">Score Anda</div>
          </v-card-title>

          <v-card-text>
            <div class="flex justify-center">
              <v-sheet
                class="!rounded-md"
                color="primary"
                height="100"
                width="50%"
              >
                <h3 class="text-large text-center title">
                  <strong>{{ quizScore }}</strong>
                </h3>
              </v-sheet>
            </div>

            <div class="mt-4 text-center">
              <p>{{ quizDefinition }}</p>
            </div>
          </v-card-text>

          <v-card-actions class="justify-between">
            <v-btn
              variant="flat"
              color="#00CAF2"
              size="large"
              class="mb-4 text-none w-5/12"
              to="/app/quiz/factor"
            >
              FAKTOR BURNOUT
            </v-btn>
            <v-btn
              variant="flat"
              color="primary"
              size="large"
              class="mb-4 text-none w-5/12"
              to="/app/quiz/tips"
            >
              TIPS
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
