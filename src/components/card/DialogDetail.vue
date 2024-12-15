<template>
  <div class="text-center pa-4">
    <v-dialog :model-value="modelValue" width="full-width" persistent>
      <v-card height="800px" elevation="0" border>
        <v-toolbar dark color="primary">
          <v-toolbar-title class="text-capitalize">
            Detail {{ $route.meta.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn variant="text" @click="closeDialog"> Close </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-subtitle class="pa-4">ID : {{ items[0] }} </v-card-subtitle>
        <v-list>
          <v-row class="pa-4">
            <v-col
              cols="12"
              md="6"
              v-for="(key, value) in items[0]"
              :key="value"
            >
              <v-card class="pa-2" elevation="0" border>
                <v-card-title class="text-capitalize">
                  {{ value }}
                </v-card-title>
                <v-card-subtitle
                  class="text-primary mb-2 d-flex justify-between"
                >
                  {{ key ? key : "-" }}
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["update:modelValue"],
  methods: {
    closeDialog() {
      this.$emit("update:modelValue", false);
    },
  },
};
</script>
