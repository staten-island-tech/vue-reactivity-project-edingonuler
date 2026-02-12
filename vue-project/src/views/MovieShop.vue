<template>
  <div class="start_text_div">
    <h1 style="text-align: center"><u>Movie Shop</u></h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const movies = ref([
  {
    name: 'The Godfather',
    date: '1972',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGITE1zbUDbS_FYzJDOrPkDA8Cc2-MLCjcMB0rx-HW0pWwoKws8WbgSML1mv4xD2me4z9&s=10',
  },
  {
    name: 'The Shawshank Redemption',
    date: '1994',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGnXtIxFhLVDu_Y9e4WV8J10B0Itb-DHdSGZINXmi0Zt1gWfmBKhJ3dJm04_vHdASVK2-Uw&s=10',
  },
  {
    name: 'The Terminal',
    date: '2004',
    img: 'https://m.media-amazon.com/images/I/91avFh9KUhL._AC_UF894,1000_QL80_.jpg',
  },
])
</script>

<style scoped>
.start_text_div {
  background-color: aliceblue;
}
</style>
