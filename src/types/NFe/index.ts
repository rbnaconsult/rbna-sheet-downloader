// Informações em manual em:
// http://www.fazenda.rj.gov.br/sefaz/content/conn/UCMServer/path/Contribution%20Folders/site_fazenda/informacao/sistemaseletronicos/dfe/manuais/DF-e_NFC-e.pdf?lve

/* XML que representa NFe 
O arquivo XML de nota fiscal é a versão digital da nota fiscal propriamente dita, sendo o formato utilizado para registro das informações relativas à NF-e (a nota fiscal eletrônica). Ele obedece a um padrão nacional de escrituração fiscal.
*/
export interface NFeXML {
  nfeProc: {
    protNFe: ProtNFe;
    NFe: NFe;
    versao: number;
  };
  procEventoNFe: ProcEventosNFe;
}

/* Representação de dados de uma nota fiscal eletrônica (NF-e)
segundo o modelo XML da SEFAZ (Secretaria de Estado da Fazenda).
*/
export interface NFe {
  infNFe: {
    infAdic: InfAdic;
    det: Item[];
    total: Total;
    pag: Pag;
    Id: string;
    ide: Ide;
    emit: Emitente;
    dest: Destinatario;
    transp: Transp;
  };
}

// infAdic
/* Informações adicionais da NFe
No final da nota fiscal eletrônica (NF-e), o Emitente pode ainda preencher algumas informações adicionais que não possuem campos específicos ou relativos ao controle interno da empresa.
*/
interface InfAdic {
  infCpl: string;
  obsCont: {
    xCampo: string;
    xTexto: string;
  }[];
}

// det
/* Informações dos produtos e impostos
Os dados dos produtos como descrição, código de barras, códigos CFOP, NCM e CEST, quantidades e preços. Também é informado o imposto aplicado na operação (ICMS, PIS, COFINS, IPI, II, etc.) e quanto deverá ser recolhido para o Fisco.
*/
interface Item {
  nItem: number;
  prod: Produto;
  imposto: ImpostoProduto;
}

interface Produto {
  cEAN: string;
  cProd: string;
  qCom: number;
  cEANTrib: string;
  vUnTrib: number;
  qTrib: number;
  vProd: number;
  xProd: string;
  vUnCom: number;
  indTot: number;
  uTrib: string;
  NCM: number;
  uCom: string;
  CFOP: number;
  CEST: number;
  rastro: {
    nLote: string;
    qLote: number;
    dFab: string;
    dVal: string;
    cAgreg: string;
  }[];
}

interface ImpostoProduto {
  ICMS?: {
    ICMS40?: {
      orig: number;
      CST: number;
    };
    ICMS00?: {
      modBC: number;
      orig: number;
      CST: string;
      vBC: number;
      vICMS: number;
      pICMS: number;
    };
  };
  IPI?: {
    IPINT?: {
      CST: number;
    };
    cEnq: number;
  };
  COFINS?: {
    COFINSNT?: {
      CST: string;
    };
  };
  PIS?: {
    PISNT?: {
      CST: string;
    };
  };
}

// total

/* Informações dos valores totais
Após informados todos os produtos e impostos, a NFe traz a totalização de cada operação.
*/
interface Total {
  ICMSTot: {
    vCOFINS: number;
    vBCST: number;
    vICMSDeson: number;
    vProd: number;
    vSeg: number;
    vFCP: number;
    vDesc: number;
    vFCPST: number;
    vNF: number;
    vPIS: number;
    vIPIDevol: number;
    vBC: number;
    vST: number;
    vICMS: number;
    vII: number;
    vFCPSTRet: number;
    vOutro: number;
    vIPI: number;
    vFrete: number;
  };
}

// pag
interface Pag {
  detPag: {
    vPag: number;
    tPag: number;
  }[];
}

// ide
/* 
Informações Gerais da Nota Fiscal Eletrônica (NF-e)
Reúne os principais dados: data emissão, número e série da nota fiscal, tipo, finalidade e outras informações.
*/
interface Ide {
  tpNF: number;
  mod: number;
  indPres: number;
  tpImp: number;
  nNF: number;
  cMunFG: number;
  procEmi: number;
  finNFe: number;
  dhEmi: string;
  tpAmb: number;
  indFinal: number;
  dhSaiEnt: string;
  idDest: number;
  tpEmis: number;
  cDV: number;
  cUF: number;
  serie: number;
  natOp: string;
  cNF: string;
  verProc: string;
}

// emit
/* Informações do Emitente
Os dados cadastrais (CNPJ, I.E, endereço, entre outros) do Emitente, ou seja, a empresa que está realizando a emissão da nota fiscal eletrônica
*/
interface Emitente {
  CNAE: number;
  xNome: string;
  IM: number;
  CRT: number;
  xFant: string;
  CNPJ: string;
  enderEmit: {
    fone: number;
    UF: string;
    xPais: string;
    cPais: number;
    xLgr: string;
    xMun: string;
    nro: number;
    cMun: number;
    xBairro: string;
    CEP: string;
  };
  IE: number;
}

// dest
/* Informações do Destinatário
Os dados cadastrais (CNPJ/CPF, I.E/ou não, endereço, entre outros) do Destinatário, ou seja, os dados para quem está sendo feita a emissão.
*/
interface Destinatario {
  xNome: string;
  CNPJ: string;
  enderDest: {
    xCpl: string;
    fone: number;
    UF: string;
    xPais: string;
    cPais: number;
    xLgr: string;
    xMun: string;
    nro: number;
    cMun: number;
    xBairro: string;
    CEP: string;
  };
  IE: number;
  indIEDest: number;
  email: string;
}

// transp
/* Informações do Transportador e Transporte
Caso seja preenchido os campos na emissão da nota, aqui estarão os dados da empresa de transporte além dos dados relacionados.
*/
interface Transp {
  modFrete: number;
  vol: Vol[];
  transporta: Transporta;
}

interface Vol {
  pesoL: number;
  qVol: number;
  pesoB: number;
}

interface Transporta {
  xNome: string;
  UF: string;
  xEnder: string;
  xMun: string;
  CNPJ: string;
  IE: number;
}

// protNFe
/* Retorno da SEFAZ
Após a nota fiscal eletrônica (NF-e) ser transmitida e autorizada pela Secretaria de Estado da Fazenda (SEFAZ), é adicionado ao xml um protocolo de processamento e dados que asseguram que a NF-e é válida e possui valor fiscal.
*/
interface ProtNFe {
  infProt: {
    nProt: number;
    digVal: string;
    dhRecbto: string;
    Id: string;
    chNFe: string;
    xMotivo: string;
    cStat: number;
  };
}

// procEventoNFe
/* Eventos da NFe
Registro de uma ação ou situação relacionada com a NF-e.
*/
type ProcEventosNFe = ProcEventoNFe[];

interface ProcEventoNFe {
  evento: Evento;
  retEvento: RetEvento;
}

interface Evento {
  infEvento: {
    cOrgao: number;
    dhEvento: string;
    detEvento: {
      descEvento: string;
    };
    tpEvento: number;
  };
}

interface RetEvento {
  infEvento: {
    cOrgao: number;
    nProt: number;
    dhRegEvento: string;
    tpEvento: number;
  };
}
