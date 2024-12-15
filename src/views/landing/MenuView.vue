<template>
  <v-card class="border-none mt-2" id="menu">
    <v-row>
      <v-col cols="12">
        <v-card
          class="d-flex align-center border-none text-center"
          color="background"
        >
          <v-card-text>
            <p class="text-h4 font-weight-bold">Hoffmann Nourishment</p>

            <div class="text-medium-emphasis mb-8">
              Start your day with a warm cup of coffee and delicious food at
              Hoffmann Lane!
            </div>
            <v-tabs
              v-model="tab"
              align-tabs="center"
              color="primary"
              hide-slider
            >
              <v-tab
                height="40"
                elevation="2"
                variant="flat"
                color="btncolor"
                :value="1"
                class="mr-2"
              >
                Landscape
              </v-tab>
              <v-tab
                height="40"
                elevation="2"
                variant="flat"
                color="btncolor"
                :value="2"
                class="mr-2"
                >City</v-tab
              >
              <v-tab
                height="40"
                elevation="2"
                variant="flat"
                color="btncolor"
                :value="3"
                >Abstract</v-tab
              >
            </v-tabs>

            <v-tabs-window v-model="tab">
              <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
                <v-container fluid>
                  <v-row>
                    <v-col v-for="i in 6" :key="i" cols="12" md="4">
                      <v-card
                        class="mx-auto text-center border-none"
                        elevation="2"
                        max-width="414"
                        height="288"
                        rounded="xl"
                        color="secondary"
                      >
                        <v-img
                          class="mx-auto my-auto mt-8"
                          lazy-src="/assets/image-1.png"
                          src="/assets/image-1.png"
                          height="200"
                          width="300"
                          cover
                        ></v-img>
                      </v-card>
                      <div class="text-start mx-8">
                        <p class="text-h6 mt-2 font-weight-bold">
                          Kyoto Chicken Platters
                        </p>
                        <p class="text-medium-emphasis text-caption">
                          2 chicken wings, 1 upper and lower thigh.
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tabs-window-item>
            </v-tabs-window>

            <div class="pt-8">
              <v-btn
                class="text-black"
                color="black"
                width="206"
                variant="outlined"
                size="large"
              >
                Show More
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const tab = ref(1);
</script>
