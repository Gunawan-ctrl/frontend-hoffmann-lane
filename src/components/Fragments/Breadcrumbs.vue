<template>
  <div>
    <Card :elevation="1">
      <VBreadcrumbs :items="items" divider="/" style="font-size: 14px" />
    </Card>
  </div>
</template>

<script setup>
import Card from "@/components/Elements/Card/Index.vue";

const props = defineProps({
  items: Object,
});
</script>
