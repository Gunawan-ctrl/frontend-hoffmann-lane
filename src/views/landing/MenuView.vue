<template>
  <v-card class="border-none my-4" id="menu">
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12">
        <v-card
          class="d-flex align-center border-none text-center"
          color="background"
        >
          <v-card-text>
            <p class="text-h4 font-weight-bold">Hoffmann Nourishment</p>

            <div class="text-medium-emphasis">
              Start your day with a warm cup of coffee and delicious food at
              Hoffmann Lane!
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" align="center">
        <v-card class="border-none" color="background">
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
              <v-container fluid>
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
                    <div class="d-flex justify-space-between mx-md-4">
                      <p class="text-h6 font-weight-bold menu-name">
                        {{ menu.name }}
                      </p>
                      <p class="text-end text-h6 font-weight-bold menu-name">
                        {{ $formatCurrency(menu.price) }}
                      </p>
                    </div>
                    <div class="mx-md-4">
                      <p
                        class="text-start text-medium-emphasis text-caption menu-name"
                        style="margin-top: -1px"
                      >
                        {{ menu.description }}
                      </p>
                      <v-btn
                        @click="addToCart(menu)"
                        block
                        class="mt-4"
                        color="btncolor"
                      >
                        Add to Cart
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCategoryStore } from "@/stores/categoryStore";
import { useMenuStore } from "@/stores/menuStore";
import { useOrderStore } from "@/stores/orderStore";
import { useRouter } from "vue-router";
import notify from "@/boot/notify";

const categoryStore = useCategoryStore();
const menuStore = useMenuStore();
const orderStore = useOrderStore();

// const route = useRoute();
const router = useRouter();
const tab = ref(null);
const dataUser = JSON.parse(localStorage.getItem("dataUser"));
const baseImageUrl = import.meta.env.VITE_APP_IMAGE_URL;

const getData = async () => {
  await menuStore.getAll();
  await categoryStore.getAll();
  tab.value = categoryStore.data[0].id;
  getCategoryDefault();
};

const getCategoryById = async (id) => {
  await menuStore.getByCategory(id);
};

const getCategoryDefault = async () => {
  await getCategoryById(tab.value);
};

const addToCart = async (menu) => {
  if (!dataUser) {
    notify.error("Please login first");
    setTimeout(() => {
      router.push({ name: "login" });
    }, 1000);
  } else {
    const payload = {
      id_menu: menu.id,
      id_user: dataUser.id_user,
      total_price: menu.price,
      qty: 1,
    };
    await orderStore.create(payload);
  }
};

onMounted(() => {
  getData();
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jacques+Francois&display=swap");

.menu-name {
  font-family: "Jacques Francois", serif;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
}
</style>
