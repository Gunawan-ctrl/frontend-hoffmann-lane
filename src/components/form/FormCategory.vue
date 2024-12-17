<template>
  <v-card class="pa-6 pb-8 border-none" elevation="2" rounded="lg">
    <v-form @submit.prevent="addItem">
      <div class="text-subtitle-1 text-medium-emphasis">Name</div>
      <v-text-field
        density="compact"
        placeholder="Masukkan product name anda"
        v-model="form.name"
        variant="outlined"
      >
      </v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">Description</div>
      <v-text-field
        density="compact"
        placeholder="Masukkan price"
        v-model="form.description"
        variant="outlined"
      ></v-text-field>

      <div class="text-center">
        <v-btn
          class="my-8"
          type="submit"
          color="btncolor"
          width="100"
          variant="flat"
        >
          Save
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useCategoryStore } from "@/stores/categoryStore";

const categoryStore = useCategoryStore();
const route = useRoute();
const form = ref({
  name: "",
  description: "",
});

const getData = async () => {
  await categoryStore.getById(route.params.id);
  form.value.name = categoryStore.dataDetail.name;
  form.value.description = categoryStore.dataDetail.description;
};

const addItem = () => {
  if (route.name === "addCategory") {
    categoryStore.create(form.value);
  }
  if (route.name === "editCategory") {
    categoryStore.update(route.params.id, form.value);
  }
};

onMounted(() => {
  if (route.name === "editCategory") {
    getData();
  }
});
</script>
