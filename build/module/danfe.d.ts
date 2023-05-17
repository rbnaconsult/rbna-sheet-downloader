import { NFeXML } from './types';
import { XLSXOptions } from './utils';
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
declare function downloadDanfeXLSXFromNfes(nfes: NFeXML[], options: XLSXOptions): void;
declare function downloadExampleDanfeXLSX(): void;
export { downloadDanfeXLSXFromNfes, downloadExampleDanfeXLSX };
export type { DanfeXLSXRow };
