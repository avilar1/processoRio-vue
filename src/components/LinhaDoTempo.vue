<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LinhaDoTempo',
  components: {

  },
  data() {
    return {
      movs: [
        {
          eventoLinhaTempo: 'evento 1',
          data: '12/12/2022',
          msgLinhaTempo: 'mensagem da linha do tempo 1'
        },
        {
          eventoLinhaTempo: 'evento 2',
          data: '12/12/2022',
          msgLinhaTempo: 'mensagem da linha do tempo 2'
        },
        {
          eventoLinhaTempo: 'evento 3',
          data: '12/12/2022',
          msgLinhaTempo: 'mensagem da linha do tempo 3'
        }
      ]
    };
  }
});

</script>


<template>
  <div class="__timeline">
			<div class="__containerTimeLine">
				<ul>
						<li v-for="(m, index) in movs">
							<div class="__iconEStatus">
								<div :class="[index == 0 ? '__circulo1': '__circulo2']"></div>
								<div class="__timeLineStatus">
									{{m.eventoLinhaTempo}}</div>
							</div>

							<div class="__timeLineStatus2">
								{{m.data}} - {{m.msgLinhaTempo}}</div>
						</li>
				</ul>
			</div>
		
	
		</div>

</template>


<style scoped>
@import '../../src/assets/cssnovo/comum.css';
@import '../../src/assets/cssnovo/corpo.css';
@import '../../src/assets/cssnovo/corpo-ds.css';
@import '../../src/assets/cssnovo/grupo-enviar.css';

/* @import '../../src/assets/cssnovo/nivel-situacao.css'; */



</style>
