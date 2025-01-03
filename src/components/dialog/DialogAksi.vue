<template>
  <v-dialog
    :model-value="modelValue"
    width="auto"
    @click:outside="$emit('cancel')"
  >
    <v-card class="text-subtitle-2" rounded="lg" width="360px">
      <v-card-title class="font-weight-bold">{{ title }}</v-card-title>
      <v-divider :thickness="1" class="border-opacity-10 px-2"></v-divider>
      <v-card-text> {{ subtitle }} </v-card-text>

      <v-card-actions class="pa-4">
        <v-btn
          color="black"
          variant="outlined"
          @click="$emit('cancel')"
          width="50%"
        >
          Kembali
        </v-btn>
        <v-btn
          type="submit"
          :loading="btnloading"
          class="ml-4"
          @click="$emit('submit')"
          :variant="
            btnSubmit === 'Simpan'
              ? 'flat'
              : btnSubmit === 'Publikasikan'
              ? 'flat'
              : btnSubmit === 'Update'
              ? 'flat'
              : 'outlined'
          "
          :color="
            btnSubmit === 'Simpan'
              ? 'primary'
              : btnSubmit === 'Publikasikan'
              ? 'primary'
              : btnSubmit === 'Update'
              ? 'primary'
              : 'red'
          "
          width="45%"
        >
          {{ btnSubmit }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
  title: String,
  subtitle: String,
  btnSubmit: String,
  btnloading: Boolean,
});

defineEmits(["cancel", "submit", "update:modelValue"]);
</script>
