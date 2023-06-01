<script lang="ts">
import axios from 'axios';
import HeaderCarioca from './HeaderCarioca.vue';
import GrupoIdentificacao from './GrupoIdentificacao.vue';
import { defineComponent } from 'vue';
import LinhaDoTempo from './LinhaDoTempo.vue';

let siglaDocumento: string | string[];


export default defineComponent({
  name: 'DetalhesSolicitacao',
  components: {
    LinhaDoTempo
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
      },




      arquivado: false,
      assinado: false,
      autuado: false,
      cpfSolicitante: '',
      dataSolicitacao: '',
      dataUltimaAtualizacao: '',
      descricaoSolicitacao: '',
      documentoRepresentado: '',
      horaSolicitacao: '',
      idDoc: '', //
      matriculaSolicitante: '',
      msgDetalhes: '',
      nivelSituacao: '',
      nomeRepresentado: '',
      nomeSolicitante: '',

      notificacoes: {
        data: '',
        dataHoraMov: '',
        descrTipoMovimentacao: '',
        eventoLinhaTempo: '',
        hora: '',
        idMovimentacao: '',
        idTpMov: '',
        msgLinhaTempo: '',
        numeroSolcitacao: '',
        siglaMobil: '',
        siglaMobilRef: '',
      },

      numeroSolicitacao: '',
      orgao: '',
      pessoaFisicaRepresentado: false,
      podeApresentarPeticao: false,
      podeCumprirExigencia: false,
      podeDarCiencia: false,
      podePedirRecurso: false,
      possuiComunicadoPeticionamento: false,
      possuiDecisaoNegativa: false,
      possuiDocumentoImportantePeticionamento: false,
      possuiExigenciaCumprir: false,
      possuiRepresentado: false,
      protocoloInicial: '',
      recusada: false,
      servico: '',
      siglaDespachoSituacao: '',
      siglaLotacaoDespachoSituacao: '',
      siglaMobilPai: '',
      siglaProcesso: '',
      situacao: '',


      // exemplo: 'inicio para retirar',
      // atuado: true,
      // siglaProcessos: 'ABC',
      // d: {
      //   dataSolicitacao: '12/12/2022',
      //   servico: 'serviço',
      //   orgao: 'órgão',
      //   nomeSolicitante: 'nome do Solicitante',
      //   cpfSolicitanteFormatado: '173.222.222-45',
      //   nomeRepresentado: 'Nome do Rpresentado da Silva',
      //   pessoaFisicaRepresentado: true,
      //   documentoRepresentadoFormatado: '852.741.963-48',
      //   descricaoSolicitacao: 'Descrição da solicitação',
      //   protocoloInicial: 'Protocolo Inicial',
      //   dataUltimaAtualizacao: '01/01/2002',
      //   situacao: 'situação',
      //   arquivado: true,
      //   msgDetalhes: 'Mensagem Detalhe',
      //   podePedirRecurso: true,
      //   podeCumprirExigencia: true
      //}
    };
  },
  methods: {
    //TODO
    renderizarRepresentanteLegal() {
      return false;
    }
  },
  created() {
    siglaDocumento = this.$route.params.siglaDocumento;
    this.config.data = `<?xml version="1.0" encoding="utf-8"?>\n
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:impl="http://impl.service.ex.siga.jfrj.gov.br/">\n
      <soapenv:Header/>\n
      <soapenv:Body>\n 
        <impl:obterDetalhesSolicitacaoPeticionamento>\n
          <!--Optional:--> \n
         <arg0>2MzC1NZv6ouvon84jVrjiwT0z-9d978UwQ5hBGF93PbYPokAjBcKKIbkcS_8PX2wxszf0AQTDfw-L1_HDjUeDg</arg0> \n
         <!--Optional:--> \n
         <arg1>${siglaDocumento}</arg1> \n
         <!--Optional:--> \n
         <arg2>18043287740</arg2> \n
        </impl:obterDetalhesSolicitacaoPeticionamento>\n
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


        this.info = parsedResponse;
        console.log(parsedResponse);

        this.matriculaSolicitante = parsedResponse.matriculaSolicitante;
        this.arquivado = parsedResponse.arquivado;
        this.assinado = parsedResponse.assinado;
        this.autuado = parsedResponse.autuado;
        this.cpfSolicitante = parsedResponse.cpfSolicitante;
        this.dataSolicitacao = parsedResponse.dataSolicitacao;
        this.dataUltimaAtualizacao = parsedResponse.dataUltimaAtualizacao;
        this.descricaoSolicitacao = parsedResponse.descricaoSolicitacao;
        this.documentoRepresentado = parsedResponse.documentoRepresentado;
        this.horaSolicitacao = parsedResponse.horaSolicitacao;
        this.idDoc = parsedResponse.idDoc;
        this.matriculaSolicitante = parsedResponse.matriculaSolicitante;
        this.msgDetalhes = parsedResponse.msgDetalhes;
        this.nivelSituacao = parsedResponse.nivelSituacao;
        this.nomeRepresentado = parsedResponse.nomeRepresentado;
        this.nomeSolicitante = parsedResponse.nomeSolicitante;
        this.numeroSolicitacao = parsedResponse.numeroSolicitacao;
        this.orgao = parsedResponse.orgao;
        this.pessoaFisicaRepresentado = parsedResponse.pessoaFisicaRepresentado;
        this.podeApresentarPeticao = parsedResponse.podeApresentarPeticao;
        this.podeCumprirExigencia = parsedResponse.podeCumprirExigencia;
        this.podeDarCiencia = parsedResponse.podeDarCiencia;
        this.podePedirRecurso = parsedResponse.podePedirRecurso;
        this.possuiComunicadoPeticionamento = parsedResponse.possuiComunicadoPeticionamento;
        this.possuiDecisaoNegativa = parsedResponse.possuiDecisaoNegativa;
        this.possuiDocumentoImportantePeticionamento = parsedResponse.possuiDocumentoImportantePeticionamento;
        this.possuiExigenciaCumprir = parsedResponse.possuiExigenciaCumprir;
        this.possuiRepresentado = parsedResponse.possuiRepresentado;
        this.protocoloInicial = parsedResponse.protocoloInicial;
        this.recusada = parsedResponse.recusada;
        this.servico = parsedResponse.servico;
        this.siglaDespachoSituacao = parsedResponse.siglaDespachoSituacao;
        this.siglaLotacaoDespachoSituacao = parsedResponse.siglaLotacaoDespachoSituacao;
        this.siglaMobilPai = parsedResponse.siglaMobilPai;
        this.siglaProcesso = parsedResponse.siglaProcesso;
        this.situacao = parsedResponse.situacao;


      })
      .catch(function (error) {
        console.log(error);
      });
  }
});

</script>


<template >
  <div class="__main">
    <div class="__containerDetails">

      <div v-if="autuado" class="__formRow" id="1">
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
          {{ dataSolicitacao }}</div>
      </div>

      <div class="__formRow" id="3">
        <div class="__leftColumnForm" id="3L">
          Serviço</div>
        <div class="__rightColumnForm" id="serv">
          {{ servico }}</div>
      </div>

      <div class="__formRow" id="4">
        <div class="__leftColumnForm" id="4L">
          Órgão</div>
        <div class="__rightColumnForm" id="orgg">
          {{ orgao }}</div>
      </div>

      <div class="__formRow" id="5">
        <div class="__leftColumnForm" id="5L">
          Nome do Solicitante</div>
        <div class="__rightColumnForm" id="nomm">
          {{ nomeSolicitante }}</div>
      </div>

      <div class="__formRow" id="6">
        <div class="__leftColumnForm" id="6L">
          CPF do Solicitante</div>
        <div class="__rightColumnForm" id="cpfs">
          {{ cpfSolicitante }}</div>
      </div>


      <div v-if="renderizarRepresentanteLegal()" class="__formRow" id="7">
        <div class="__leftColumnForm" id="7L">
          Nome do Representado</div>
        <div class="__rightColumnForm" id="nomr">
          {{ nomeRepresentado }}</div>
      </div>

      <div class="__formRow" id="8">
        <div class="__leftColumnForm" id="8L">
          {{ pessoaFisicaRepresentado ? 'CPF' : 'CNPJ' }} do Representado</div>
        <div class="__rightColumnForm" id="cpfr">
          {{ documentoRepresentado }}</div>
      </div>

      <div class="__formRow __formRow-mostra" id="9">
        <div class="__leftColumnForm __leftColumnForm-mostra" id="9L">
          Descrição</div>

        <div class="__rightColumnForm __rightColumnForm-mostra  __mostra-mais-pai" id="2">

          <div class="collapse" id="collapseExample">
            <div class="card card-body" id="descricaocard">
              {{ descricaoSolicitacao }}</div>
          </div>

          <div class="__mostrar-mais" id="mostramais">
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button"
              aria-expanded="false" aria-controls="collapseExample" id="btnMostrarMais"> Mostrar
              <span id="troca">mais</span>
            </a>
          </div>

        </div>
      </div>

      <div class="__formRow" id="10">
        <div class="__leftColumnForm" id="10L">
          Protocolo inicial</div>
        <div class="__rightColumnForm" id="prti">
          {{ protocoloInicial }}</div>
      </div>

      <div class="__formRow" id="11">

        <div class="__leftColumnForm" id="11L">
          Última Atualização</div>

        <div class="__rightColumnForm" id="11R">
          {{ dataUltimaAtualizacao }}

          <div class="__statusRow">

            <div class="btn"
              :class="[arquivado ? 'btn btn-outline-secondary' : nivelSituacao, 'btn-sm', '__botao-sit']"
              style="pointer-events: none;" disabled="${d.arquivado ? 'disabled' :  ''}">
              {{ situacao }}
            </div>



          </div>

          <div class="__statusDiscription">
            <div v-html="msgDetalhes" class="__statusRow"></div>
            <!-- {{ msgDetalhes }} -->
          </div>

          <div id="botãoDescrição" class="__statusDiscription">


            <button v-if="podePedirRecurso" type="button" :class="['btn', 'btn-success', '__button-submit']">
              Apresentar Recurso</button>

            <button v-if="podeCumprirExigencia" type="button" :class="['btn', 'btn-success', '__button-submit']">
              Cumprir Exigência</button>


            <a>
              <RouterLink to="/minhassolicitacoes" class="__voltar-minhas"> VER MINHAS SOLICITAÇÕES</RouterLink>
            </a>
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
