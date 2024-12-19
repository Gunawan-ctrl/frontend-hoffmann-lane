<template>
  <v-card class="border-none mt-2" id="menu">
    <v-row>
      <v-col cols="12">
        <v-card
          class="d-flex align-center border-none text-center"
          color="background"
        >
          <v-card-text>
            <p class="text-h4 font-weight-bold">Hoffmann Nourishment</p>

            <div class="text-medium-emphasis mb-8">
              Start your day with a warm cup of coffee and delicious food at
              Hoffmann Lane!
            </div>
            <v-tabs
              v-model="tab"
              align-tabs="center"
              color="background"
              class="border-none"
              hide-slider
            >
              <v-row align="center" justify="center">
                <v-col cols="12" md="12">
                  <v-tab
                    height="40"
                    elevation="2"
                    class="ma-1"
                    variant="flat"
                    color="btncolor"
                    v-for="category in categoryStore.data"
                    :key="category.id"
                    :value="category.id"
                    @click="getCategoryById(category.id)"
                  >
                    {{ category.name }}
                  </v-tab>
                </v-col>
              </v-row>
            </v-tabs>

            <v-tabs-window v-model="tab">
              <v-tabs-window-item
                v-for="category in categoryStore.data"
                :key="category.id"
                :value="category.id"
              >
                <v-container fluid class="mx-md-2">
                  <v-row align="center" justify="center">
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                      v-for="menu in menuStore.dataMenuByCategory"
                      :key="menu.id"
                    >
                      <v-card
                        class="border-none"
                        elevation="2"
                        max-width="414"
                        height="288"
                        rounded="xl"
                        color="secondary"
                      >
                        <v-img
                          class="mx-auto my-auto mt-8"
                          :src="baseImageUrl + menu.upload_menu"
                          height="200"
                          width="300"
                          cover
                        ></v-img>
                      </v-card>
                      <div class="text-start mx-8">
                        <p class="text-h6 mt-2 font-weight-bold">
                          {{ menu.name }}
                        </p>
                        <p class="text-medium-emphasis text-caption">
                          {{ menu.description }}
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tabs-window-item>
            </v-tabs-window>

            <div class="pt-8">
              <v-btn
                class="text-black"
                color="black"
                width="206"
                variant="outlined"
                size="large"
              >
                Show More
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCategoryStore } from "@/stores/categoryStore";
import { useMenuStore } from "@/stores/menuStore";

const categoryStore = useCategoryStore();
const menuStore = useMenuStore();

const tab = ref(null);
const baseImageUrl = import.meta.env.VITE_APP_IMAGE_URL;

const getData = async () => {
  await menuStore.getAll();
  await categoryStore.getAll();
  tab.value = categoryStore.data[0].id;
  getCategoryDefault();
};

const getCategoryById = async (id) => {
  console.log("id", id);
  await menuStore.getByCategory(id);
};

const getCategoryDefault = async () => {
  await getCategoryById(tab.value);
};

onMounted(() => {
  getData();
});
</script>
