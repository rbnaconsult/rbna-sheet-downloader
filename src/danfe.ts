import { NFeXML } from './types';
import { downloadXLSXSpreadsheet, XLSXOptions } from './utils';

interface DanfeXLSXRow {
  'Data de Emissão': string;
  'Nome do Emitente': string;
  'Número ': number;
  'Descrição ': string;
  'CST ': string | number;
  'Unidade ': string;
  'Quantidade ': number;
  'Valor Unitário': number;
  'Base de Cálculo ICMS': number | string;
  'Aliquota ICMS': number | string;
}

function downloadDanfeFromNfes(nfes: NFeXML[], options: XLSXOptions) {
  const rows: DanfeXLSXRow[] = nfes
    .map((nfe) => {
      const { ide, emit, det } = nfe.nfeProc.NFe.infNFe;
      return det.map(({ prod, imposto }) => {
        const { IPI, ICMS, COFINS, PIS } = imposto;

        // TODO: testar se o CST pode vir de vários lugares mesmo
        const cst =
          IPI?.IPINT?.CST ||
          ICMS?.ICMS40?.CST ||
          COFINS?.COFINSNT?.CST ||
          PIS?.PISNT?.CST;

        return {
          'Data de Emissão': ide.dhEmi,
          'Nome do Emitente': emit.xNome,
          'Número ': ide.nNF,
          'Descrição ': prod.xProd,
          'CST ': cst || 'NÃO ENCONTRADO',
          'Unidade ': prod.uTrib,
          'Quantidade ': prod.qTrib, // TODO: ou qCom? Testar
          'Valor Unitário': prod.vUnTrib,
          'Base de Cálculo ICMS': imposto.ICMS?.ICMS00?.vBC || 'NÃO ENCONTRADO',
          'Aliquota ICMS': imposto.ICMS?.ICMS00?.pICMS || 'NÃO ENCONTRADO',
        };
      });
    })
    .flat();

  downloadXLSXSpreadsheet(rows, options);
}

export { downloadDanfeFromNfes };
export type { DanfeXLSXRow };
