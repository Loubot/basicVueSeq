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
</template>


<script>
    export default {
        data() {
            return {
                tutorial: {}
            }
        },
        mounted() {
            console.log(this.tutorial)
        },
        methods: {
          createTutorial() {
            axios.post( 'http://localhost:3000/api/tutorials', this.tutorial )
            .then( function ( res) {
              console.log( 'Created tutorial' );
              console.log( JSON.stringify( res ) );
            }).catch( function( err ) {
              console.log( 'Failed to create tutorial' );
              console.log( JSON.stringify( err ) );
            })
          }
        }
    }
</script>

<script setup>
import { ref, onMounted } from 'vue'

// functions that mutate state and trigger updates


// lifecycle hooks

</script>

