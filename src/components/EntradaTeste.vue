
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EntradaTeste',
  components: {
  },
  data() {
    return {
      idservico: '50000',
      siglaDocumento: 'REQ-OFI-2023/00007',
    };
  },
  computed: {
    
  }
});

</script>

<template>
    <div class="__container">
      <h2>página apenas para orientar o direcionamento para os links. Segue abaixo:</h2>
      <img :src="'/static/img/cat-png-40363.png'" alt="foto de um gato" style="height: 150px; width: 121px; float: left; shape-outside: url(/static/img/cat-png-40363.png);">
      <ul>
        <li><RouterLink :to="`/form/${idservico}`"> Formulario</RouterLink></li>
        <li><RouterLink to="/minhassolicitacoes"> Lista de solicitações do usuário</RouterLink></li>
        <li><RouterLink to="/apresentarrecurso"> Página para apresentar recurso</RouterLink></li>
        <li><RouterLink to="/cumprirexigencia"> >Página para cumprir exigência</RouterLink></li>
        <li><RouterLink :to="`/detalhesolicitacao/${encodeURIComponent(siglaDocumento)}`"> Página com detalhes da solicitação</RouterLink></li>
        <li><RouterLink to="/confirmacao"> Página para confirmação da solicitação</RouterLink></li>

        
      </ul>
      <button class="__botao-sit">teste</button>
    </div>
</template>

<!-- <style scoped>
@import '../../src/assets/cssnovo/base.css';
@import '../../src/assets/cssnovo/comum.css';
@import '../../src/assets/cssnovo/corpo.css';
</style> -->
