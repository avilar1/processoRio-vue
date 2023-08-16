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
                        <arg1>17335182743</arg1>\n
                      <!--Optional:-->\n
                        <arg2>2018-01-10T15:51:24</arg2>\n
                    </impl:obterTodasSolicitacoesPeticionamento>\n
                </soapenv:Body>\n
              </soapenv:Envelope> \n`,
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

        const {
          numeroSolicitacao,
          ...otherProps
        } = parsedResponse;

        Object.assign(this, otherProps);
      })
      .catch(function (error) {
        console.log(error);
      });



  }
})



</script>

<template>
  <main>
    <div class="__container">
      {{ info }}

      <div v-for="f in info">
        
        
      </div>

<!--

      <table id="tabela" class="sortable asc">
        <thead>

          <tr data-corpo="linhacorpo">
            <th id="cardT1" class="__ths nselected" data-t="1" data-sort-tbr="1" data-th="th1">Número da solicitação</th>
            <th id="cardT2" class="__ths nselected" data-t="2" data-sort-tbr="2" data-th="th2">Data da solicitação</th>
            <th id="cardT3" class="__ths nselected" data-t="3" data-sort-tbr="3" data-th="th3">Serviço</th>
            <th id="cardT4" class="__ths nselected" data-t="4" data-sort-tbr="4" data-th="th4">Órgão</th>
            <th id="cardT5" class="__ths nselected" data-t="5" data-sort-tbr="5" data-th="th5">Última atualização</th>
            <th id="cardT6" class="__ths nselected" data-t="6" data-sort-tbr="0" data-th="th6">Situação</th>
          </tr>
        </thead>

        <tbody id="modelo" data-tbody>
          <c:forEach var="d" items="${docs}">
            <tr class="${d.arquivadaStyleClass} __card-corpo-desk" id="${d.idDoc}" data-desk="row">
              <td id="cardI1-desk" data-desk="nso">
                <a href="${pageContext.request.contextPath}/public/app/detalhessolicitacao?sigla=${d.protocoloInicial}"
                  data-desk="nso">
                  ${d.numeroSolicitacao}</a>
              </td>
              <td id="cardI2-desk" data-desk="dso">${d.dataSolicitacao}</td>
              <td id="cardI3-desk" data-desk="srv">${d.servico}</td>
              <td id="cardI4-desk" data-desk="org">${d.orgao}</td>
              <td id="cardI5-desk" data-desk="uta">${d.dataUltimaAtualizacao}</td>


              <c:choose>
                <c:when test='${d.podeCumprirExigencia}'>
                  <td id="cardI6-desk" data-desk="sit" data-sort-alt="CumprirExigencia" data-sort="5">
                    <input id="btnGravarDocumento1" type="button"
                      onclick="javascript:cumprirExigencia('${d.protocoloInicial}'); return false;" name="Gravar"
                      class="btn btn-success btn-sm __botao-sit __botao-sit-desk" data-desk="sitA"
                      value="Cumprir Exigência" />

                  </td>

                </c:when>

                <c:otherwise>
                  <td id="cardI6-desk" data-desk="sit" data-mod="sit" data-sort-alt="${d.situacao}"
                    data-sort="${d.situacao}">
                    <a href="#" class="btn ${d.arquivada ? 'btn-outline-secondary': d.nivelSituacao} btn-sm __botao-sit"
                      data-desk="sitA" disabled="disabled" style="pointer-events: none;">
                      ${d.situacao}</a>

                  </td>
                </c:otherwise>
              </c:choose>

            </tr>

            <tr data-linha class="${d.arquivadaStyleClass}" id="${d.idDoc}">
              <td class="accordion accordion-flush" data-acc="aflush">

                <div class="accordion-item" id="accordionitem" data-acc="aitem">
                  <h2 class="accordion-header" id="ahone" data-acc="ahone">
                    <button class="accordion-button collapsed" id="accordionbutton" type="button"
                      data-bs-toggle="collapse" data-bs-target="" aria-expanded="false" aria-controls=""
                      data-acc="abutton" data-id="" data-qualacc="">
                      ${d.servico}
                    </button>
                  </h2>

                  <div class="accordion-collapse collapse" aria-labelledby="" data-bs-parent="#accordionFlushExample"
                    data-acc="acone">
                    <div class="accordion-body" id="accordionbody" data-acc="abody">
                      <dl class="__card-corpo" id="cardbody" data-acc="acardb">
                        <dd id="cardI6">
                          <c:choose>

                            <c:when test='${d.podeCumprirExigencia}'>

                              <input id="btnGravarDocumento2" type="button"
                                onclick="javascript:cumprirExigencia('${d.protocoloInicial}'); return false;"
                                name="Gravar" class="btn btn-success btn-sm __botao-sit __botao-sit-desk" data-desk="sitA"
                                value="Cumprir Exigência" />



                            </c:when>
                            <c:otherwise>

                              <a href="#" class="btn ${d.nivelSituacao} btn-sm __botao-sit" data-acc="acardisit"
                                disabled="disabled" style="pointer-events: none;">
                                ${d.situacao}</a>
                            </c:otherwise>
                          </c:choose>


                        </dd>
                        <dt id="cardTi1" data-acc="acardtnso">Número da solicitação </dt>
                        <dd id="cardI1"><a
                            href="${pageContext.request.contextPath}/public/app/detalhessolicitacao?sigla=${d.protocoloInicial}"
                            data-acc="acardinso">${d.numeroSolicitacao}</a></dd>
                        <dt id="cardTi2" data-acc="acardtdso">Data da solicitação</dt>
                        <dd id="cardI2" data-acc="acardidso">${d.dataSolicitacao}</dd>
                        <dt id="cardTi3" data-acc="acardtsrv">Serviço</dt>
                        <dd id="cardI3" data-acc="acardisrv">${d.servico}</dd>
                        <dt id="cardTi4" data-acc="acardtorg">Órgão</dt>
                        <dd id="cardI4" data-acc="acardiorg">${d.orgao}</dd>
                        <dt id="cardTi5" data-acc="acardtuta">Última atualização</dt>
                        <dd id="cardI5" data-acc="acardiuta">${d.dataUltimaAtualizacao}</dd>
                        <dt id="cardTi6" data-acc="acardtsit">Situação</dt>
                        <a
                          href="${pageContext.request.contextPath}/public/app/detalhessolicitacao?sigla=${d.protocoloInicial}">
                          Veja mais detalhes</a>
                      </dl>
                    </div>
                  </div>
                  <div id="" data-acc="asit" class="__extra-situacao" data-toggle="collapse" data-qualacc="" data-extra
                    style="display:block;">

                    <c:choose>
                      <c:when test='${d.podeCumprirExigencia}'>

                        <input id="btnGravarDocumento3" type="button"
                          onclick="javascript:cumprirExigencia('${d.protocoloInicial}'); return false;" name="Gravar"
                          class="btn btn-success btn-sm __botao-sit __botao-sit-desk" data-desk="sitA"
                          value="Cumprir Exigência" />



                      </c:when>
                      <c:otherwise>

                        <a href="#" class="btn ${d.nivelSituacao} btn-sm __botao-sit" data-acc="acardisit"
                          disabled="disabled" style="pointer-events: none;">
                          ${d.situacao}</a>
                      </c:otherwise>
                    </c:choose>

                  </div>
                </div>
              </td>
              <td data-mob="dso" data-sort="${d.dataSolicitacao}"></td>
              <td data-sort="${d.servico}"></td>
              <td data-sort="${d.orgao}"></td>
              <td data-mob="uta" data-sort="${d.dataUltimaAtualizacao}"></td>
              <c:choose>
                <c:when test='${d.podeCumprirExigencia}'>
                  <td data-sort-alt="CumprirExigencia" data-sort="5"></td>
                </c:when>
                <c:otherwise>
                  <td data-mod="sit" data-sort-alt="${d.situacao}" data-sort="${d.situacao}"></td>
                </c:otherwise>
              </c:choose>
            </tr>

          </c:forEach>
        </tbody>
      </table>
    -->
    </div>
  </main>
</template>



<style >@import '../../src/assets/cssnovo/grupo-identificacao.css';
@import '../../src/assets/cssnovo/comum.css';
@import '../../src/assets/cssnovo/corpo.css';
@import '../../src/assets/cssnovo/grupo-N-arquivos.css';
@import '../../src/assets/cssnovo/grupo-campos.css';
@import '../../src/assets/cssnovo/grupo-complementar.css';
@import '../../src/assets/cssnovo/grupo-descricao.css';
@import '../../src/assets/cssnovo/grupo-documentos.css';
@import '../../src/assets/cssnovo/grupo-enviar.css';
@import '../../src/assets/cssnovo/grupo-representante-legal.css';
@import '../../src/assets/cssnovo/grupo-termo-de-uso.css';</style>