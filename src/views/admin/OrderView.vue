<template>
  <div class="menu">
    <data-table :Headers="headers" :data="orderStore.data" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DataTable from "@/components/DataTable.vue";
// import DialogImage from "@/components/dialog/DialogImage.vue";
// import { useMenuStore } from "@/stores/menuStore";
import { useOrderStore } from "@/stores/orderStore";

// const menuStore = useMenuStore();
const orderStore = useOrderStore();
const headers = ref([
  {
    title: "No",
    align: "start",
    sortable: false,
    key: "no",
    value: "no",
  },
  { title: "Customer", key: "user" },
  { title: "Menu", key: "menu" },
  { title: "Status Order", key: "order_status" },
  { title: "Total Bayar", key: "gross_amount" },
  { title: "Qty", key: "qty" },
]);

const getData = async () => {
  // await menuStore.getAll();
  await orderStore.getAll();
};

onMounted(() => {
  getData();
});
</script>
