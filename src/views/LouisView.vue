<template>
  <div class="louis">
    <h1>This is what I used to look like</h1>
    <img alt="Vue logo" @click="createEvent()" src="../assets/louis.png">
  </div>
  <div>
    <input v-model="tutorial.title" placeholder="Title" />
  </div>
  <div>
    <input v-model="tutorial.description" placeholder="Description" />
  </div>
  <div>
    <button @click="createTutorial()">Create Tutorial</button>
  </div>
  <div>
    <li v-for="tutor in tutorials">
      {{ tutor.description }}
    </li>
  </div>
</template>


<script setup>
  import { onMounted } from 'vue'

  let tutorial = {};
  let tutorials = [];

  onMounted(() => {
    axios.get( 'http://localhost:3000/api/tutorials' )
    .then( function( res ) {
      console.log( res )
      tutorials = res.data
      console.log( tutorials )
    }).catch( function( err ) {
      console.log( err );
    })
  })
</script>



