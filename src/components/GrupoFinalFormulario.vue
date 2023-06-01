<script lang="ts">
import { defineComponent } from 'vue';
import { store } from '@/store';

export default defineComponent({
  name: 'GrupoFinalFormulario',

  data() {
    return {

    };
  },

  computed: {

  }
});

</script>

<template>
  <div class="__grupo __termoDeUso" aria-label="grupo termo de uso">
    <input type="checkbox" name="termo" id="input-termo" required />

    <label for="input-termo" class="__el-esp form-check-label" id="label-input-termo">Declaro que li e concordo com os
      <a href="#" target='_blank'>termos de uso</a>
      e estou ciente de que todas as notificações eletrônicas serão feitas através do e-mail cadastrado.*</label>

    <div class="invalid-feedback" style="display: block; top: -2px; position: relative;">
      Campo obrigatório</div>
  </div>

  
  <div class="__grupo" aria-label="grupo final para enviar ou cancelar">
    <div>
      <label for="nomeCompleto" class="__label-comum">
        *Campos obrigatórios</label>
    </div>

    <div class="__grupo-end">
      <button type="submit" id="btnGravarDocumento" value="" class="btn btn-success __button-submit" disabled>
        ENVIAR</button>

      <button type="reset" class="btn __button-cancel">
        CANCELAR</button>
    </div>
  </div>
</template>



<style >
@import '../../src/assets/cssnovo/grupo-enviar.css';
@import '../../src/assets/cssnovo/grupo-termo-de-uso.css';
</style>