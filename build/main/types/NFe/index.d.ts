export interface NFeXML {
    nfeProc: {
        protNFe: ProtNFe;
        NFe: NFe;
        versao: number;
    };
    procEventoNFe: ProcEventosNFe;
}
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
interface InfAdic {
    infCpl: string;
    obsCont: {
        xCampo: string;
        xTexto: string;
    }[];
}
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
interface Pag {
    detPag: {
        vPag: number;
        tPag: number;
    }[];
}
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
declare type ProcEventosNFe = ProcEventoNFe[];
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
export {};
