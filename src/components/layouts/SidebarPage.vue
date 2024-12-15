<template>
  <v-navigation-drawer v-model="drawer" app :width="300" color="secondary">
    <v-sheet class="text-center" color="secondary">
      <v-avatar size="100">
        <v-img src="/logo/logo.png"></v-img>
      </v-avatar>
      <div class="font-weight-bold" style="margin-top: -17px">Devi</div>
      <div
        class="text-capitalize text-overline text-brown-500"
        style="margin-top: -8px"
      >
        Administrator
      </div>
    </v-sheet>

    <v-divider />

    <v-list nav class="text-black">
      <v-list-item
        title="Dashboard"
        prepend-icon="mdi-home"
        value="dashboard"
        :to="{ name: 'dashboard' }"
      >
      </v-list-item>

      <v-list-subheader style="font-size: 14px" class="text-black">
        USERS
      </v-list-subheader>
      <v-list-item
        title="Administrator"
        prepend-icon="mdi-account"
        value="administrator"
        :to="{ name: 'administrator' }"
      >
      </v-list-item>

      <v-list-subheader style="font-size: 14px" class="text-black">
        MENU & STOK
      </v-list-subheader>
      <v-list-item
        title="Stok Inventory"
        prepend-icon="mdi-archive"
        value="inventory"
        :to="{ name: 'inventory' }"
      >
      </v-list-item>
      <v-list-item
        title="Our Menu"
        prepend-icon="mdi-silverware"
        value="ourmenu"
        :to="{ name: 'ourmenu' }"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(true);
</script>
