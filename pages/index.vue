<script setup>
definePageMeta({
  layout: 'basic'
})

const router = useRouter()

const contentIndexActive = ref(0)

const entries = computed(() => {
  return [
    {
      image: '/images/depression.png',
      title: 'Mengukur Kelelahan',
      description:
        'Membantu siswa dan pendidik untuk memahami dengan lebih baik perasaan kelelahan dan potensial dampaknya.'
    },
    {
      image: '/images/wawasan.png',
      title: 'Memberikan Wawasan',
      description:
        'Membantu siswa dapat mengambil langkah-langkah untuk mengelola stres dan meningkatkan kesejahteraan mereka.'
    },
    {
      image: '/images/sumber-daya.png',
      title: 'Sumber Daya Dukungan',
      description:
        'Menyediakan saran praktis, teknik relaksasi, dan informasi tentang sumber daya lain yang dapat membantu siswa mengatasi kelelahan.'
    },
    {
      image: '/images/keamanan.png',
      title: 'Privasi dan Keamanan',
      description:
        'Data yang dikumpulkan dalam aplikasi ini hanya digunakan untuk memberikan wawasan kepada pengguna dan tidak akan dibagikan kepada pihak ketiga tanpa izin.'
    }
  ]
})
const contentActive = computed(() => entries.value[contentIndexActive.value])

watch(
  () => contentIndexActive.value,
  (value) => {
    if (value === entries.value.length) {
      router.push('kyc')
    }
  }
)
</script>

<template>
  <div v-if="contentActive" class="l-landing">
    <div class="landing__top-content">
      <div class="top-content__wrapper">
        <img :src="contentActive.image" width="250" />
      </div>
    </div>
    <div class="landing__bottom-content">
      <div class="bottom-content__wrapper">
        <div class="wrapper__content-text">
          <div class="content-text__intro">
            <h3 class="intro__title text-xl">
              <strong>{{ contentActive.title }}</strong>
            </h3>

            <p class="intro__description">
              {{ contentActive.description }}
            </p>
          </div>
        </div>

        <div class="wrapper__content-text content-text--action">
          <v-btn variant="plain" to="/kyc"> Skip </v-btn>

          <v-spacer />

          <v-btn
            rounded="lg"
            icon="mdi-chevron-right"
            color="primary"
            @click="++contentIndexActive"
          />
        </div>
      </div>
    </div>
  </div>
</template>
