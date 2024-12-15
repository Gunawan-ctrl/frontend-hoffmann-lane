<template>
  <v-card>
    <v-breadcrumbs :items="items" divider="/" style="font-size: 14px" />
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    items: {
      type: Object,
      default: null,
    },
  },
};
</script>
