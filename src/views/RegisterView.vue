<template>
  <div>
    Register
    <pre >{{ data }}</pre>
  </div>


</template>

<script setup>
  import { onMounted } from 'vue'
  import { ref } from 'vue'
  import {userMethods}  from '../services/userMethods.js'


  let tutorial = {};
  let tutorials = [];

  onMounted(() => {
  })

</script>

<script >
    export default {
    data() {
      return { tutorial: {} }
    }
  }
</script>