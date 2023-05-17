import { downloadDanfeXLSXFromNfes } from './danfe';
export const NFe = {
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
    downloadDanfeXLSXFromNfes([NFe], {
        filename: '[EXEMPLO] Danfe',
    });
}
export { downloadExampleDanfeXLSX };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVwRCxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUc7SUFDakIsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxlQUFlO2dCQUN0QixNQUFNLEVBQUUsOEJBQThCO2dCQUN0QyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxFQUFFLEVBQUUsbUJBQW1CO2dCQUN2QixLQUFLLEVBQUUsOENBQThDO2dCQUNyRCxPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxLQUFLLEVBQUUsR0FBRzthQUNYO1NBQ0Y7UUFDRCxHQUFHLEVBQUU7WUFDSCxNQUFNLEVBQUU7Z0JBQ04sT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFDSiw4RkFBOEY7aUJBQ2pHO2dCQUNELEdBQUcsRUFBRTtvQkFDSDt3QkFDRSxLQUFLLEVBQUUsQ0FBQzt3QkFDUixJQUFJLEVBQUU7NEJBQ0osSUFBSSxFQUFFLE9BQU87NEJBQ2IsSUFBSSxFQUFFLEVBQUU7NEJBQ1IsS0FBSyxFQUFFLFFBQVE7NEJBQ2YsSUFBSSxFQUFFLEVBQUU7NEJBQ1IsUUFBUSxFQUFFLEVBQUU7NEJBQ1osT0FBTyxFQUFFLElBQUk7NEJBQ2IsS0FBSyxFQUFFLEVBQUU7NEJBQ1QsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsS0FBSyxFQUFFLHlCQUF5Qjs0QkFDaEMsTUFBTSxFQUFFLElBQUk7NEJBQ1osUUFBUSxFQUFFLE9BQU87NEJBQ2pCLE1BQU0sRUFBRSxDQUFDOzRCQUNULEtBQUssRUFBRSxJQUFJOzRCQUNYLEdBQUcsRUFBRSxRQUFROzRCQUNiLElBQUksRUFBRSxJQUFJOzRCQUNWLElBQUksRUFBRSxJQUFJOzRCQUNWLElBQUksRUFBRSxPQUFPO3lCQUNk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