<script setup>
import { useAppStore } from '~/stores/app'

definePageMeta({
  layout: 'basic'
})

const router = useRouter()
const appStore = useAppStore()

const entry = ref({
  ...appStore.kyc
})
const loading = ref(false)

function actionSave() {
  router.push('/app')
}

function actionCancel() {
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
          <v-col cols="12">
            <TypeSelector
              v-model="entry.type"
              label="Tipe"
              placeholder="Masukan tipe"
            />

            <v-text-field
              v-model="entry.name"
              variant="outlined"
              label="Nama"
              placeholder="Masukan nama"
              outlined
              :loading="loading"
            />

            <v-text-field
              v-model="entry.identityNumber"
              variant="outlined"
              label="NIK atau NIS"
              placeholder="Masukan NIK atau NIS"
              outlined
              :loading="loading"
            />
          </v-col>

          <v-col cols="12">
            <v-btn color="primary" block class="mb-4" @click="actionSave">
              Lanjutkan
            </v-btn>

            <v-btn
              color="secondary"
              variant="outlined"
              block
              @click="actionCancel"
            >
              Batal
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
