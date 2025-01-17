<template>
  <v-navigation-drawer v-model="drawer" app :width="275" color="secondary">
    <v-sheet class="text-center" color="secondary">
      <v-avatar size="100">
        <v-img src="/logo/logo.png"></v-img>
      </v-avatar>
      <div class="font-weight-bold" style="margin-top: -17px">
        {{ dataUser.username }}
      </div>
      <div
        class="text-capitalize text-overline text-brown-500"
        style="margin-top: -8px"
      >
        {{ dataUser.role === 1 ? "Administrator" : "User" }}
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
        USERS & STOKS
      </v-list-subheader>
      <v-list-item
        title="Administrator"
        prepend-icon="mdi-account"
        value="administrator"
        :to="{ name: 'administrator' }"
      >
      </v-list-item>

      <v-list-item
        title="Stok Inventory"
        prepend-icon="mdi-archive"
        value="inventory"
        :to="{ name: 'inventory' }"
      >
      </v-list-item>

      <v-list-subheader style="font-size: 14px" class="text-black">
        MENU & KATEGORI
      </v-list-subheader>

      <v-list-item
        title="Kategori"
        prepend-icon="mdi-folder"
        value="category"
        :to="{ name: 'category' }"
      >
      </v-list-item>
      <v-list-item
        title="Our Menu"
        prepend-icon="mdi-silverware"
        value="ourmenu"
        :to="{ name: 'ourmenu' }"
      >
      </v-list-item>

      <v-list-subheader style="font-size: 14px" class="text-black">
        TRANSAKSI & ORDER
      </v-list-subheader>
      <v-list-item
        title="Transaksi"
        prepend-icon="mdi-swap-horizontal"
        value="transaction"
        :to="{ name: 'transaction' }"
      >
      </v-list-item>
      <v-list-item
        title="Order"
        prepend-icon="mdi-receipt"
        value="order"
        :to="{ name: 'order' }"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted } from "vue";

const drawer = ref(true);

const dataUser = ref(JSON.parse(localStorage.getItem("dataUser")));

onMounted(() => {
  console.log(dataUser.value);
});
</script>
