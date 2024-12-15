<template>
  <div>
    <v-avatar class="cursor-pointer" color="primary" variant="tonal">
      <v-img :src="src"></v-img>
    </v-avatar>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  src: String,
});
</script>
