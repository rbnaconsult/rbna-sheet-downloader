"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadExampleDanfeXLSX = exports.NFe = void 0;
const danfe_1 = require("./danfe");
exports.NFe = {
    nfeProc: {
        protNFe: {
            infProt: {
                nProt: 135160563472648,
                digVal: '7uZZ48MU+ZRAccuon6rSd9Af3dM=',
                dhRecbto: '2016-09-12T10:41:00-03:00',
                Id: 'Id135160563472648',
                chNFe: '35160957831455000176550010000134771004200009',
                xMotivo: 'Autorizado o uso da NF-e',
                cStat: 100,
            },
        },
        NFe: {
            infNFe: {
                infAdic: {
                    infCpl: '//VENDEDOR: ELAINE - A2//PED.CLIENTE: 324.704//  BASE DE CALCULO DE ICMS: 18% = R$ 1052.00 /',
                },
                det: [
                    {
                        nItem: 1,
                        prod: {
                            xPed: 324.704,
                            cEAN: '',
                            cProd: '008370',
                            qCom: 26,
                            cEANTrib: '',
                            vUnTrib: 28.5,
                            qTrib: 26,
                            vProd: 741,
                            xProd: 'VB150R-0100XT003 - ANEL',
                            vUnCom: 28.5,
                            nItemPed: '00010',
                            indTot: 1,
                            uTrib: 'PC',
                            NCM: 39269090,
                            uCom: 'PC',
                            CFOP: 5101,
                            CEST: 1002000,
                        },
                        imposto: {
                            ICMS: {
                                ICMS00: {
                                    modBC: 3,
                                    orig: 0,
                                    CST: '00',
                                    vBC: 741,
                                    vICMS: 133.38,
                                    pICMS: 18,
                                },
                            },
                            IPI: {
                                cEnq: 999,
                                IPITrib: {
                                    CST: 50,
                                    vBC: 741,
                                    pIPI: 15,
                                    vIPI: 111.15,
                                },
                            },
                            COFINS: {
                                COFINSAliq: {
                                    vCOFINS: 22.23,
                                    CST: '01',
                                    vBC: 741,
                                    pCOFINS: 3,
                                },
                            },
                            PIS: {
                                PISAliq: {
                                    vPIS: 4.82,
                                    CST: '01',
                                    vBC: 741,
                                    pPIS: 0.65,
                                },
                            },
                        },
                    },
                    {
                        nItem: 2,
                        prod: {
                            xPed: 324.704,
                            cEAN: '',
                            cProd: '007892',
                            qCom: 100,
                            cEANTrib: '',
                            vUnTrib: 1.87,
                            qTrib: 100,
                            vProd: 187,
                            xProd: `"VR224-050XM020-5" - ANEL`,
                            vUnCom: 1.87,
                            nItemPed: '00020',
                            indTot: 1,
                            uTrib: 'PC',
                            NCM: 39269090,
                            uCom: 'PC',
                            CFOP: 5101,
                            CEST: 1002000,
                        },
                        imposto: {
                            ICMS: {
                                ICMS00: {
                                    modBC: 3,
                                    orig: 0,
                                    CST: '00',
                                    vBC: 187,
                                    vICMS: 33.66,
                                    pICMS: 18,
                                },
                            },
                            IPI: {
                                cEnq: 999,
                                IPITrib: {
                                    CST: 50,
                                    vBC: 187,
                                    pIPI: 15,
                                    vIPI: 28.05,
                                },
                            },
                            COFINS: {
                                COFINSAliq: {
                                    vCOFINS: 5.61,
                                    CST: '01',
                                    vBC: 187,
                                    pCOFINS: 3,
                                },
                            },
                            PIS: {
                                PISAliq: {
                                    vPIS: 1.22,
                                    CST: '01',
                                    vBC: 187,
                                    pPIS: 0.65,
                                },
                            },
                        },
                    },
                    {
                        nItem: 3,
                        prod: {
                            xPed: 324.704,
                            cEAN: '',
                            cProd: '007708',
                            qCom: 100,
                            cEANTrib: '',
                            vUnTrib: 1.24,
                            qTrib: 100,
                            vProd: 124,
                            xProd: 'VR214-0050XM020-DF - ANEL',
                            vUnCom: 1.24,
                            nItemPed: '00030',
                            indTot: 1,
                            uTrib: 'PC',
                            NCM: 39269090,
                            uCom: 'PC',
                            CFOP: 5101,
                            CEST: 1002000,
                        },
                        imposto: {
                            ICMS: {
                                ICMS00: {
                                    modBC: 3,
                                    orig: 0,
                                    CST: '00',
                                    vBC: 124,
                                    vICMS: 22.32,
                                    pICMS: 18,
                                },
                            },
                            IPI: {
                                cEnq: 999,
                                IPITrib: {
                                    CST: 50,
                                    vBC: 124,
                                    pIPI: 15,
                                    vIPI: 18.6,
                                },
                            },
                            COFINS: {
                                COFINSAliq: {
                                    vCOFINS: 3.72,
                                    CST: '01',
                                    vBC: 124,
                                    pCOFINS: 3,
                                },
                            },
                            PIS: {
                                PISAliq: {
                                    vPIS: 0.81,
                                    CST: '01',
                                    vBC: 124,
                                    pPIS: 0.65,
                                },
                            },
                        },
                    },
                ],
                total: {
                    ICMSTot: {
                        vICMSUFDest: 0,
                        vICMSUFRemet: 0,
                        vCOFINS: 31.56,
                        vBCST: 0,
                        vICMSDeson: 0,
                        vFCPUFDest: 0,
                        vProd: 1052,
                        vSeg: 0,
                        vNF: 1209.8,
                        vTotTrib: 0,
                        vPIS: 6.85,
                        vBC: 1052,
                        vST: 0,
                        vICMS: 189.36,
                        vII: 0,
                        vDesc: 0,
                        vOutro: 0,
                        vIPI: 157.8,
                        vFrete: 0,
                    },
                },
                cobr: {
                    fat: {
                        vOrig: 1209.8,
                        nFat: 13477,
                        vLiq: 1209.8,
                    },
                    dup: [
                        {
                            dVenc: '2016-10-10',
                            nDup: '13477A',
                            vDup: 1209.8,
                        },
                    ],
                },
                Id: 'NFe35160957831455000176550010000134771004200009',
                ide: {
                    tpNF: 1,
                    mod: 55,
                    indPres: 3,
                    tpImp: 1,
                    nNF: 13477,
                    cMunFG: 3550308,
                    procEmi: 3,
                    finNFe: 1,
                    dhEmi: '2016-09-12T10:33:32-03:00',
                    tpAmb: 1,
                    indFinal: 0,
                    idDest: 1,
                    tpEmis: 1,
                    cDV: 9,
                    cUF: 35,
                    serie: 1,
                    natOp: 'VENDA PROD. P/CONTR',
                    cNF: '00420000',
                    verProc: '3.10.86',
                    indPag: 1,
                },
                emit: {
                    xNome: 'CENTERFLON INDUSTRIA E COMERCIO LTDA.',
                    CRT: 3,
                    xFant: 'CENTERFLON',
                    CNPJ: 57831455000176,
                    enderEmit: {
                        UF: 'SP',
                        xPais: 'BRASIL',
                        cPais: 1058,
                        xLgr: 'RUA PAULO ADORNO',
                        xMun: 'SAO PAULO',
                        nro: 42,
                        cMun: 3550308,
                        xBairro: 'LIMAO',
                        CEP: '02551130',
                    },
                    IE: 111829410112,
                },
                dest: {
                    xNome: 'RTS IND. E COM. DE VALVULAS LTDA',
                    CNPJ: 59420349000397,
                    enderDest: {
                        fone: 24237322,
                        UF: 'SP',
                        xPais: 'BRASIL',
                        cPais: 1058,
                        xLgr: 'RUA ARROIO CHUI',
                        xMun: 'GUARULHOS',
                        nro: 26,
                        cMun: 3518800,
                        xBairro: 'ITAPEGICA',
                        CEP: '07042170',
                    },
                    IE: 336718057117,
                    indIEDest: 1,
                    email: 'nfe@rtsvalvulas.com.br',
                },
                transp: {
                    modFrete: 1,
                    vol: [
                        {
                            marca: 'CENTERFLON',
                            pesoL: 0.9,
                            esp: 'VOLUME',
                            qVol: 1,
                            pesoB: 1,
                        },
                    ],
                    transporta: {
                        xNome: 'NOSSO CARRO -',
                        UF: 'SP',
                        xMun: 'SAO PAULO',
                        CNPJ: 52931904000134,
                    },
                },
            },
        },
        versao: 3.1,
    },
};
function downloadExampleDanfeXLSX() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    danfe_1.downloadDanfeXLSXFromNfes([exports.NFe], {
        filename: '[EXEMPLO] Danfe',
    });
}
exports.downloadExampleDanfeXLSX = downloadExampleDanfeXLSX;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFvRDtBQUV2QyxRQUFBLEdBQUcsR0FBRztJQUNqQixPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLE1BQU0sRUFBRSw4QkFBOEI7Z0JBQ3RDLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLEVBQUUsRUFBRSxtQkFBbUI7Z0JBQ3ZCLEtBQUssRUFBRSw4Q0FBOEM7Z0JBQ3JELE9BQU8sRUFBRSwwQkFBMEI7Z0JBQ25DLEtBQUssRUFBRSxHQUFHO2FBQ1g7U0FDRjtRQUNELEdBQUcsRUFBRTtZQUNILE1BQU0sRUFBRTtnQkFDTixPQUFPLEVBQUU7b0JBQ1AsTUFBTSxFQUNKLDhGQUE4RjtpQkFDakc7Z0JBQ0QsR0FBRyxFQUFFO29CQUNIO3dCQUNFLEtBQUssRUFBRSxDQUFDO3dCQUNSLElBQUksRUFBRTs0QkFDSixJQUFJLEVBQUUsT0FBTzs0QkFDYixJQUFJLEVBQUUsRUFBRTs0QkFDUixLQUFLLEVBQUUsUUFBUTs0QkFDZixJQUFJLEVBQUUsRUFBRTs0QkFDUixRQUFRLEVBQUUsRUFBRTs0QkFDWixPQUFPLEVBQUUsSUFBSTs0QkFDYixLQUFLLEVBQUUsRUFBRTs0QkFDVCxLQUFLLEVBQUUsR0FBRzs0QkFDVixLQUFLLEVBQUUseUJBQXlCOzRCQUNoQyxNQUFNLEVBQUUsSUFBSTs0QkFDWixRQUFRLEVBQUUsT0FBTzs0QkFDakIsTUFBTSxFQUFFLENBQUM7NEJBQ1QsS0FBSyxFQUFFLElBQUk7NEJBQ1gsR0FBRyxFQUFFLFFBQVE7NEJBQ2IsSUFBSSxFQUFFLElBQUk7NEJBQ1YsSUFBSSxFQUFFLElBQUk7NEJBQ1YsSUFBSSxFQUFFLE9BQU87eUJBQ2Q7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLElBQUksRUFBRTtnQ0FD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