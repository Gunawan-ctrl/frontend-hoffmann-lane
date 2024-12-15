<template>
  <v-btn prepend-icon="" :class="`rounded-lg ${props.classes}`" elevation="0">
    <v-icon left class="text-black">{{ props.btnIcon }}</v-icon>
    <span class="text-black font-weight-bold">{{ props.btnText }}</span>
    <slot></slot>
  </v-btn>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  classes: String,
  btnText: String,
  btnIcon: String,
});
</script>
