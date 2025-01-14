<template>
  <v-card class="border-none mt-4" id="recomendation">
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
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        v-for="item in menuStore.recomendation"
        :key="item.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="border-none pa-4" color="background">
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

          <div class="d-flex justify-space-between">
            <p class="text-h6 font-weight-bold menu-name mx-md-4">
              {{ item.name }}
            </p>
            <p class="text-end text-h6 font-weight-bold menu-name mx-md-4">
              Rp. {{ item?.price }}
            </p>
          </div>
          <div class="mx-md-4">
            <p
              class="text-start text-medium-emphasis text-caption menu-name"
              style="margin-top: -1px"
            >
              {{ item?.description }}
            </p>
            <v-btn @click="addToCart(item)" block class="mt-4" color="btncolor">
              Add to Cart
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMenuStore } from "@/stores/menuStore";
import { useOrderStore } from "@/stores/orderStore";
import notify from "@/boot/notify";
import { useRouter } from "vue-router";

const orderStore = useOrderStore();
const menuStore = useMenuStore();
const dataUser = JSON.parse(localStorage.getItem("dataUser"));
const router = useRouter();

const baseImage = ref(import.meta.env.VITE_APP_IMAGE_URL);

const getData = async () => {
  await menuStore.getRecomendation();
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
