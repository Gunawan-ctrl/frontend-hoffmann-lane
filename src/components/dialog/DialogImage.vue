<template>
  <div>
    <v-card rounded="lg" width="450" class="text-center">
      <v-card-title class="d-flex justify-space-between align-center">
        <div class="text-h5 text-medium-emphasis ps-2">
          {{ menuStore.dataDetail.name }}
        </div>

        <v-btn
          icon="mdi-close"
          variant="text"
          @click="menuStore.resetDialogImage"
        ></v-btn>
      </v-card-title>

      <v-divider class="mb-4"></v-divider>

      <v-card-text>
        <div class="text-medium-emphasis mb-1">
          <v-img
            class="mx-auto"
            height="300"
            max-width="500"
            :src="imageUrl + menuStore.dataDetail.upload_menu"
          ></v-img>
        </div>

        <v-btn
          class="text-none font-weight-bold ms-n4"
          color="primary"
          :text="menuStore.dataDetail.description"
          variant="text"
        ></v-btn>
      </v-card-text>

      <v-divider class="mt-2"></v-divider>

      <v-card-actions class="my-2 d-flex justify-end">
        <v-btn
          class="text-none"
          color="btncolor"
          rounded="xl"
          text="Back"
          variant="flat"
          @click="menuStore.resetDialogImage"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMenuStore } from "@/stores/menuStore";

const imageUrl = ref(import.meta.env.VITE_APP_IMAGE_URL);

const menuStore = useMenuStore();

const getData = async () => {
  await menuStore.getById(menuStore.idActive);
};

onMounted(() => {
  getData();
});
</script>
