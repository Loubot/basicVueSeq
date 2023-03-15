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
     mounted() {
      this.getResults()
    },
    methods: {
      getResults:  function() {
        // const response = await axios.get( 'http://localhost:3000/api/tutorials' )
        // this.results = response.data
        axios.get( 'http://localhost:3000/api/tutorials' )
        .then( ( res ) => {
          this.results = res.data
        })
      }
    }
  }


</script>

