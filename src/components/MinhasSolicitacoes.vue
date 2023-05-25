<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';


export default defineComponent({
  name: 'MinhasSolicitacoes',




  data() {

    return {
      info: '',
      config: {
        method: 'POST',
        url: '/api/sigaex/servicos/ExService',
        headers: {
          'Content-Type': 'text/xml; charset=utf-8',

        },
        data: `<?xml version="1.0" encoding="utf-8"?>\n
              <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:impl="http://impl.service.ex.siga.jfrj.gov.br/">\n
                <soapenv:Header/>\n
                <soapenv:Body>\n 
                   <impl:obterTodasSolicitacoesPeticionamento>\n
                      <!--Optional:-->\n
                        <arg0>2MzC1NZv6ouvon84jVrjiwT0z-9d978UwQ5hBGF93PbYPokAjBcKKIbkcS_8PX2wxszf0AQTDfw-L1_HDjUeDg</arg0>\n
                      <!--Optional:-->\n
                        <arg1>18043287740</arg1>\n
                      <!--Optional:-->\n
                        <arg2>2018-01-10T15:51:24</arg2>\n
                    </impl:obterTodasSolicitacoesPeticionamento>\n
                </soapenv:Body>\n
              </soapenv:Envelope> \n`,
      }

    }
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

        this.info = parsedResponse;
      })
      .catch(function (error) {
        console.log(error);
      });
    //o de baixo funciona//
    // axios 
    //   .get('/api/sigaex/public/app/minhassolicitacoesJson')
    //   .then((response: any) => (this.info = response))
    //   .catch(error => console.log(error))

  }
})



</script>

<template>
  <main>
    <div class="__container">
      {{ info }}

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