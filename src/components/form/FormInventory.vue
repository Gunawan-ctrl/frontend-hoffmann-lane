<template>
  <v-card class="pa-6 pb-8 border-none" elevation="2" rounded="lg">
    <v-form @submit.prevent="addItem">
      <div class="text-subtitle-1 text-medium-emphasis">Product Name</div>
      <v-text-field
        density="compact"
        placeholder="Masukkan product name anda"
        v-model="form.name"
        variant="outlined"
      >
      </v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">Price</div>
      <v-text-field
        density="compact"
        placeholder="Masukkan price"
        v-model="form.price"
        type="number"
        prefix="Rp"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Stock Quantity
      </div>

      <v-text-field
        density="compact"
        placeholder="Masukkan jumlah stok"
        v-model="form.stok"
        type="number"
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
import { useStokStore } from "@/stores/stokStore";
import { useRoute } from "vue-router";

const stokStore = useStokStore();
const route = useRoute();
const form = ref({
  name: "",
  price: 0,
  stok: null,
});

const getData = async () => {
  await stokStore.getById(route.params.id);
  form.value.name = stokStore.dataDetail.name;
  form.value.price = stokStore.dataDetail.price;
  form.value.stok = stokStore.dataDetail.stok;
};

const addItem = () => {
  if (route.name === "addInventory") {
    stokStore.create(form.value);
  }
  if (route.name === "editInventory") {
    stokStore.update(route.params.id, form.value);
  }
};

onMounted(() => {
  if (route.name === "editInventory") {
    getData();
  }
  // getData();
});
</script>
