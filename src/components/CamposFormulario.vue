<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import GrupoFinalFormulario from './GrupoFinalFormulario.vue';

let idservico: string | string[];

export default defineComponent({
  name: 'GrupoIdentificacao',
  components: {
    GrupoFinalFormulario,
  },



  data() {
    
    return {
      info: '',
      config: {
        method: 'POST',
        url: '/api/sigaex/servicos/ExService',
        //idservico: '',
        headers: {
          'Content-Type': 'text/xml; charset=utf-8',

        },
        data: '',
      }

    }
  },
  created() {
    idservico = this.$route.params.idservico;
  this.config.data = `<?xml version="1.0" encoding="utf-8"?>\n
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:impl="http://impl.service.ex.siga.jfrj.gov.br/">\n
      <soapenv:Header/>\n
      <soapenv:Body>\n 
        <impl:obterModeloPeticionamento>\n
          <!--Optional:--> \n
          <arg0>2MzC1NZv6ouvon84jVrjiwT0z-9d978UwQ5hBGF93PbYPokAjBcKKIbkcS_8PX2wxszf0AQTDfw-L1_HDjUeDg</arg0> \n
          <!--Optional:--> \n

          <arg2>${idservico}</arg2> \n
          <!--Optional:--> \n
          <arg3>?</arg3> \n
          <arg4>true</arg4> \n
        </impl:obterModeloPeticionamento>\n
      </soapenv:Body>\n
    </soapenv:Envelope> \n`;
},
  mounted() {

    axios(this.config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        //this.info = response.data;

        const xmlResponse = response.data;
        const startTag = '<return>';
        const endTag = '</return>';
        const startIndex = xmlResponse.indexOf(startTag) + startTag.length;
        const endIndex = xmlResponse.indexOf(endTag);

        const jsonResponse = xmlResponse.substring(startIndex, endIndex);
        const parsedResponse = JSON.parse(jsonResponse);

        
        this.info = parsedResponse.freeMarKerModelo;
      })
      .catch(function (error) {
        console.log(error);
      });

    /* a requisição REST pra controler funcionou com esse código abaixo */
    // axios
    //   .get('/api/sigaex/public/app/peticionamentoJ', {
    //     params: {
    //       loginDiscreto: 1,
    //       token: 'ikcN3glU6qlzsuJ3UlZw1xvwkOkytUBiHskzhTx2maJXfVCilFBxPyDmWcq4d5BN',
    //       url: 'NTAwMDA='
    //     },
    //   })
    //   .then((response: any) => {
    //     this.info = response.data.hashMap.freeMarkerModelo;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

  }
})



</script>

<template>
  <form>
    <div v-html="info" class="__grupo-camp __grupo">
  </div>
  <GrupoFinalFormulario />
</form>
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