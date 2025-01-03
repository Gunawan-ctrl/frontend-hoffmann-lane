<template>
  <div class="menu">
    <data-table
      :Headers="headers"
      :data="menuStore.data"
      @addItem="addItem"
      @editItem="editItem"
      @deleteItem="deleteItem"
      @openImage="openDialogImage"
      @updateStatus="updateStatus"
    />

    <v-dialog v-model="menuStore.dialogImage" width="auto">
      <dialog-image />
    </v-dialog>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import DataTable from "@/components/DataTable.vue";
import DialogImage from "@/components/dialog/DialogImage.vue";
import { useMenuStore } from "@/stores/menuStore";

const menuStore = useMenuStore();
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
  { title: "Category", key: "category" },
  { title: "Description", key: "description" },
  { title: "Price", key: "price" },
  { title: "Recomendation", align: "center", key: "status" },
  { title: "Actions", key: "actions", sortable: false, align: "center" },
]);

const getData = async () => {
  await menuStore.getAll();
};

const addItem = () => {
  router.push({ name: "addMenu" });
};

const editItem = (id) => {
  router.push({ name: "editMenu", params: { id } });
};

const updateStatus = (item) => {
  menuStore.updateStatus(item);
};

const openDialogImage = (id) => {
  menuStore.idActive = id;
  menuStore.dialogImage = true;
};

const deleteItem = (id) => {
  console.log(id);
  menuStore.delete(id);
};

onMounted(() => {
  getData();
});
</script>
