<template>
  <VCard elevation="2" class="border-none">
    <apexchart
      type="bar"
      :options="options"
      :series="series"
      height="390px"
      class="pa-4"
    />
  </VCard>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
const options = ref({
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: props.data.map((item) => item.title),
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
      borderRadius: 5,
      borderRadiusApplication: "end",
    },
  },
});

const series = ref([
  {
    name: "Total",
    data: props.data.map((item) => item.value),
  },
]);

onMounted(() => {
  console.log("props.data", props.data);
});
</script>
