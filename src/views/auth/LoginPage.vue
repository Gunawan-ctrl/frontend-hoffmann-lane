<template>
  <v-row no-gutters align="center" justify="center">
    <v-col cols="12" md="6">
      <v-card
        :disabled="loading"
        :loading="loading"
        class="border-none overflow-hidden"
      >
        <v-img src="images/login-image1.png" height="100%" />
      </v-card>
    </v-col>
    <v-col cols="12" md="6" align="center">
      <v-card
        max-width="400"
        class="border-none text-center my-8 overflow-hidden"
        elevation="0"
        color="background"
      >
        <v-card-item class="text-center text-h5 my-4">
          <div>Hi There</div>
          <div>Welcome to</div>
          <div>Hoffmann Lane</div>
        </v-card-item>

        <v-form v-model="valid" @submit.prevent="login">
          <v-card-text class="py-4">
            <v-text-field
              v-model="form.email"
              type="email"
              :rules="[
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
              ]"
              placeholder="Email"
              required
            />
            <v-text-field
              class="mt-4"
              v-model="form.password"
              placeholder="Password"
              :type="isPasswordVisible ? 'text' : 'password'"
              :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="isPasswordVisible = !isPasswordVisible"
              :rules="[
                (v) => !!v || 'Password is required',
                (v) =>
                  (v && v.length >= 4) ||
                  'Password must be less than 4 characters',
              ]"
              density="compact"
            />
            <div class="text-end">
              <RouterLink class="text-decoration-none" to="">
                Forgot password ?
              </RouterLink>
            </div>
          </v-card-text>
          <v-card-text>
            <v-btn
              color="btncolor"
              type="submit"
              :disabled="!valid"
              :loading="loading"
            >
              Sign In
            </v-btn>
          </v-card-text>
        </v-form>

        <span>Don't have an account?</span>
        <RouterLink
          class="text-primary text-decoration-none"
          :to="{ name: 'register' }"
        >
          Register now
        </RouterLink>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";

// store
const userStore = useUserStore();

// state
const form = ref({
  email: "",
  password: "",
});
const loading = ref(false);
const isPasswordVisible = ref(false);
const valid = ref(true);

// methods
const login = async () => {
  await userStore.login(form.value);
};
</script>

<style>
body {
  overflow: hidden;
}
</style>
