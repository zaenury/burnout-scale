<script setup>
definePageMeta({
  layout: 'basic'
})

const router = useRouter()

function actionBack() {
  router.go(-1)
}
</script>

<template>
  <div class="l-landing landing--app">
    <div class="landing__top-content">
      <div class="top-content__wrapper">
        <h3 class="text-xl">
          <strong>Tentang Kami</strong>
        </h3>
      </div>
    </div>
    <div class="landing__bottom-content">
      <div class="bottom-content__wrapper">
        <h4 class="text-l text-center text-justify">
          <span>
            Selamat datang di aplikasi "<strong
              >Burnout Scale for Vocational School</strong
            >" Kami berkomitmen untuk mendukung kesejahteraan dan keberhasilan
            para siswa di SMKN 1 Jenangan dengan memberikan alat yang berguna
            untuk mengukur dan mengelola tingkat kelelahan mereka.
          </span>
          <p class="pt-4 text-justify">
            <span>
              <strong>Burnout</strong> adalah kondisi kelelahan yang
              berkepanjangan dan kronis yang bisa dialami oleh siswa maupun guru
              di sekolah. Burnout dapat memengaruhi fisik, mental, dan emosional
              seseorang. Perubahan emosional maupun kondisi fisik karena
              burnout, antara lain: kelelahan yang kronis, kurangnya motivasi,
              kecenderungan menarik diri, perasaan putus asa, perubahan dalam
              pola tidur maupun makan, peningkatan iritabilitas (mudah marah,
              frustrasi, maupun kecemasan), serta penurunan prestasi diri.
            </span>
          </p>
          <p class="pt-4 text-justify">
            <span>
              Terima kasih telah memilih aplikasi "<strong
                >Burnout Scale for Vocational School</strong
              >" sebagai alat untuk mengukur dan mengelola kelelahan. Kami
              berharap aplikasi ini membantu Anda dan siswa sekolah vokasional
              lainnya mencapai kesejahteraan yang baik dan sukses akademik
            </span>
          </p>
        </h4>
        <v-row class="pt-8">
          <v-col cols="12">
            <v-btn
              color="primary"
              block
              size="large"
              class="mb-4"
              @click="actionBack"
            >
              Back
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
