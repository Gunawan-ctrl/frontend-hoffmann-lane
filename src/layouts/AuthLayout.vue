<template>
  <v-row>
    <v-col cols="12" md="6">
      <CardImage src="/images/login-image.png" />
    </v-col>

    <v-col cols="12" md="6" align-self="center">
      <CardHeader
        title="GUI Admin"
        description="Please sign-in to your account and start the adventure!"
      />

      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script setup>
import CardImage from "@/components/Elements/Card/CardImage.vue";
import CardHeader from "@/components/Elements/Card/CardHeader.vue";
// import FormLogin from "@/components/Fragments/FormLogin.vue";
</script>
