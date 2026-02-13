<template>
  <div class="start_text_div">
    <h1 style="text-align: center"><u>Movie Shop</u></h1>
  </div>

  <div class="container">
    <Card v-for="card in cards" :key="card.id" :title="card.title" :content="card.content" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from './Card.vue' // Import the Card component

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
  {
    name: '12 Angry Men',
    date: '1957',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRq-5OInvC_ZIwZUkLo3b2BYViA4G_rupqvuCLCsvGvcYCjxL9JGQPzqjJK-dqH898Apxag&s=10',
  },
  {
    name: 'Titanic',
    date: '1997',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5a4W5Yer0CWGHXdJ8r9WL-LQGm0tXW1I-JNgBx_9Cv2nWCDJeSBTdcglLpYNM7-dUchn&s=10',
  },
  {
    name: 'The Great Gatsby',
    date: '2013',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTsbCLbQLyAdaYO64COvHK1uW1B5NnFJZZEAEUk77laVMNq0T8xIrR2YfPxCzktECO0yFMQ&s=10',
  },
  {
    name: 'Good Will Hunting',
    date: '1997',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHhpHclUDovVi3906fxQInCcjx9nUNCT7zf4Ycsg14rUnXbrcXtu7jVd5d_DrJz8O8uffbQ&s=10',
  },
  {
    name: 'The Matrix',
    date: '1999',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWXVvfvZR3oe7PCMM0exwV0dObOTKvLfSM-bjvKpQ1VegKXuCtq6aBrxqbIgUNxMbfavy&s=10',
  },
  {
    name: 'John Wick',
    date: '2014',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGN3_tE55aTiyj8xMJk7nLp9HTMOWRaD2aaYk7th_V70wHTePsjeznc2BgXiWQg_MPJmqG&s=10',
  },
  {
    name: 'Mission: Impossible',
    date: '1996',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSOPeM8l7JFIaUZynEi8bXnp6mQwD-a9S5QlzEuEnvI-88RnZbFLfvxOR4Hom4JzylxRL2&s=10',
  },
  {
    name: 'Top Gun',
    date: '1986',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWo_SY7w0Y_nZbyefZQ-fmniFpTp-2eaifw_YL_SFtN2fUuylhu2fDwdvi-mhEGoUHHlQkQ&s=10',
  },
  {
    name: 'The Da Vinci Code',
    date: '2006',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3Pt9SKVvjHRWXFBFsAxZWdJVkcr5K1kURjAO4JjM2EmPlm5od5Y6woO2Scsi5vH4O2Vzdg&s=10',
  },
])
</script>

<style scoped>
.start_text_div {
  background-color: aliceblue;
}
</style>
