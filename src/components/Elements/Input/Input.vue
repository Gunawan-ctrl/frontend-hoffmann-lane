<template>
  <v-text-field
    :type="type"
    :label="label"
    :placeholder="placeholder"
    :append-inner-icon="appendInnerIcon"
    density="compact"
    variant="outlined"
    color="primary"
  />
</template>

<script setup>
const props = defineProps({
  type: String,
  label: String,
  placeholder: String,
  appendInnerIcon: String,
  density: String,
  variant: String,
  color: String,
});
</script>
