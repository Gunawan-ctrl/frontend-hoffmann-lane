<template>
  <v-card class="pa-6 pb-8 border-none" elevation="2" rounded="lg">
    <v-form @submit.prevent="addItem">
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>
      <v-text-field
        density="compact"
        placeholder="Masukkan product name anda"
        v-model="form.email"
        type="email"
        variant="outlined"
      >
      </v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">Username</div>
      <v-text-field
        density="compact"
        placeholder="Masukkan description product"
        v-model="form.username"
        variant="outlined"
      ></v-text-field>

      <div v-if="route.name === 'addUser'">
        <div class="text-subtitle-1 text-medium-emphasis">Password</div>
        <v-text-field
          v-model="form.password"
          placeholder="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
          density="compact"
        />
      </div>

      <div class="text-center">
        <v-btn
          class="my-8"
          type="submit"
          color="btncolor"
          width="100"
          variant="flat"
        >
          Save
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();
const form = ref({
  email: "",
  username: "",
});

const isPasswordVisible = ref(false);

const getData = async () => {
  await userStore.getById(route.params.id);
  form.value.email = userStore.dataDetail.email;
  form.value.username = userStore.dataDetail.username;
};

const addItem = () => {
  if (route.name === "addUser") {
    userStore.register(form.value);
    router.push({ name: "administrator" });
  }
  if (route.name === "editUser") {
    userStore.update(route.params.id, form.value);
  }
};

onMounted(() => {
  if (route.name === "editUser") {
    getData();
  }
});
</script>
