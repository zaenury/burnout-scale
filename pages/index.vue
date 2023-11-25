<script setup>
definePageMeta({
  layout: 'basic'
})

const router = useRouter()

function actionNext() {
  router.push('welcome')
}
</script>

<template>
  <div class="l-landing landing--app">
    <div class="landing__top-content">
      <div class="top-content__wrapper">
        <h3 class="text-xl">
          <strong>Instrumen Burnout untuk Siswa & Guru</strong>
        </h3>
      </div>
    </div>
    <div class="landing__bottom-content">
      <div class="bottom-content__wrapper">
        <h4 class="text-l text-center">
          <span>
            Instrumen ini disusun oleh tim Pengabdian Masyarakat Universitas
            Darussalam Gontor dengan dukungan hibah Kementerian Pendidikan
            Kebudayaan RI Tahun 2023
          </span>
        </h4>
        <v-row class="pt-8">
          <v-col cols="12">
            <div class="w-full text-center flex justify-center">
              <img src="/images/tutwuri-handayani.png" width="150" />
            </div>
          </v-col>

          <v-col cols="12">
            <div class="w-full text-center flex justify-between">
              <img src="/images/unida.png" width="120" />

              <img src="/images/smkn1jenangan.png" width="120" />
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
              Continue
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
