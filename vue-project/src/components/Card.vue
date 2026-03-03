<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'

defineProps({
  movie: {
    title: String,
    content: String,
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
  width: 500px;
}
</style>
