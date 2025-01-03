<template>
  <div class="mx-md-8 mt-4">
    <div class="text-h5 font-weight-bold mb-4">Cart and Checkout</div>
    <v-row>
      <v-col cols="12" md="7">
        <v-card>
          <v-row>
            <v-col cols="12" sm="6" md="5">
              <v-card
                class="ml-4 my-8 text-center border-none"
                elevation="2"
                max-width="414"
                height="200"
                rounded="xl"
                color="secondary"
              >
                <v-img
                  class="mx-auto my-auto"
                  lazy-src="/assets/image-1.png"
                  src="/assets/image-1.png"
                  height="200"
                  width="200"
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="7">
              <v-card-text class="my-8">
                <p class="font-weight-black text-h6">Kyoto Chicken Platters</p>

                <div class="font-weight-medium my-2">
                  2 chicken wings, 1 upper and lower thigh.
                </div>

                <div class="text-medium-emphasis mt-4 mb-8">
                  Categori : New Menu
                </div>

                <div class="d-flex justify-space-between">
                  <p class="font-weight-medium text-h5">Rp 50.000</p>
                  <v-row justify="end">
                    <v-col cols="6">
                      <v-number-input
                        control-variant="split"
                        :min="1"
                        variant="outlined"
                        :model-value="1"
                        inset
                      ></v-number-input>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
            </v-col>
          </v-row>
          <v-card class="border-none mx-4">
            <div class="text-subtitle-1 text-uppercase">Add Comment</div>
            <v-text-field
              density="compact"
              v-model="form.name"
              variant="outlined"
            >
            </v-text-field>
          </v-card>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto">
          <v-card-text>
            <div class="text-h6 font-weight-black">PRICE SUMMARY (1 item)</div>
            <v-row>
              <v-col cols="12" md="6">
                <p class="my-3">Total</p>
                <p class="my-3">Discount</p>
                <p class="my-3">PPN 10%</p>
                <p class="my-3">Subtotal</p>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" md="6" align="end">
                <p class="my-3">Rp 100.000</p>
                <p class="my-3">Rp 10.000</p>
                <p class="my-3">Rp 9.000</p>
                <p class="my-3">Rp 99.000</p>
              </v-col>
            </v-row>

            <div class="text-medium-emphasis mt-4">
              The prices above include shipping costs
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
const form = ref({
  name: "",
});
</script>
