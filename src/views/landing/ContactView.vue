<template>
  <v-card class="border-none" id="contact">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card
          class="d-flex align-center border-none text-center"
          color="background"
        >
          <v-card-text>
            <p class="text-h4 font-weight-bold">Get in Touch</p>

            <div class="text-medium-emphasis mb-6">
              Let's connect with Hoffmann Lane!
            </div>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-card class="align-center border-none" color="background">
                  <v-img
                    class="mx-auto"
                    src="/logo/logo-1.png"
                    width="250"
                    cover
                  ></v-img>
                  <div
                    class="font-weight-bold text-overline"
                    style="font-size: 50px"
                  >
                    “Human Habitat”
                  </div>
                  <span>at Karel Satsuitubun</span>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-card class="border-none" color="background">
                  <v-card-item>
                    <div
                      class="text-start"
                      style="font-size: 26px; font-weight: 350"
                    >
                      Looking to enjoy the meal in town, or have a question
                      about our menu? We’d love to hear from you! Our team is
                      ready to provide information, take reservations, or even
                      listen to any suggestions you may have..
                    </div>
                  </v-card-item>
                  <v-card-item class="text-start">
                    <v-list-item variant="text">
                      <template v-slot:prepend>
                        <v-icon style="margin-left: -12px">mdi-map</v-icon>
                      </template>

                      <v-list-item-title>
                        Jl. KS. Tubun No.27, Rw. Laut, Kec. Tanjungkarang
                        <br />Timur, Kota Bandar Lampung, Lampung 35128
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item variant="text">
                      <template v-slot:prepend>
                        <v-icon style="margin-left: -12px">mdi-clock</v-icon>
                      </template>

                      <v-list-item-title> 10 AM - 10 PM </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <template v-slot:prepend>
                        <v-icon style="margin-left: -12px">mdi-phone</v-icon>
                      </template>

                      <v-list-item-title> 0812-2974-3400 </v-list-item-title>
                    </v-list-item>
                  </v-card-item>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
