<template>
  <div class="card">
    <h3>Movie Name: {{ movie.name }}</h3>
    <p>Date: {{ movie.date }}</p>
    <img class="img" :src="movie.img" />
    <img />
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'

defineProps({
  movie: {
    name: String,
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
  height: 400px;
  width: 500px;
}
.img {
  height: 200px;
  width: 200px;
}
</style>
