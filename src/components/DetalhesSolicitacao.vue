<script lang="ts">
import HeaderCarioca from './HeaderCarioca.vue';
import GrupoIdentificacao from './GrupoIdentificacao.vue';
import { defineComponent } from 'vue';
import LinhaDoTempo from './LinhaDoTempo.vue';

export default defineComponent({
  name: 'DetalhesSolicitacao',
  components: {
    LinhaDoTempo
  },
  data() {
    return {
      exemplo: 'inicio para retirar',
      atuado: true,
      siglaProcesso: 'ABC',
      d: {
        dataSolicitacao: '12/12/2022',
        servico: 'serviço',
        orgao: 'órgão',
        nomeSolicitante: 'nome do Solicitante',
        cpfSolicitanteFormatado: '173.222.222-45',
        nomeRepresentado: 'Nome do Rpresentado da Silva',
        pessoaFisicaRepresentado: true,
        documentoRepresentadoFormatado: '852.741.963-48',
        descricaoSolicitacao: 'Descrição da solicitação',
        protocoloInicial: 'Protocolo Inicial',
        dataUltimaAtualizacao: '01/01/2002',
        situacao: 'situação',
        arquivado: true,
        msgDetalhes: 'Mensagem Detalhe',
        podePedirRecurso: true,
        podeCumprirExigencia: true
      }
    };
  },
  methods: {
    renderizarRepresentanteLegal() {
      if (2 + 2 == 4)
        return true;
      else
        return false;
    }
  }
});

</script>


<template >
  <div class="__main">
  <div class="__containerDetails">
    <p>{{ exemplo }}</p>

    <div v-if="atuado" class="__formRow" id="1">
      <div class="__leftColumnForm" id="1L">
        Numero da Solicitação</div>

      <div class="__rightColumnForm __colunaum" id="1R">
        <div>
          <a href="#" target="_blank" id="nsol"> {{ siglaProcesso }}</a>
          <a href="#"><i class="fa-solid fa-arrow-up-right-from-square __row-up" id="esconde"></i></a>
        </div>

        <span id="esconde" class="__consulta">
          (consulta no processo.rio)</span>
      </div>
    </div>

    <div class="__formRow" id="2">
      <div class="__leftColumnForm" id="2L">
        Data da Solicitação</div>
      <div class="__rightColumnForm" id="dsol">
        {{ d.dataSolicitacao }}</div>
    </div>

    <div class="__formRow" id="3">
      <div class="__leftColumnForm" id="3L">
        Serviço</div>
      <div class="__rightColumnForm" id="serv">
        {{ d.servico }}</div>
    </div>

    <div class="__formRow" id="4">
      <div class="__leftColumnForm" id="4L">
        Órgão</div>
      <div class="__rightColumnForm" id="orgg">
        {{ d.orgao }}</div>
    </div>

    <div class="__formRow" id="5">
      <div class="__leftColumnForm" id="5L">
        Nome do Solicitante</div>
      <div class="__rightColumnForm" id="nomm">
        {{ d.nomeSolicitante }}</div>
    </div>

    <div class="__formRow" id="6">
      <div class="__leftColumnForm" id="6L">
        CPF do Solicitante</div>
      <div class="__rightColumnForm" id="cpfs">
        {{ d.cpfSolicitanteFormatado }}</div>
    </div>


    <div v-if="renderizarRepresentanteLegal()" class="__formRow" id="7">
      <div class="__leftColumnForm" id="7L">
        Nome do Representado</div>
      <div class="__rightColumnForm" id="nomr">
        {{ d.nomeRepresentado }}</div>
    </div>

    <div class="__formRow" id="8">
      <div class="__leftColumnForm" id="8L">
        {{ d.pessoaFisicaRepresentado ? 'CPF' : 'CNPJ' }} do Representado</div>
      <div class="__rightColumnForm" id="cpfr">
        {{ d.documentoRepresentadoFormatado }}</div>
    </div>

    <div class="__formRow __formRow-mostra" id="9">
      <div class="__leftColumnForm __leftColumnForm-mostra" id="9L">
        Descrição</div>

      <div class="__rightColumnForm __rightColumnForm-mostra  __mostra-mais-pai" id="2">

        <div class="collapse" id="collapseExample">
          <div class="card card-body" id="descricaocard">
            {{ d.descricaoSolicitacao }}</div>
        </div>

        <div class="__mostrar-mais" id="mostramais">
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
            aria-controls="collapseExample" id="btnMostrarMais"> Mostrar
            <span id="troca">mais</span>
          </a>
        </div>

      </div>
    </div>

    <div class="__formRow" id="10">
      <div class="__leftColumnForm" id="10L">
        Protocolo inicial</div>
      <div class="__rightColumnForm" id="prti">
        {{ d.protocoloInicial }}</div>
    </div>

    <div class="__formRow" id="11">

      <div class="__leftColumnForm" id="11L">
        Última Atualização</div>

      <div class="__rightColumnForm" id="11R">
        {{d.dataUltimaAtualizacao}}

        <div class="__statusRow">

          <div class="btn" :class="[d.arquivado ? 'btn btn-outline-secondary' : '{{d.nivelSituacao}}', 'btn-sm', '__botao-sit']"
          style="pointer-events: none;" disabled="${d.arquivado ? 'disabled' :  ''}">
            {{d.situacao}}
          </div>



        </div>

        <div class="__statusDiscription">
          <div class="__statusRow"></div>
          {{d.msgDetalhes}}
        </div>

        <div id="botãoDescrição" class="__statusDiscription">

          
            <button v-if="d.podePedirRecurso" type="button" :class="['btn', 'btn-success', '__button-submit']">
              Apresentar Recurso</button>
                   
            <button v-if="d.podeCumprirExigencia" type="button" :class="['btn', 'btn-success', '__button-submit']">
              Cumprir Exigência</button>
          

              <a ><RouterLink to="/minhassolicitacoes" class="__voltar-minhas"> VER MINHAS SOLICITAÇÕES</RouterLink> </a>
        </div>

      </div>
    </div>



  </div>

  <LinhaDoTempo />
</div>
</template>


<style scoped>
@import '../../src/assets/cssnovo/comum.css';
@import '../../src/assets/cssnovo/corpo.css';
@import '../../src/assets/cssnovo/corpo-ds.css';
@import '../../src/assets/cssnovo/grupo-enviar.css';


.nivel-processando {
  color: #007bff;
  background-color: transparent;
  background-image: none;
  border-color: #007bff;
}

.nivel-negado {
  color: #dc3545;
  background-color: transparent;
  background-image: none;
  border-color: #dc3545;
}

.nivel-aprovado {
  color: #28a745;
  border-color: #28a745;
}

</style>
