<template>
  <VRow align="center" justify="center" style="height: 100vh">
    <VCard width="448" elevation="0" class="border">
      <VCol cols="12" align-self="center">
        <VCardItem class="text-center text-h5">
          <div>Hi There, Welcome to</div>
          <div>Hoffmann Lane</div>
        </VCardItem>
        <VCardText class="pt-2 text-center">
          <p class="mb-0">Please Register Here !</p>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow no-gutters>
              <VCol cols="12" class="my-4">
                <VTextField
                  v-model="form.email"
                  type="email"
                  placeholder="Email"
                  density="compact"
                  variant="outlined"
                />
              </VCol>
              <VCol cols="12" class="my-4">
                <VTextField
                  v-model="form.username"
                  placeholder="Username"
                  density="compact"
                  variant="outlined"
                />
              </VCol>

              <VCol cols="12" class="my-4">
                <VTextField
                  v-model="form.password"
                  placeholder="password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'
                  "
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  density="compact"
                  variant="outlined"
                />
              </VCol>

              <VCol cols="12" class="text-center text-base my-6">
                <VBtn
                  class="text-none"
                  block
                  color="#c1c4ac"
                  type="submit"
                  @click="handleSubmit"
                >
                  Sign up
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCol>
    </VCard>
  </VRow>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const form = reactive({
  username: "",
  email: "",
  password: "",
  privacyPolicies: false,
});

const router = useRouter();
const isPasswordVisible = ref(false);

const handleSubmit = () => {
  router.push({ name: "login" });
};
</script>
