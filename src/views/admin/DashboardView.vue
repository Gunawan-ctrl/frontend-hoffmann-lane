<template>
  <div class="dashboard">
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <CardHeader
          title="Total Transaction"
          subtitle="Berisi semua data transaksi."
          :value="400"
        />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <CardHeader
          title="Total Customer"
          subtitle="Berisi semua data customer."
          :value="400"
          icon="mdi-cart-arrow-down"
        />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <CardHeader
          title="Total Production"
          subtitle="Berisi semua data production."
          :value="400"
          icon="mdi-cart-arrow-down"
        />
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <CardHeader
          title="Total Revenue"
          subtitle="Berisi semua data revenue."
          :value="400"
          icon="mdi-cart-arrow-down"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import CardHeader from "@/components/card/CardHeader.vue";
</script>
