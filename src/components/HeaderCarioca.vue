<script lang="ts">
import { defineComponent } from 'vue';
import GrupoIdentificacao from './GrupoIdentificacao.vue';
import { store } from '@/store';



export default defineComponent({
  name: 'GrupoIdentificacao',

  data() {
    return {
        
    };
  },
 computed: {
  pegar () {
      return store.state.pessoas.filter((pessoa: any) => pessoa.id === 1)[0].nome ;
    }
 }
});
</script>

<template>
    <header>
    <div>
      <div>
        <div class="__painel-logo">
          <RouterLink to="/"> <p>Carioca Digital</p></RouterLink>
            
          
        </div>

        <div class="__painel-login">
          <p>Olá, <span> João!</span> <span>Você está conectado(a)</span></p>
          <details class="__mostrar" data-mostrar open>
            <summary><i></i></summary>
            <div class="__informacoes">
              <div class="__informacoes-dados">
                <ul>
                  <li>
                    <p>{{ pegar }}</p>
                  </li>
                  <li><a href="">jfernandes10@gmail.com</a> </li>
                </ul>
              </div>
              <div class="__informacoes-logout">
                <button class="btn btn-outline-primary btn-sm __sair">Sair</button>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>

    <div>
      <h1>Index</h1>
    </div>
  </header>
</template>

<style scoped>
    @import '../../src/assets/cssnovo/cabecalho.css';

</style>