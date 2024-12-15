<template>
  <v-app id="inspire">
    <v-app-bar flat class="px-md-8 border" color="background">
      <v-avatar image="/logo/logo.png" size="80" />

      <v-spacer />

      <v-tabs color="grey-darken-2" centered>
        <v-tab id="home" href="#home" :to="{ name: 'index' }">Home</v-tab>
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
      />
      <v-btn
        class="text-none"
        color="btncolor"
        variant="elevated"
        @click="login"
      >
        Sign In
      </v-btn>
    </v-app-bar>
    <v-main color="background">
      <router-view />
    </v-main>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// const links = ["Home", "Menu", "Recomendation", "Contact"];
const login = () => {
  router.push({ name: "login" });
};
</script>
