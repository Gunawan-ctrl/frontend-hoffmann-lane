<template>
  <div class="menu">
    <data-table
      :Headers="headers"
      :data="categoryStore.data"
      @showDetail="showDetail"
      @addItem="addItem"
      @editItem="editItem"
      @deleteItem="deleteItem"
    />

    <DialogAksi
      v-model="categoryStore.openDialog"
      title="Hapus Data"
      subtitle="Apakah anda yakin mau menghapus data ini"
      btnSubmit="Hapus"
      @cancel="categoryStore.resetDialog"
      :btnloading="categoryStore.btnLoading"
      @submit="confirmSubmit"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import DataTable from "@/components/DataTable.vue";
import DialogAksi from "@/components/dialog/DialogAksi.vue";
import { useCategoryStore } from "@/stores/categoryStore";

const categoryStore = useCategoryStore();
const router = useRouter();
const headers = ref([
  {
    title: "No",
    align: "start",
    sortable: false,
    key: "no",
    value: "no",
  },
  { title: "Name", key: "name" },
  { title: "Description", key: "description" },
  { title: "Actions", key: "actions", sortable: false, align: "center" },
]);

const getData = async () => {
  await categoryStore.getAll();
};

const addItem = () => {
  router.push({ name: "addCategory" });
};
const showDetail = (item) => {
  console.log(item);
};

const editItem = (id) => {
  router.push({ name: "editCategory", params: { id } });
};

const deleteItem = (id) => {
  categoryStore.openDialog = true;
  categoryStore.idActive = id;
};

const confirmSubmit = () => {
  categoryStore.delete(categoryStore.idActive);
};

onMounted(() => {
  getData();
});
</script>
