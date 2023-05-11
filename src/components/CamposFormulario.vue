<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';


export default defineComponent({
  name: 'GrupoIdentificacao',

  

  data () {
    
    return {
      info: null,
      
    }
  },
  mounted () {
    axios 
      .get('http://localhost:8080/sigaex/public/app/peticionamentoJ', {
        params: {
          loginDiscreto: 1,
          token: 'ikcN3glU6qlzsuJ3UlZw1xvwkOkytUBiHskzhTx2maJXfVCilFBxPyDmWcq4d5BN',
          url: 'LzUwMDAx'
    },
    headers: {
      Accept: 'application/json, text/plain, */*',
      "Access-Control-Allow-Origin": "*"
    }
      })
      .then((response: any) => (this.info = response))
      .catch(error => console.log(error))
  }
  
});

</script>

<template>
 {{ info }}
</template>



<style scoped>
@import '../../src/assets/cssnovo/grupo-identificacao.css';
</style>