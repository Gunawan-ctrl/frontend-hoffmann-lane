<template>
  <div>
    <v-card elevation="0">
      <v-img :src="props.src" cover :height="760" aspect-ratio="1/1" />
    </v-card>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  src: String,
});
</script>
