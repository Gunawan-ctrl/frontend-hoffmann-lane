<template>
  <div>
    <v-card :class="`rounded ${classes}`" :elevation="elevation">
      <slot></slot>
    </v-card>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  classes: String,
  elevation: {
    type: Number,
    default: 0,
  },
});
</script>
