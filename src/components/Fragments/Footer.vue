<template>
  <div>
    <Card classes="footer-card">
      <v-footer class="footer text-bottom rounded-lg">
        <div class="text-right text-bottom w-100 text-brown">
          copyright {{ new Date().getFullYear() }} —
          <strong>GUI Admin</strong>
        </div>
      </v-footer>
    </Card>
  </div>
</template>

<script setup>
import Card from "@/components/Elements/Card/Index.vue";
</script>

<style scoped>
.footer-card {
  background-color: #efebe9;
  font-size: 14px;
}
.footer {
  margin-top: auto;
  background-color: #efebe9;
}
</style>
