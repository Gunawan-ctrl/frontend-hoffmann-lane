<template>
  <v-list-item class="mb-4">
    <template v-slot:prepend>
      <v-btn
        style="margin-left: -15px"
        icon="mdi-arrow-left"
        size="medium"
        variant="text"
        color="black"
        class="mr-4"
        @click="router.back()"
      />
    </template>
    <template v-slot:title>
      <span class="font-weight-bold text-h6">{{ route.meta.title }}</span>
    </template>
  </v-list-item>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>
