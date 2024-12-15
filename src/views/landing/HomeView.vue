<template>
  <v-card
    class="border rounded-b-xl"
    elevation="2"
    color="background"
    id="home"
  >
    <v-row class="mx-md-8">
      <v-col cols="12" md="4">
        <v-card
          height="536"
          class="d-flex justify-center align-center border-none"
          color="background"
        >
          <v-img class="mx-auto" src="/assets/image-1.png" cover></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" class="md-pl-12">
        <v-card
          height="536"
          class="d-flex align-center border-none"
          color="background"
        >
          <v-card-text>
            <p class="text-h4">Savor Special</p>
            <p class="text-h4">Moments</p>
            <p class="text-h4">in Every Bite!</p>

            <div class="text-medium-emphasis my-6">
              Visit us today and discover an unforgettable experience<br />
              Because life’s too short to delay happiness, especially the one on
              your plate!
            </div>

            <v-btn class="text-none" color="btncolor" variant="elevated">
              Our Menu
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup></script>
