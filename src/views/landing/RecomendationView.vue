<template>
  <v-card class="border-none mt-2" id="recomendation">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card
          class="d-flex align-center border-none text-center"
          color="background"
        >
          <v-card-text>
            <p class="text-h4 font-weight-bold">Hoffmann Recomendation</p>

            <div class="text-medium-emphasis mb-6">
              See our best seller menu and recomendation for you!
            </div>

            <v-container fluid class="mx-md-2">
              <v-row align="center" justify="center">
                <v-col
                  v-for="item in menuStore.dataRecomendation"
                  :key="item.id"
                  cols="12"
                  sm="6"
                  md="4"
                  class="text-center"
                >
                  <v-card
                    class="mx-auto text-center border-none"
                    elevation="2"
                    max-width="414"
                    height="288"
                    rounded="xl"
                    color="secondary"
                  >
                    <v-img
                      class="mx-auto my-auto mt-8"
                      lazy-src="/assets/image-1.png"
                      :src="baseImage + item.upload_menu"
                      height="200"
                      width="300"
                      cover
                    ></v-img>
                  </v-card>
                  <div class="text-start mx-8">
                    <p class="text-h6 mt-2 font-weight-bold">
                      {{ item.name }}
                    </p>
                    <p class="text-medium-emphasis text-caption">
                      {{ item.description }}
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMenuStore } from "@/stores/menuStore";

const menuStore = useMenuStore();

const baseImage = ref(import.meta.env.VITE_APP_IMAGE_URL);

const getData = async () => {
  await menuStore.getRecomendation(true);
};

onMounted(() => {
  getData();
});
</script>
