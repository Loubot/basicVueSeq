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



  <div class="btn-group" role="group" aria-label="Basic example">
    <!-- <button type="button" @click="createTutorial()" class="btn btn-success"></button> -->
    <ui-button icon="add" @click="createTutorial()">Create tutorial</ui-button>
  </div>

  <div>
    <li v-for="tutor in tutorials">
      {{ tutor.description }}
    </li>
  </div>

  <div>
    <ui-fab icon="favorite_border"></ui-fab>
<ui-fab icon="favorite_border" mini></ui-fab>

<ui-fab>
  <template #default="{ iconClass }">
    <svg-logo :class="iconClass"></svg-logo>
  </template>
</ui-fab>
<ui-fab mini>
  <template #default="{ iconClass }">
    <svg-logo :class="iconClass"></svg-logo>
  </template>
</ui-fab>
  </div>
</template>


<script setup>
  import { onMounted } from 'vue'
  function createTutorial() {
    axios.post( 'http://localhost:3000/api/tutorials', tutorial )
    .then( function ( res ) {
      console.log( res.data )
    }).catch( function( err ) {
      console.log( err )
    })
  }

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

<script >
    export default {
    data() {
      return { tutorial: {} }
    }
  }
</script>



