<template>
  <div>
    Register
    <span v-for="(res, key) in results" :key="key">
      {{ res.title }}
    </span>
  </div>


</template>

<script >
  export default {
    name: 'nowSure',
    data() {
      return {
        results: []
      }
    },
    async mounted() {
      this.getResults()
    },
    methods: {
      getResults: async function() {
        // const response = await axios.get( 'http://localhost:3000/api/tutorials' )
        // this.results = response.data
        axios.get( 'http://localhost:3000/api/tutorials' )
        .then( function( res ) {
          results = res.data
        })
      }
    }
  }


</script>

