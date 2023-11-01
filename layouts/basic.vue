<script setup>
const layoutCustomProps = useAttrs()

console.info('here :: ', layoutCustomProps)
</script>

<template>
  <v-app id="basic" class="l-basic">
    <v-main class="c-main">
      <v-container class="!p-0">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
