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
          infCpl:
            '//VENDEDOR: ELAINE - A2//PED.CLIENTE: 324.704//  BASE DE CALCULO DE ICMS: 18% = R$ 1052.00 /',
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
  downloadDanfeXLSXFromNfes([NFe as any], {
    filename: '[EXEMPLO] Danfe',
  });
}

export { downloadExampleDanfeXLSX };
