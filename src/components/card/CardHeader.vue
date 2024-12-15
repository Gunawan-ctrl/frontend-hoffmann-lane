<template>
  <v-card elevation="2" class="d-flex border-none">
    <div class="my-2">
      <v-card-item>
        <v-card-title class="font-weight-bold" style="font-size: 14px">
          {{ props.title }}
        </v-card-title>

        <v-card-subtitle style="font-size: 13px">
          {{ props.subtitle }}
        </v-card-subtitle>
      </v-card-item>

      <v-card-text class="font-weight-bold">
        {{ props.value }}
      </v-card-text>
    </div>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  value: {
    type: Number,
    default: 0,
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>

<!-- <script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    value: {
      type: Number,
      default: 0,
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script> -->
