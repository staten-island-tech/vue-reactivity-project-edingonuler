<template>
  <div class="start_text_div">
    <h1 style="text-align: center"><u>Movie Shop</u></h1>
  </div>

  <div id="main">
    <div class="container">
      <Card v-for="movie in movies" :key="movie.name" :movie="movie">
        <button class="cart_button" @click="cart_button_function(movie)">Add To Cart</button>
      </Card>

      <!-- :title="movie.title" :content="movie.content" -->
    </div>


    <div class="cart_container">
      <h2 class="text" style="text-align: center;"><u>Cart</u></h2>
      <div class="cart_items">

      </div>

      <h2 class="text small-text">Total Price: ${{ total.toFixed(2) }}</h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from '@/components/Card.vue' // Import the Card component

const movies = ref([
  {
    name: 'The Godfather',
    date: '1972',
    price: 15.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGITE1zbUDbS_FYzJDOrPkDA8Cc2-MLCjcMB0rx-HW0pWwoKws8WbgSML1mv4xD2me4z9&s=10',
  },
  {
    name: 'The Shawshank Redemption',
    date: '1994',
    price: 12.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGnXtIxFhLVDu_Y9e4WV8J10B0Itb-DHdSGZINXmi0Zt1gWfmBKhJ3dJm04_vHdASVK2-Uw&s=10',
  },
  {
    name: 'The Terminal',
    date: '2004',
    price: 9.99,
    img: 'https://m.media-amazon.com/images/I/91avFh9KUhL._AC_UF894,1000_QL80_.jpg',
  },
  {
    name: '12 Angry Men',
    date: '1957',
    price: 11.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRq-5OInvC_ZIwZUkLo3b2BYViA4G_rupqvuCLCsvGvcYCjxL9JGQPzqjJK-dqH898Apxag&s=10',
  },
  {
    name: 'Titanic',
    date: '1997',
    price: 19.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5a4W5Yer0CWGHXdJ8r9WL-LQGm0tXW1I-JNgBx_9Cv2nWCDJeSBTdcglLpYNM7-dUchn&s=10',
  },
  {
    name: 'The Great Gatsby',
    date: '2013',
    price: 20.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTsbCLbQLyAdaYO64COvHK1uW1B5NnFJZZEAEUk77laVMNq0T8xIrR2YfPxCzktECO0yFMQ&s=10',
  },
  {
    name: 'Good Will Hunting',
    date: '1997',
    price: 11.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHhpHclUDovVi3906fxQInCcjx9nUNCT7zf4Ycsg14rUnXbrcXtu7jVd5d_DrJz8O8uffbQ&s=10',
  },
  {
    name: 'The Matrix',
    date: '1999',
    price: 4.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWXVvfvZR3oe7PCMM0exwV0dObOTKvLfSM-bjvKpQ1VegKXuCtq6aBrxqbIgUNxMbfavy&s=10',
  },
  {
    name: 'John Wick',
    date: '2014',
    price: 12.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGN3_tE55aTiyj8xMJk7nLp9HTMOWRaD2aaYk7th_V70wHTePsjeznc2BgXiWQg_MPJmqG&s=10',
  },
  {
    name: 'Mission: Impossible',
    date: '1996',
    price: 19.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSOPeM8l7JFIaUZynEi8bXnp6mQwD-a9S5QlzEuEnvI-88RnZbFLfvxOR4Hom4JzylxRL2&s=10',
  },
  {
    name: 'Top Gun',
    date: '1986',
    price: 18.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWo_SY7w0Y_nZbyefZQ-fmniFpTp-2eaifw_YL_SFtN2fUuylhu2fDwdvi-mhEGoUHHlQkQ&s=10',
  },
  {
    name: 'The Da Vinci Code',
    date: '2006',
    price: 15.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3Pt9SKVvjHRWXFBFsAxZWdJVkcr5K1kURjAO4JjM2EmPlm5od5Y6woO2Scsi5vH4O2Vzdg&s=10',
  },
])

// ------------------

let total = ref(0.0)

function cart_button_function(movie) {
  const container = document.querySelector('.cart_items')

  total.value += movie.price

  container.insertAdjacentHTML(
    'beforeend',
    `<div class="card" data-name="${movie.name}">
        <h3 style="text-align: center; font-family: 'Momo Signature', cursive">Movie Name: '${movie.name}' </h3>
        <p  style="text-align: center">Price: ${movie.price} </p>
     </div>`
  )
}

// ------------------
</script>

<style scoped>
.start_text_div {
  font-family: 'Momo Signature', cursive;
  font-weight: 400;
  font-style: normal;
  color: aliceblue;
  /* background-color: aliceblue; */
}

.text {
  font-family: 'Momo Signature', cursive;
}

.small-text{
  font-size: 20px;
}

.xs-text{
  font-size: 12px;
}

.m-text {
  font-size: 16px;
}

.container {
  display: flex;
  flex: 1;
  display: grid;
  /* Creates 4 equal-width columns. Adjust gap as needed */
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.cart_button {
  background-color: #3100a2;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

#main {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.cart_container {
  width: 300px;
  background-color: white;
}

</style>
