<template>
  <ErrorHeader
    :errorCode="404"
    :errorTitle="'Page Not Found ⚠️'"
    :errorDescription="`We couldn't find the page you are looking for.`"
  />
  <div class="misc-avatar w-100 text-center">
    <v-img
      src="/images/404.png"
      alt="Coming Soon"
      :max-width="600"
      class="mx-auto"
    />
    <v-btn to="/" class="mt-10" color="primary"> Back to Home </v-btn>
  </div>
</template>

<script setup>
import ErrorHeader from "@/components/card/ErrorHeader.vue";
</script>
