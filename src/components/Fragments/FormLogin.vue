<template>
  <v-form @submit.prevent="handleSubmit">
    <Input
      v-model="form.identify"
      autofocus
      placeholder="Username"
      label="Username"
    />
    <Input
      v-model="form.password"
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      label="Password"
      placeholder="Enter your password"
      @click:append-inner="visible = !visible"
      @keyup.enter="handleSubmit"
    />
    <div>
      <Button classes="bg-primary mr-4" @click="handleSubmit"> SIGN-IN </Button>
      <Button classes="border" @click="handleRegister"> Register </Button>
    </div>
  </v-form>
</template>

<script setup>
import Input from "@/components/Elements/Input/Input.vue";
import Button from "@/components/Elements/Button/IndexButton.vue";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const form = reactive({
  identify: "",
  password: "",
});

const router = useRouter();
const visible = ref(false);

const handleSubmit = () => {
  router.push({ name: "dashboard" });
};

const handleRegister = () => {
  router.push({ name: "register" });
};
</script>
