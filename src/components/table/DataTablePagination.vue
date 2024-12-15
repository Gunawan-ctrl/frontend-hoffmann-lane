<template>
  <v-card elevation="0" border>
    <v-data-table
      :headers="Headers"
      :items="data"
      :loading="loading"
      :search="search"
      :items-per-page="totalPage"
    >
      <template v-slot:top>
        <v-row>
          <v-col cols="12" sm="5" md="6" lg="6">
            <v-list-item
              class="mt-4 font-weight-black text-lowercase"
              :title="`Data ${$route.meta.title.toLowerCase()}`"
              :subtitle="`daftar seluruh data ${$route.meta.title.toLowerCase()}`"
            >
            </v-list-item>
          </v-col>
          <v-spacer />
          <v-col cols="6" xs="8" sm="4" md="4" lg="4">
            <v-text-field
              v-model="search"
              label="Search"
              density="compact"
              class="my-4 mx-2"
              :class="totalPage ? 'mr-4' : 'mr-0'"
              color="primary"
              single-line
              hide-details
              append-inner-icon="mdi-magnify"
              variant="outlined"
            />
          </v-col>
          <v-col cols="auto" v-show="!totalPage">
            <v-btn
              class="my-4 mr-4 text-capitalize rounded-lg"
              color="primary"
              prepend-icon="mdi-plus"
              variant="text"
              @click="$emit('addItem')"
            >
              Add Data
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <template v-slot:bottom>
        <v-divider />

        <div class="py-3 d-flex justify-end">
          <v-pagination
            :model-value="currentPage"
            :length="pageCount"
            :total-visible="6"
            density="compact"
            @update:modelValue="updatePage"
          />
        </div>
      </template>
      <template v-slot:[`item.nama`]="{ item }">
        <span class="text-capitalize">{{ item.namaCustomer }}</span>
      </template>
      <template v-slot:[`item.alamat`]="{ item }">
        <span class="text-capitalize">{{ item.alamat }}</span>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <v-btn
          class="mx-2 text-capitalize"
          color="green"
          prepend-icon="mdi-pencil"
          size="small"
          @click="$emit('editItem', item)"
        >
          Edit
        </v-btn>

        <v-btn
          class="text-capitalize"
          color="red"
          prepend-icon="mdi-delete"
          size="small"
          @click="$emit('deleteItem', item.id)"
        >
          Delete
        </v-btn>
        <!-- <v-btn
          variant="text"
          color="primary"
          size="small"
          @click="$emit('showDetail', item.id)"
          class="text-capitalize"
        >
          Details
        </v-btn> -->
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
import { ref } from "vue";
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
  itemsPerPage: {
    type: Number,
    default: 5,
  },
  pageCount: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["addItem", "editItem", "deleteItem"]);

const updatePage = (page) => {
  emit("update:currentPage", page);
};

const search = ref("");
</script>
