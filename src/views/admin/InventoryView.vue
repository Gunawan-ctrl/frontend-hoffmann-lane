<template>
  <div>
    <data-table
      :Headers="headers"
      :data="stokStore.data"
      :loading="stokStore.loading"
      @addItem="addItem"
      @editItem="editItem"
      @deleteItem="deleteItem"
    />
    <DialogAksi
      v-model="stokStore.openDialog"
      title="Hapus Data"
      subtitle="Apakah anda yakin mau menghapus data ini"
      btnSubmit="Hapus"
      @cancel="stokStore.resetDialog"
      :btnloading="stokStore.btnLoading"
      @submit="confirmSubmit"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DataTable from "@/components/DataTable.vue";
import DialogAksi from "@/components/dialog/DialogAksi.vue";
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

const addItem = () => {
  router.push({ name: "addInventory" });
};

const editItem = (id) => {
  router.push({ name: "editInventory", params: { id } });
};

const deleteItem = (id) => {
  console.log("id");
  stokStore.openDialog = true;
  stokStore.idActive = id;
};

const confirmSubmit = () => {
  stokStore.delete(stokStore.idActive);
};

onMounted(() => {
  getData();
});
</script>
