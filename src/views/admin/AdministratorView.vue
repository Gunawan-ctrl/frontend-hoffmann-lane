<template>
  <div class="about">
    <data-table
      :Headers="headers"
      :data="userStore.data"
      @showDetail="showDetail"
      @addItem="addItem"
      @editItem="editItem"
      @deleteItem="deleteItem"
      @changePassword="changePassword"
    />

    <DialogAksi
      v-model="userStore.openDialog"
      title="Hapus Data"
      subtitle="Apakah anda yakin mau menghapus data ini"
      btnSubmit="Hapus"
      @cancel="userStore.resetDialog"
      :btnloading="userStore.btnLoading"
      @submit="confirmSubmit"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DataTable from "@/components/DataTable.vue";
import DialogAksi from "@/components/dialog/DialogAksi.vue";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const headers = ref([
  {
    title: "No",
    align: "start",
    sortable: false,
    key: "no",
    value: "no",
  },
  { title: "Email", key: "email" },
  { title: "Username", key: "username" },
  { title: "Role", key: "role" },
  { title: "Actions", key: "actions", sortable: false, align: "center" },
]);

const getData = async () => {
  await userStore.getAll();
};

const showDetail = (item) => {
  console.log(item);
};

const addItem = () => {
  router.push({ name: "addUser" });
};

const editItem = (id) => {
  router.push({ name: "editUser", params: { id } });
};

const changePassword = () => {};

const deleteItem = (id) => {
  userStore.openDialog = true;
  userStore.idActive = id;
};

const confirmSubmit = () => {
  userStore.deleteOne(userStore.idActive);
};

onMounted(() => {
  getData();
});
</script>
