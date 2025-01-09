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

      <div class="text-subtitle-1 text-medium-emphasis">Category</div>
      <v-select
        density="compact"
        :items="categoryStore.option"
        v-model="form.idKategori"
        item-title="name"
        item-value="id"
        variant="outlined"
      ></v-select>

      <div class="text-subtitle-1 text-medium-emphasis">Description</div>
      <v-text-field
        density="compact"
        placeholder="Masukkan description product"
        v-model="form.description"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Price
      </div>

      <v-text-field
        density="compact"
        placeholder="Masukkan price stok"
        type="number"
        prefix="Rp"
        v-model="form.price"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Image
      </div>
      <v-file-input
        variant="outlined"
        label="Choose Image ..."
        v-model="upload_menu"
        accept="image/*"
        prepend-inner-icon="mdi-image"
        prepend-icon=""
        required
      />

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
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCategoryStore } from "@/stores/categoryStore";
import { useMenuStore } from "@/stores/menuStore";

const categoryStore = useCategoryStore();
const route = useRoute();
const menuStore = useMenuStore();
const form = ref({
  name: "",
  description: "",
  price: null,
  idKategori: null,
  status: false,
});
const upload_menu = ref(null);

const getData = async () => {
  await categoryStore.getAll();
  if (route.name === "editMenu") {
    await menuStore.getById(route.params.id);
    form.value = menuStore.dataDetail;
    form.value.idKategori = menuStore.dataDetail.category.idKategori;
    console.log("form.value", form.value);
  }
};
const addItem = () => {
  const formData = new FormData();
  formData.append("upload_menu", upload_menu.value);
  formData.append("name", form.value.name);
  formData.append("description", form.value.description);
  formData.append("price", form.value.price);
  formData.append("idKategori", form.value.idKategori);
  formData.append("status", form.value.status);
  if (route.name === "editMenu") {
    menuStore.update(route.params.id, formData);
  }
  if (route.name === "addMenu") {
    menuStore.create(formData);
  }
};

onMounted(() => {
  getData();
});
</script>
