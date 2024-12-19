<template>
  <v-app id="inspire">
    <v-app-bar flat class="px-md-8 border" color="background">
      <v-avatar image="/logo/logo.png" size="80" />

      <v-spacer />

      <v-tabs color="grey-darken-2" centered v-if="$vuetify.display.mdAndUp">
        <v-tab id="home" href="#home" :to="{ name: 'home' }">Home</v-tab>
        <v-tab id="menu" href="#menu" :to="{ name: 'menu' }">Menu</v-tab>
        <v-tab
          id="recomendation"
          href="#recomendation"
          :to="{ name: 'recomendation' }"
        >
          Recomendation
        </v-tab>
        <v-tab id="contact" href="#contact" :to="{ name: 'contact' }">
          Contact
        </v-tab>
      </v-tabs>
      <v-spacer />

      <v-btn
        density="default"
        icon="mdi-cart"
        variant="text"
        size="large"
        class="mr-4"
        @click="goToCart"
      />
      <v-btn
        class="text-none mr-2"
        color="btncolor"
        variant="elevated"
        @click="login"
      >
        Sign In
      </v-btn>
      <v-app-bar-nav-icon
        v-if="!$vuetify.display.mdAndUp"
        variant="text"
        @click="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-menu
      v-if="!$vuetify.display.mdAndUp"
      v-model="drawer"
      width="230"
      location="end"
      offset="1px"
    >
      <v-list>
        <!-- <v-list :item="items"></v-list> -->
        <v-list-item :to="{ name: 'home' }">
          <template #prepend>
            <v-icon icon="mdi-home-outline" />
          </template>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item link :to="{ name: 'menu' }">
          <template #prepend>
            <v-icon icon="mdi-food" />
          </template>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'recomendation' }">
          <template #prepend>
            <v-icon icon="mdi-star-outline" />
          </template>
          <v-list-item-title>Recomendation</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'contact' }">
          <template #prepend>
            <v-icon icon="mdi-phone-outline" />
          </template>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-main color="background">
      <router-view />
    </v-main>
  </v-app>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const drawer = ref(false);
// const items = [{
//   menu: 'Home'
// }];

const goToCart = () => {
  router.push({ name: "cart" });
};
const login = () => {
  router.push({ name: "login" });
};
</script>
