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
      <v-col cols="12" sm="6" md="8">
        <ChartBar :data="data" />
      </v-col>
      <v-col>
        <v-card elevation="2" height="500">
          <v-card-item>
            <v-card-title>Popular Product</v-card-title>
          </v-card-item>
          <v-carousel show-arrows="hover" hide-delimiters>
            <v-carousel-item>
              <v-card class="border-none rounded-none">
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  height="200"
                  class="rounded-none"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  cover
                ></v-img>

                <v-card-item>
                  <v-card-title>Cafe Badilico</v-card-title>

                  <v-card-subtitle>
                    <span class="me-1">Local Favorite</span>

                    <v-icon
                      color="error"
                      icon="mdi-fire-circle"
                      size="small"
                    ></v-icon>
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :model-value="4.5"
                      color="amber"
                      density="compact"
                      size="small"
                      half-increments
                      readonly
                    ></v-rating>

                    <div class="text-grey ms-4">4.5 (413)</div>
                  </v-row>

                  <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                  <div>
                    Small plates, salads & sandwiches - an intimate setting with
                    12 indoor seats plus patio seating.
                  </div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>

                <v-card-actions>
                  <v-btn
                    color="deep-purple-lighten-2"
                    text="Reserve"
                    block
                    border
                    @click="reserve"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card class="border-none rounded-none">
                <template v-slot:loader="{ isActive }">
                  <v-progress-linear
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  height="200"
                  class="rounded-none"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  cover
                ></v-img>

                <v-card-item>
                  <v-card-title>Cafe Badilico</v-card-title>

                  <v-card-subtitle>
                    <span class="me-1">Local Favorite</span>

                    <v-icon
                      color="error"
                      icon="mdi-fire-circle"
                      size="small"
                    ></v-icon>
                  </v-card-subtitle>
                </v-card-item>

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :model-value="4.5"
                      color="amber"
                      density="compact"
                      size="small"
                      half-increments
                      readonly
                    ></v-rating>

                    <div class="text-grey ms-4">4.5 (413)</div>
                  </v-row>

                  <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                  <div>
                    Small plates, salads & sandwiches - an intimate setting with
                    12 indoor seats plus patio seating.
                  </div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>

                <v-card-actions>
                  <v-btn
                    color="deep-purple-lighten-2"
                    text="Reserve"
                    block
                    border
                    @click="reserve"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardHeader from "@/components/card/CardHeader.vue";
import ChartBar from "@/components/chart/ChartBar.vue";

const data = ref([
  {
    title: "Total Transaction",
    subtitle: "Berisi semua data transaksi.",
    value: 100,
  },
  {
    title: "Total Customer",
    subtitle: "Berisi semua data customer.",
    value: 200,
    icon: "mdi-cart-arrow-down",
  },
  {
    title: "Total Production",
    subtitle: "Berisi semua data production.",
    value: 300,
    icon: "mdi-cart-arrow-down",
  },
  {
    title: "Total Revenue",
    subtitle: "Berisi semua data revenue.",
    value: 400,
    icon: "mdi-cart-arrow-down",
  },
]);
</script>
