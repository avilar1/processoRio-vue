<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';


export default defineComponent({
  name: 'MinhasSolicitacoes',




  data() {

    return {
      xmls: `'<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n  <soap:Body>\n    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">\n      <ubiNum>500</ubiNum>\n    </NumberToWords>\n  </soap:Body>\n</soap:Envelope>';`,
      info: null,
      config: {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso',
        headers: {
          'Content-Type': 'text/xml; charset=utf-8',
          'Access-Control-Allow-Origin': '*'

        },
        data: this.xmls
      }

    }
  },
  mounted() {

    // axios(this.config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    //funciona//
      axios 
        .get('http://localhost:8080/sigaex/public/app/minhassolicitacoesJson', {
          params: {
            // loginDiscreto: 1,
            // token: 'ikcN3glU6qlzsuJ3UlZw1xvwkOkytUBiHskzhTx2maJXfVCilFBxPyDmWcq4d5BN',
            // url: 'NTAwMDA='
      },
      headers: {
        Accept: 'application/json, text/plain, */*',
        "Access-Control-Allow-Origin": "*",
        

      }
        })
        .then((response: any) => (this.info = response))
        .catch(error => console.log(error))
    
  }
})



</script>

<template>
  <main>
    <div class="__container">
      {{ info }}
      <!-- <router-view> </router-view> -->
    </div>
  </main>
</template>



<style >
@import '../../src/assets/cssnovo/grupo-identificacao.css';
@import '../../src/assets/cssnovo/comum.css';
@import '../../src/assets/cssnovo/corpo.css';
@import '../../src/assets/cssnovo/grupo-N-arquivos.css';
@import '../../src/assets/cssnovo/grupo-campos.css';
@import '../../src/assets/cssnovo/grupo-complementar.css';
@import '../../src/assets/cssnovo/grupo-descricao.css';
@import '../../src/assets/cssnovo/grupo-documentos.css';
@import '../../src/assets/cssnovo/grupo-enviar.css';
@import '../../src/assets/cssnovo/grupo-representante-legal.css';
@import '../../src/assets/cssnovo/grupo-termo-de-uso.css';
</style>