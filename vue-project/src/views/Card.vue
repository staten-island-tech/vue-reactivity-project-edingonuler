<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  content: String,
})
</script>

<style scoped>
/* .card {
    border: 1px solid #ccc;
    padding: 15px;
    margin: 10px;
    border-radius: 8px;
} */
</style>
