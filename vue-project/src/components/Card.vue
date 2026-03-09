<template>
  <div class="card">
    <h3 style="text-align: center">Movie Name: '{{ movie.name }}'</h3>
    <p style="text-align: center">Release Date: {{ movie.date }}</p>
    <p style="text-align: center">Price: {{ movie.price }}</p>
    <img class="img" :src="movie.img" />
    <slot></slot>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'

defineProps({
  movie: {
    name: String,
    content: String,
    price: Number,
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
  align-items: center;
  justify-content: space-around;
  /* justify-content: center; */
  //height: 500px;
  //width: 300px;
  background-color: aliceblue;
  font-family: 'Momo Signature', cursive;
  font-weight: 400;
  font-style: normal;
}
.img {
  height: 250px;
  width: 250px;
  margin-bottom: 24px;
}
</style>
