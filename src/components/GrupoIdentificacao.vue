<script lang="ts">
import { defineComponent } from 'vue';
import { store } from '@/store';

export default defineComponent({
  name: 'GrupoIdentificacao',

  data() {
    return {
        // nome : 'João Fernandes Almeida',
        // cpf : '123.456.789-00',
        // email : 'joao.exemplo@email.com'
    };
  },
  // props: {
  //   nome: {
  //     type: String,
  //   },
  //   cpf: {
  //     type: String,
  //   },
  //   email: {
  //     type: String,
  //   }
  // },
 computed: {
  pegarNome () {
      return store.state.pessoas.filter((pessoa: any) => pessoa.id === 1)[0].nome ;
    },
  pegarCPF () {
      return store.state.pessoas.filter((pessoa: any) => pessoa.id === 1)[0].cpf ;
    },
  pegarEmail () {
      return store.state.pessoas.filter((pessoa: any) => pessoa.id === 1)[0].email ;
    }
 }
});

</script>

<template>
 <dl class="__grupo" aria-label="grupo itens de identificação">
                    <dt class="__label-comum">Nome Completo</dt>
                    <dd class="__el-comum" id="nomeCompleto"> {{ pegarNome }} </dd>

                    <dt class="__label-comum">CPF</dt>
                    <dd class="__el-comum" id="CPFCompleto"> {{ pegarCPF }}</dd>

                    <dt class="__label-comum">Email</dt>
                    <dd class="__el-comum" id="EmailCompleto"> {{ pegarEmail }} </dd>
                </dl>
</template>



<style scoped>
@import '../../src/assets/cssnovo/grupo-identificacao.css';
</style>