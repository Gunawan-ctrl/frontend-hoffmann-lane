<template>
  <div class="mx-md-8 mt-8">
    <div class="text-h5 font-weight-bold mb-4">Cart and Checkout</div>
    <v-row>
      <v-col cols="12" md="7">
        <v-card>
          <v-row
            no-gutters
            v-for="order in orderStore.dataOrder"
            :key="order.id"
          >
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
                  :src="baseImageUrl + order.menu.upload_menu"
                  height="200"
                  width="200"
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="7">
              <v-card-text class="my-8">
                <div class="d-flex justify-space-between">
                  <p class="font-weight-black text-h6">
                    {{ order.menu.name }}
                  </p>
                  <v-row justify="end">
                    <v-col align="end">
                      <v-btn
                        icon
                        variant="text"
                        @click="deleteOrder(order.id)"
                        class="mr-4"
                        color="red"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>

                <div class="font-weight-medium my-2">
                  {{ order.menu.description }}
                </div>

                <div class="text-medium-emphasis mt-4 mb-8">
                  Categories : {{ order.menu.category.name }}
                </div>

                <div class="d-flex justify-space-between">
                  <p class="font-weight-medium text-h5">
                    {{ $formatCurrency(order.menu.price * order.qty) }}
                  </p>
                  <v-row justify="end">
                    <v-col cols="6">
                      <v-number-input
                        control-variant="split"
                        :min="1"
                        variant="outlined"
                        :model-value="order.qty"
                        inset
                        @update:model-value="
                          (newQty) =>
                            updateOrderQty({ ...order, qty: parseInt(newQty) })
                        "
                      ></v-number-input>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
            </v-col>
          </v-row>
          <v-card class="border-none mx-4 mt-4">
            <div class="text-subtitle-1 text-uppercase">Add Comment</div>
            <v-text-field
              density="compact"
              v-model="form.comment"
              variant="outlined"
            >
            </v-text-field>
          </v-card>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>
            <div class="text-h6 font-weight-black">PRICE SUMMARY (1 item)</div>
            <v-row>
              <v-col cols="6">
                <p class="my-3">Total</p>
                <p class="my-3">Discount</p>
                <p class="my-3">PPN 10%</p>
                <p class="my-3">Subtotal</p>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="6" align="end">
                <p class="my-3">{{ $formatCurrency(totalPrice) }}</p>
                <p class="my-3">Rp 0</p>
                <p class="my-3">{{ $formatCurrency(ppn) }}</p>
                <p class="my-3">{{ $formatCurrency(subtotal) }}</p>
              </v-col>
            </v-row>

            <div class="text-medium-emphasis mt-4">
              The prices above include shipping costs
            </div>
          </v-card-text>
        </v-card>
        <div class="mt-4">
          <v-btn
            variant="outlined"
            block
            class="text-capitalize font-weight-bold text-black"
            color="grey"
            @click="checkout"
          >
            checkout
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useOrderStore } from "@/stores/orderStore";
import { useTransactionStore } from "@/stores/transactionStore";

const orderStore = useOrderStore();
const transactionStore = useTransactionStore();

const dataUser = JSON.parse(localStorage.getItem("dataUser"));
const baseImageUrl = import.meta.env.VITE_APP_IMAGE_URL;

const form = ref({
  comment: "",
  qty: null,
});

const getData = async () => {
  await orderStore.getByIdUser(dataUser.id_user);
};

const updateOrderQty = async (order) => {
  const payload = {
    id: order.id,
    id_menu: order.menu.id,
    id_user: order.user.id,
    qty: order.qty,
    total_price: order.menu.price * order.qty,
  };
  await orderStore.update(payload);
  getData();
};

const deleteOrder = (id) => {
  orderStore.delete(id);
  getData();
};

const totalPrice = computed(() => {
  return orderStore.dataOrder.reduce((total, order) => {
    return total + order.menu.price * order.qty;
  }, 0);
});

const ppn = computed(() => {
  return totalPrice.value * 0.1;
});

const subtotal = computed(() => {
  return totalPrice.value + ppn.value;
});

const checkout = async () => {
  try {
    const payload = {
      id_user: dataUser.id_user,
      id_order: orderStore.dataOrder.map((order) => order.id).join(","),
      id_menu: orderStore.dataOrder.map((order) => order.menu.id).join(","),
      total_price: subtotal.value,
      comment: form.value.comment,
    };
    await transactionStore.create(payload);
  } catch (error) {
    console.error("Checkout error:", error);
    alert("Something went wrong. Please try again.");
  }
};

onMounted(() => {
  getData();
});
</script>
