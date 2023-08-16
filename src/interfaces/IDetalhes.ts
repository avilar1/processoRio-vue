export interface ParsedResponses {
    arquivado: boolean;
      assinado: boolean;
      autuado: boolean;
      cpfSolicitante: string;
      dataSolicitacao: string;
      dataUltimaAtualizacao: string;
      descricaoSolicitacao: string;
      documentoRepresentado: string;
      horaSolicitacao: string;
      idDoc: string; 
      matriculaSolicitante: string;
      msgDetalhes: string;
      nivelSituacao: string;
      nomeRepresentado: string;
      nomeSolicitante: string;

      notificacoes: {
        data: string;
        dataHoraMov: string;
        descrTipoMovimentacao: string;
        eventoLinhaTempo: string;
        hora: string;
        idMovimentacao: string;
        idTpMov: string;
        msgLinhaTempo: string;
        numeroSolcitacao: string;
        siglaMobil: string;
        siglaMobilRef: string;
      };

      numeroSolicitacao: string;
      orgao: string;
      pessoaFisicaRepresentado: boolean;
      podeApresentarPeticao: boolean;
      podeCumprirExigencia: boolean;
      podeDarCiencia: boolean;
      podePedirRecurso: boolean;
      possuiComunicadoPeticionamento: boolean;
      possuiDecisaoNegativa: boolean;
      possuiDocumentoImportantePeticionamento: boolean;
      possuiExigenciaCumprir: boolean;
      possuiRepresentado: boolean;
      protocoloInicial: string;
      recusada: boolean;
      servico: string;
      siglaDespachoSituacao: string;
      siglaLotacaoDespachoSituacao: string;
      siglaMobilPai: string;
      siglaProcesso: string;
      situacao: string
}
/*
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
*/