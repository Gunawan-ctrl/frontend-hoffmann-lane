<template>
  <home @goToMenu="onGoToMenu" />
  <menu-view id="menu" />
  <recomendation-view id="recomendation" />
  <contact-view />
</template>

<script setup>
import Home from "@/views/landing/HomeView.vue";
import MenuView from "@/views/landing/MenuView.vue";
import RecomendationView from "./RecomendationView.vue";
import ContactView from "./ContactView.vue";

const onGoToMenu = () => {
  console.log("onGo");
  const menuElement = document.getElementById("recomendation");
  if (menuElement) {
    menuElement.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style>
#menu {
  scroll-margin-top: 64px; /* Adjust this value based on your header height */
}
</style>
