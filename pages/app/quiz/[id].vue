<script setup>
import { useQuiz } from '~/composables'

definePageMeta({
  layout: 'grey'
})

const {
  entryDetail,
  quizDetail,
  quizTotal,
  quizPosition,
  disabledNext,
  disabledPrev,

  chooseResponse,
  nextQuestion,
  prevQuestion
} = useQuiz()
</script>

<template>
  <div class="l-landing landing--quiz">
    <div class="landing__top-content">
      <div class="top-content__wrapper" :class="[!quizDetail ? 'pb-8' : '']">
        <h3 class="text-xl">
          <strong>
            <span v-if="quizDetail">
              Pertanyaan {{ quizPosition }}/{{ quizTotal }}
            </span>

            <span v-if="!quizDetail"> Maaf quiz tidak ditemukan </span>
          </strong>
        </h3>
      </div>
    </div>
    <div v-if="quizDetail" class="landing__bottom-content">
      <div class="bottom-content__wrapper">
        <div class="wrapper__card-floating">
          <v-card>
            <v-card-text>
              <div class="card-floating__title mb-8">
                <h3 class="text-large text-center">
                  <strong>{{ quizDetail.question }}</strong>
                </h3>
              </div>

              <div class="card-floating__content mb-8">
                <v-btn
                  v-for="(itemOptions, indexOptions) in quizDetail.options"
                  :key="indexOptions"
                  :variant="
                    entryDetail && entryDetail.quizResponse === itemOptions.id
                      ? 'flat'
                      : 'outlined'
                  "
                  color="primary"
                  block
                  size="large"
                  class="mb-4 text-none"
                  @click="chooseResponse(itemOptions)"
                >
                  <span class="whitespace-normal">
                    {{ itemOptions.title }}
                  </span>
                </v-btn>
              </div>
            </v-card-text>

            <v-card-actions class="justify-between">
              <v-btn
                variant="outlined"
                color="#00CAF2"
                size="large"
                class="mb-4 text-none w-5/12"
                :disabled="disabledPrev"
                @click="prevQuestion"
              >
                PREV
              </v-btn>
              <v-btn
                variant="flat"
                color="primary"
                size="large"
                class="mb-4 text-none w-5/12"
                :disabled="disabledNext"
                @click="nextQuestion"
              >
                NEXT
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
