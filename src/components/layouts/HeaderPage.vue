<template>
  <v-app-bar app elevate-on-scroll elevation="0" color="background">
    <v-app-bar-nav-icon
      @click="$emit('drawerEvent')"
      color="btncolor"
    ></v-app-bar-nav-icon>
    <v-spacer />

    <v-badge
      dot
      location="bottom right"
      offset-x="3"
      offset-y="3"
      color="success"
      bordered
      class="mr-4"
    >
      <v-avatar class="cursor-pointer" color="btncolor" variant="tonal">
        <v-icon size="large">mdi-account-circle</v-icon>
      </v-avatar>
      <v-menu activator="parent" width="230" location="top end" offset="1px">
        <v-list>
          <v-list-item>
            <template #prepend>
              <v-list-item-action start>
                <v-badge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <v-avatar color="primary" variant="tonal">
                    <v-icon>mdi-account-circle</v-icon>
                  </v-avatar>
                </v-badge>
              </v-list-item-action>
            </template>
            <v-list-item-title class="font-semibold"> Admin </v-list-item-title>
            <v-list-item-subtitle>Administrator</v-list-item-subtitle>
          </v-list-item>
          <v-divider class="my-2 font-semibold" />

          <v-list-item value="profile">
            <template #prepend>
              <v-icon icon="mdi-account-outline" />
            </template>
            <v-list-item-title> Profile </v-list-item-title>
          </v-list-item>

          <v-list-item link @click="logout()">
            <template #prepend>
              <v-icon icon="mdi-cancel" />
            </template>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-badge>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  localStorage.clear();
  router.push({ name: "login" });
};
</script>
