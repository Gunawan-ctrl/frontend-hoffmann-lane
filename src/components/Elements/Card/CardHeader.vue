<template>
  <div>
    <v-card elevation="0" width="400">
      <template v-slot:prepend>
        <v-img :width="50" aspect-ratio="16/9" cover :src="srcLogo" />
      </template>
      <template v-slot:title>
        <span class="font-weight-black">{{ name }}</span>
      </template>
    </v-card>

    <v-card-text class="pt-2">
      <div class="mb-1 text-subtitle-1">
        Welcome to <span class="font-weight-bold">{{ title }}</span>
      </div>
      <p class="font-weight-thin font-italic">
        {{ description }}
      </p>
    </v-card-text>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  srcLogo: String,
  name: String,
  title: String,
  description: String,
});
</script>
