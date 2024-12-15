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

        <v-card-text class="py-4">
          <v-form @submit.prevent="login">
            <v-text-field
              v-model="form.email"
              type="email"
              placeholder="Email"
              required
              variant="outlined"
              density="compact"
            />
            <v-text-field
              class="mt-4"
              v-model="form.password"
              placeholder="Password"
              type="password"
              required
              variant="outlined"
              density="compact"
            />
            <div class="text-end">
              <RouterLink class="text-decoration-none" to="">
                Forgot password ?
              </RouterLink>
            </div>
          </v-form>
        </v-card-text>
        <v-card-text>
          <v-btn
            color="btncolor"
            @click="login"
            :loading="loading"
            :disabled="loading"
          >
            Sign In
          </v-btn>
        </v-card-text>
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
import { useRouter } from "vue-router";

const form = ref({
  email: "",
  password: "",
});
const loading = ref(false);

const router = useRouter();

const login = async () => {
  loading.value = true;
  try {
    router.push({ name: "dashboard" });
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>

<style>
body {
  overflow: hidden;
}
</style>
