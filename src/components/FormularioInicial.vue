<script lang="ts">
import HeaderCarioca from './HeaderCarioca.vue';
import GrupoIdentificacao from './GrupoIdentificacao.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormularioInicial',
  components: {
    HeaderCarioca,
    GrupoIdentificacao
  },
  data() {
    return {
    };
  }
});

</script>


<template>
  <main>
    <div class="__container">
        <GrupoIdentificacao />
        <router-view> </router-view>
    </div>
  </main>
</template>


<style scoped>
@import '../../src/assets/cssnovo/comum.css';
@import '../../src/assets/cssnovo/corpo.css';
@import '../../src/assets/cssnovo/grupo-N-arquivos.css';
@import '../../src/assets/cssnovo/grupo-campos.css';
@import '../../src/assets/cssnovo/grupo-descricao.css';
@import '../../src/assets/cssnovo/grupo-documentos.css';
@import '../../src/assets/cssnovo/grupo-complementar.css';
@import '../../src/assets/cssnovo/grupo-enviar.css';

@import '../../src/assets/cssnovo/grupo-representante-legal.css';
@import '../../src/assets/cssnovo/grupo-termo-de-uso.css';

</style>
