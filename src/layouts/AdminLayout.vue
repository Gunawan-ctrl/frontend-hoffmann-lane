<template>
  <v-app id="inspire">
    <sidebar-page v-model="drawer" />
    <header-page @drawerEvent="drawer = !drawer" />
    <v-main>
      <v-container class="px-md-6" fluid color="white">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import SidebarPage from "@/components/layouts/SidebarPage.vue";
import HeaderPage from "@/components/layouts/HeaderPage.vue";
import { ref } from "vue";

const drawer = ref(true);
</script>
