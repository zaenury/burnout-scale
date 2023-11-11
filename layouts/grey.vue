<script setup>
import { useGlobalSnackbar } from '@/composables/components/use-global-snackbar'

const globalSnackbar = useGlobalSnackbar()
const { reset: resetSnackbar } = globalSnackbar

const snackbarState = reactive(globalSnackbar.state)
</script>

<template>
  <v-app id="grey" class="l-grey">
    <v-main class="c-main">
      <v-container class="!p-0">
        <slot />
      </v-container>

      <!-- Snackbar -->
      <snackbar
        v-model="snackbarState.opened"
        :text="snackbarState.text"
        :color="snackbarState.color"
        @close="resetSnackbar(5000)"
      />
    </v-main>
  </v-app>
</template>
