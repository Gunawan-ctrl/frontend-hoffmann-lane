<template>
  <div class="dashboard">
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="item in data" :key="item.title">
        <CardHeader
          :title="item.title"
          :subtitle="item.subtitle"
          :value="item.value"
        />
      </v-col>
      <v-col cols="12">
        <ChartBar :data="data" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import CardHeader from "@/components/card/CardHeader.vue";
import ChartBar from "@/components/chart/ChartBar.vue";
import { useUserStore } from "@/stores/userStore";
import { useStokStore } from "@/stores/stokStore";

const userStore = useUserStore();
const stokStore = useStokStore();

const totalCustomer = computed(() => {
  return userStore.customer.length;
});

const totalStok = computed(() => {
  return stokStore.data.length;
});

const data = ref([
  {
    title: "Total Transaction",
    subtitle: "Berisi semua data transaksi.",
    value: 100,
  },
  {
    title: "Total Customer",
    subtitle: "Berisi semua data customer.",
    value: totalCustomer,
    icon: "mdi-cart-arrow-down",
  },
  {
    title: "Total Stok",
    subtitle: "Berisi semua data stok.",
    value: totalStok,
    icon: "mdi-cart-arrow-down",
  },
  {
    title: "Total Revenue",
    subtitle: "Berisi semua data revenue.",
    value: 400,
    icon: "mdi-cart-arrow-down",
  },
]);

const getData = async () => {
  await userStore.getAll();
  await stokStore.getAll();
};

onMounted(() => {
  getData();
});
</script>
