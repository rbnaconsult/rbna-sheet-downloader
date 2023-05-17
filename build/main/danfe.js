"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadExampleDanfeXLSX = exports.downloadDanfeXLSXFromNfes = void 0;
const _13477_json_1 = __importDefault(require("./data/13477.json"));
const utils_1 = require("./utils");
function downloadDanfeXLSXFromNfes(nfes, options) {
    const rows = nfes
        .map((nfe) => {
        const { ide, emit, det } = nfe.nfeProc.NFe.infNFe;
        return det.map(({ prod, imposto }) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const { IPI, ICMS, COFINS, PIS } = imposto;
            // TODO: testar se o CST pode vir de vários lugares mesmo
            const cst = ((_a = IPI === null || IPI === void 0 ? void 0 : IPI.IPINT) === null || _a === void 0 ? void 0 : _a.CST) || ((_b = ICMS === null || ICMS === void 0 ? void 0 : ICMS.ICMS40) === null || _b === void 0 ? void 0 : _b.CST) || ((_c = COFINS === null || COFINS === void 0 ? void 0 : COFINS.COFINSNT) === null || _c === void 0 ? void 0 : _c.CST) || ((_d = PIS === null || PIS === void 0 ? void 0 : PIS.PISNT) === null || _d === void 0 ? void 0 : _d.CST);
            return {
                'Data de Emissão': ide.dhEmi,
                'Nome do Emitente': emit.xNome,
                'Número ': ide.nNF,
                'Descrição ': prod.xProd,
                'CST ': cst || 'NÃO ENCONTRADO',
                'Unidade ': prod.uTrib,
                'Quantidade ': prod.qTrib,
                'Valor Unitário': prod.vUnTrib,
                'Base de Cálculo ICMS': ((_f = (_e = imposto.ICMS) === null || _e === void 0 ? void 0 : _e.ICMS00) === null || _f === void 0 ? void 0 : _f.vBC) || 'NÃO ENCONTRADO',
                'Aliquota ICMS': ((_h = (_g = imposto.ICMS) === null || _g === void 0 ? void 0 : _g.ICMS00) === null || _h === void 0 ? void 0 : _h.pICMS) || 'NÃO ENCONTRADO',
            };
        });
    })
        .flat();
    utils_1.downloadXLSXSpreadsheet(rows, options);
}
exports.downloadDanfeXLSXFromNfes = downloadDanfeXLSXFromNfes;
function downloadExampleDanfeXLSX() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    downloadDanfeXLSXFromNfes([_13477_json_1.default], {
        filename: '[EXEMPLO] Danfe',
    });
}
exports.downloadExampleDanfeXLSX = downloadExampleDanfeXLSX;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFuZmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGFuZmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0VBQTBDO0FBRTFDLG1DQUErRDtBQWUvRCxTQUFTLHlCQUF5QixDQUFDLElBQWMsRUFBRSxPQUFvQjtJQUNyRSxNQUFNLElBQUksR0FBbUIsSUFBSTtTQUM5QixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNYLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNsRCxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFOztZQUNuQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO1lBRTNDLHlEQUF5RDtZQUN6RCxNQUFNLEdBQUcsR0FDUCxPQUFBLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxLQUFLLDBDQUFFLEdBQUcsWUFDZixJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsTUFBTSwwQ0FBRSxHQUFHLENBQUEsV0FDakIsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFFBQVEsMENBQUUsR0FBRyxDQUFBLFdBQ3JCLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxLQUFLLDBDQUFFLEdBQUcsQ0FBQSxDQUFDO1lBRWxCLE9BQU87Z0JBQ0wsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLEtBQUs7Z0JBQzVCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUM5QixTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUc7Z0JBQ2xCLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDeEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxnQkFBZ0I7Z0JBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDdEIsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUN6QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDOUIsc0JBQXNCLEVBQUUsYUFBQSxPQUFPLENBQUMsSUFBSSwwQ0FBRSxNQUFNLDBDQUFFLEdBQUcsS0FBSSxnQkFBZ0I7Z0JBQ3JFLGVBQWUsRUFBRSxhQUFBLE9BQU8sQ0FBQyxJQUFJLDBDQUFFLE1BQU0sMENBQUUsS0FBSyxLQUFJLGdCQUFnQjthQUNqRSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7U0FDRCxJQUFJLEVBQUUsQ0FBQztJQUVWLCtCQUF1QixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBU1EsOERBQXlCO0FBUGxDLFNBQVMsd0JBQXdCO0lBQy9CLDhEQUE4RDtJQUM5RCx5QkFBeUIsQ0FBQyxDQUFDLHFCQUFnQixDQUFDLEVBQUU7UUFDNUMsUUFBUSxFQUFFLGlCQUFpQjtLQUM1QixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRW1DLDREQUF3QiJ9