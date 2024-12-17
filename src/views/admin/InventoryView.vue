<template>
  <div class="about">
    <data-table
      :Headers="headers"
      :data="stokStore.data"
      :loading="stokStore.loading"
      @addItem="addItem"
      @editItem="editItem"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DataTable from "@/components/DataTable.vue";
import { useStokStore } from "@/stores/stokStore";
import { useRouter } from "vue-router";

const stokStore = useStokStore();
const router = useRouter();
const headers = ref([
  {
    title: "No",
    align: "start",
    sortable: false,
    key: "no",
    value: "no",
  },
  { title: "Product Name", key: "name" },
  { title: "Price", key: "price" },
  { title: "Stock Quantity", key: "stok", align: "center" },
  { title: "Actions", key: "actions", sortable: false, align: "center" },
]);

const getData = async () => {
  await stokStore.getAll();
};

// const stokWithNumber = ref([]);

// const updateUsersWithNumber = async () => {
//   setTimeout(() => {
//     stokWithNumber.value = stokStore.stoks.map((user, index) => ({
//       ...user,
//       number: index + 1,
//     }));
//   }, 100);
// };

const addItem = () => {
  router.push({ name: "addInventory" });
};

const editItem = (id) => {
  console.log(id);
  router.push({ name: "editInventory", params: { id } });
};

const deleteItem = (id) => {
  console.log(id);
  stokStore.delete(id);
};

onMounted(() => {
  getData();
});

// watch(
//   () => stokStore.stoks,
//   () => {
//     updateUsersWithNumber();
//   },
//   { immediate: true }
// );
</script>
