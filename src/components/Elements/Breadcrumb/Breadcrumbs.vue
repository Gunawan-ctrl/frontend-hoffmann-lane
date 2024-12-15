<template>
  <div>
    <v-breadcrumbs :items="items" divider="/" style="font-size: 14px" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  items: Object,
});
</script>
