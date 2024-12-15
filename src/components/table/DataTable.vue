<template>
  <v-row>
    <v-col cols="12">
      <div class="text-h5 font-weight-bold">List Of {{ route.meta.title }}</div>
    </v-col>
    <v-col :cols="btnAdd ? '5' : '12'" md="4">
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
    <v-col
      cols="auto"
      v-show="
        ![
          'Pelanggan',
          'Transaksi',
          'Detail Pelanggan',
          'Detail Order',
        ].includes(route.meta.title)
      "
    >
      <v-btn
        class="text-capitalize text-orange"
        color="btncolor"
        prepend-icon="mdi-plus"
        @click="addItem"
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
      <template v-slot:[`item.nama`]="{ item }">
        <span class="text-capitalize">{{ item.namaCustomer }}</span>
      </template>
      <template v-slot:[`item.alamat`]="{ item }">
        <span class="text-capitalize">{{ item.alamat }}</span>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-btn
          class="mx-2 text-capitalize"
          color="edit"
          prepend-icon="mdi-pencil"
          size="small"
          @click="$emit('editItem', item)"
        >
          Edit
        </v-btn>

        <v-btn
          class="text-capitalize text-black"
          color="red"
          prepend-icon="mdi-delete"
          size="small"
          @click="$emit('deleteItem', item.id)"
        >
          Delete</v-btn
        >
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
import { ref, defineEmits } from "vue";
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

const $emit = defineEmits(["addItem", "editItem", "deleteItem", "showDetail"]);

const search = ref("");
const addItem = () => {
  $emit("addItem");
};
</script>
