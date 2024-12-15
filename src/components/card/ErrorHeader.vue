<template>
  <div class="text-center mb-4">
    <h1 class="text-h1 font-weight-bold text-gray-600">
      {{ errorCode }}
    </h1>
    <h5 class="text-h5 font-weight-medium mb-3">
      {{ errorTitle }}
    </h5>
    <p>
      {{ errorDescription }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    errorCode: {
      type: Number,
      required: false,
    },
    errorTitle: {
      type: String,
      required: false,
    },
    errorDescription: {
      type: String,
      required: false,
    },
  },
};
</script>
