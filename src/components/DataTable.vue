<template>
  <v-row no-gutters>
    <v-col cols="12">
      <div class="text-h5 font-weight-bold mb-4">
        List Of {{ route.meta.title }}
      </div>
    </v-col>
    <v-col cols="6" md="4">
      <VCard class="mb-6 border-none">
        <v-text-field
          v-model="search"
          density="compact"
          placeholder="Type here..."
          :class="totalPage ? 'mr-4' : 'mr-0'"
          color="primary"
          hide-details
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
        />
      </VCard>
    </v-col>
    <v-spacer />
    <v-col cols="auto" v-if="route.meta.title != 'Transaction'">
      <v-btn
        class="text-capitalize text-orange"
        color="btncolor"
        prepend-icon="mdi-plus"
        @click="emit('addItem')"
      >
        add {{ route.meta.title }}
      </v-btn>
    </v-col>
  </v-row>
  <v-card elevation="2" border>
    <v-data-table
      :headers="Headers"
      :items="data"
      :loading="loading"
      :search="search"
      :items-per-page="totalPage"
    >
      <template v-slot:top> </template>
      <template v-slot:[`item.role`]="{ item }">
        <span class="text-capitalize">
          {{ item.role === 1 ? "Admin" : "Customer" }}
        </span>
      </template>
      <template v-slot:[`item.username_transaction`]="{ item }">
        <span class="text-capitalize">{{ item.user.username }}</span>
      </template>
      <template v-slot:[`item.email_transaction`]="{ item }">
        <span class="text-capitalize">{{ item.user.email }}</span>
      </template>
      <template v-slot:[`item.total_price`]="{ item }">
        <span class="text-capitalize">{{ item.order.total_price }}</span>
      </template>
      <template v-slot:[`item.category`]="{ item }">
        <span class="text-capitalize">{{ item.category?.name }}</span>
      </template>
      <template v-slot:[`item.price`]="{ item }">
        <span class="text-capitalize">{{ $formatCurrency(item.price) }}</span>
      </template>
      <template v-slot:[`item.menu`]="{ item }">
        <span class="text-capitalize">{{ item.menu.name }}</span>
      </template>
      <template v-slot:[`item.payment_type]`]="{ item }">
        <span class="text-capitalize"
          >{{ item.payment_type != null ? item.payment_type : "-" }}
        </span>
      </template>
      <template v-slot:[`item.user]`]="{ item }">
        <span class="text-capitalize">{{ item.user.username }} </span>
      </template>
      <template v-slot:[`item.order_status]`]="{ item }">
        <span class="text-capitalize">{{ item.order.order_status }}</span>
      </template>

      <template v-slot:[`item.status`]="{ item }">
        <v-switch
          class="pt-4"
          density="compact"
          color="primary"
          v-model="item.status"
          @change="emit(`updateStatus`, item)"
        />
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <div
          class="action-buttons d-flex justify-center align-center text-center"
        >
          <v-btn
            class="text-capitalize"
            color="edit"
            prepend-icon="mdi-pencil"
            size="small"
            @click="emit('editItem', item.id)"
          >
            Edit
          </v-btn>

          <v-btn
            class="mx-2 text-capitalize text-black"
            color="red"
            prepend-icon="mdi-delete"
            size="small"
            :disabled="item.role === 1"
            @click="emit('deleteItem', item.id)"
          >
            Delete
          </v-btn>

          <v-btn
            v-if="route.meta.title === 'Menu'"
            class="text-capitalize text-black"
            color="blue"
            prepend-icon="mdi-image"
            size="small"
            @click="emit('openImage', item.id)"
          >
            Image
          </v-btn>

          <v-btn
            v-if="route.meta.title === 'Users'"
            class="text-capitalize text-black"
            color="grey"
            prepend-icon="mdi-lock"
            size="small"
            @click="emit('changePassword', item.id)"
          >
            Change Password
          </v-btn>
        </div>
      </template>
      <template v-slot:no-data>
        <p class="text-red">
          The Table is Empty. Please insert data with the above Button.
        </p>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
defineProps({
  Headers: {
    type: Array,
  },
  data: {
    type: Array,
  },
  totalPage: {
    type: Number,
  },
  loading: {
    type: Boolean,
  },
  btnAdd: {
    type: String,
  },
  tableTitle: String,
});

const emit = defineEmits([
  "addItem",
  "editItem",
  "deleteItem",
  "showDetail",
  "changePassword",
  "openImage",
  "updateStatus",
]);

const search = ref("");
</script>
