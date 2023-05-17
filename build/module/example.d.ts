export declare const NFe: {
    nfeProc: {
        protNFe: {
            infProt: {
                nProt: number;
                digVal: string;
                dhRecbto: string;
                Id: string;
                chNFe: string;
                xMotivo: string;
                cStat: number;
            };
        };
        NFe: {
            infNFe: {
                infAdic: {
                    infCpl: string;
                };
                det: {
                    nItem: number;
                    prod: {
                        xPed: number;
                        cEAN: string;
                        cProd: string;
                        qCom: number;
                        cEANTrib: string;
                        vUnTrib: number;
                        qTrib: number;
                        vProd: number;
                        xProd: string;
                        vUnCom: number;
                        nItemPed: string;
                        indTot: number;
                        uTrib: string;
                        NCM: number;
                        uCom: string;
                        CFOP: number;
                        CEST: number;
                    };
                    imposto: {
                        ICMS: {
                            ICMS00: {
                                modBC: number;
                                orig: number;
                                CST: string;
                                vBC: number;
                                vICMS: number;
                                pICMS: number;
                            };
                        };
                        IPI: {
                            cEnq: number;
                            IPITrib: {
                                CST: number;
                                vBC: number;
                                pIPI: number;
                                vIPI: number;
                            };
                        };
                        COFINS: {
                            COFINSAliq: {
                                vCOFINS: number;
                                CST: string;
                                vBC: number;
                                pCOFINS: number;
                            };
                        };
                        PIS: {
                            PISAliq: {
                                vPIS: number;
                                CST: string;
                                vBC: number;
                                pPIS: number;
                            };
                        };
                    };
                }[];
                total: {
                    ICMSTot: {
                        vICMSUFDest: number;
                        vICMSUFRemet: number;
                        vCOFINS: number;
                        vBCST: number;
                        vICMSDeson: number;
                        vFCPUFDest: number;
                        vProd: number;
                        vSeg: number;
                        vNF: number;
                        vTotTrib: number;
                        vPIS: number;
                        vBC: number;
                        vST: number;
                        vICMS: number;
                        vII: number;
                        vDesc: number;
                        vOutro: number;
                        vIPI: number;
                        vFrete: number;
                    };
                };
                cobr: {
                    fat: {
                        vOrig: number;
                        nFat: number;
                        vLiq: number;
                    };
                    dup: {
                        dVenc: string;
                        nDup: string;
                        vDup: number;
                    }[];
                };
                Id: string;
                ide: {
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
                    idDest: number;
                    tpEmis: number;
                    cDV: number;
                    cUF: number;
                    serie: number;
                    natOp: string;
                    cNF: string;
                    verProc: string;
                    indPag: number;
                };
                emit: {
                    xNome: string;
                    CRT: number;
                    xFant: string;
                    CNPJ: number;
                    enderEmit: {
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
                };
                dest: {
                    xNome: string;
                    CNPJ: number;
                    enderDest: {
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
                };
                transp: {
                    modFrete: number;
                    vol: {
                        marca: string;
                        pesoL: number;
                        esp: string;
                        qVol: number;
                        pesoB: number;
                    }[];
                    transporta: {
                        xNome: string;
                        UF: string;
                        xMun: string;
                        CNPJ: number;
                    };
                };
            };
        };
        versao: number;
    };
};
declare function downloadExampleDanfeXLSX(): void;
export { downloadExampleDanfeXLSX };
