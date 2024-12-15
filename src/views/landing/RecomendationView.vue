<template>
  <v-card class="border-none mt-2" id="recomendation">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card
          class="d-flex align-center border-none text-center"
          color="background"
        >
          <v-card-text>
            <p class="text-h4 font-weight-bold">Hoffmann Recomendation</p>

            <div class="text-medium-emphasis mb-6">
              See our best seller menu and recomendation for you!
            </div>

            <v-container fluid class="mx-md-2">
              <v-row>
                <v-col
                  v-for="i in 6"
                  :key="i"
                  cols="12"
                  md="4"
                  class="text-center"
                >
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
