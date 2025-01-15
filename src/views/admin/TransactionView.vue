<template>
  <div class="menu">
    <data-table
      :Headers="headers"
      :data="transactionStore.data"
      @showDetail="showDetail"
      @editItem="editItem"
      @deleteItem="deleteItem"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import DataTable from "@/components/DataTable.vue";
import { useTransactionStore } from "@/stores/transactionStore";

const transactionStore = useTransactionStore();

const router = useRouter();
const headers = ref([
  {
    title: "No",
    align: "start",
    sortable: false,
    key: "no",
    value: "no",
  },
  { title: "Name", key: "username_transaction" },
  { title: "Email", key: "email_transaction" },
  { title: "Price", key: "total_price" },
  { title: "Total", key: "gross_amount" },
  { title: "Payment Type", key: "payment_type" },
  { title: "Status", key: "transaction_status" },
  { title: "Actions", key: "actions", sortable: false, align: "center" },
]);

const getData = async () => {
  await transactionStore.getAll();
};

const showDetail = (item) => {
  console.log(item);
};

const editItem = (id) => {
  router.push({ name: "editCategory", params: { id } });
};

const deleteItem = (id) => {
  transactionStore.openDialog = true;
  transactionStore.idActive = id;
};

onMounted(() => {
  getData();
});
</script>
