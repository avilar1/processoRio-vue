<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'GrupoIdentificacao',

  data() {
    return {
        nome : 'João Fernandes Almeida',
        cpf : '123.456.789-00',
        email : 'joao.exemplo@email.com'
    };
  },
  props: {
    nome: {
      type: String,
    },
    cpf: {
      type: String,
    },
    email: {
      type: String,
    }
  }
});

</script>

<template>
 <dl class="__grupo" aria-label="grupo itens de identificação">
                    <dt class="__label-comum">Nome Completo</dt>
                    <dd class="__el-comum" id="nomeCompleto"> {{ nome }} </dd>

                    <dt class="__label-comum">CPF</dt>
                    <dd class="__el-comum" id="CPFCompleto"> {{ cpf }}</dd>

                    <dt class="__label-comum">Email</dt>
                    <dd class="__el-comum" id="EmailCompleto"> {{ email }} </dd>
                </dl>
</template>



<style scoped>
@import '../../src/assets/cssnovo/grupo-identificacao.css';
</style>