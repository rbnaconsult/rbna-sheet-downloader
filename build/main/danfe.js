"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadDanfeFromNfes = void 0;
const utils_1 = require("./utils");
function downloadDanfeFromNfes(nfes, options) {
    const rows = nfes
        .map((nfe) => {
        const { ide, emit, det } = nfe.nfeProc.NFe.infNFe;
        return det.map(({ prod, imposto }) => {
            var _a, _b, _c, _d;
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
                'Base de Cálculo ICMS': 'NÃO SEI ONDE DO XML',
                'Aliquota ICMS': 'NÃO SEI ONDE DO XML',
            };
        });
    })
        .flat();
    utils_1.downloadXLSXSpreadsheet(rows, options);
}
exports.downloadDanfeFromNfes = downloadDanfeFromNfes;
utils_1.downloadXLSXSpreadsheet([]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFuZmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGFuZmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbUNBQStEO0FBZS9ELFNBQVMscUJBQXFCLENBQUMsSUFBYyxFQUFFLE9BQW9CO0lBQ2pFLE1BQU0sSUFBSSxHQUFtQixJQUFJO1NBQzlCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ1gsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ2xELE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7O1lBQ25DLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUM7WUFFM0MseURBQXlEO1lBQ3pELE1BQU0sR0FBRyxHQUNQLE9BQUEsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLEtBQUssMENBQUUsR0FBRyxZQUNmLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxNQUFNLDBDQUFFLEdBQUcsQ0FBQSxXQUNqQixNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsUUFBUSwwQ0FBRSxHQUFHLENBQUEsV0FDckIsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLEtBQUssMENBQUUsR0FBRyxDQUFBLENBQUM7WUFFbEIsT0FBTztnQkFDTCxpQkFBaUIsRUFBRSxHQUFHLENBQUMsS0FBSztnQkFDNUIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQzlCLFNBQVMsRUFBRSxHQUFHLENBQUMsR0FBRztnQkFDbEIsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUN4QixNQUFNLEVBQUUsR0FBRyxJQUFJLGdCQUFnQjtnQkFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUN0QixhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ3pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUM5QixzQkFBc0IsRUFBRSxxQkFBcUI7Z0JBQzdDLGVBQWUsRUFBRSxxQkFBcUI7YUFDdkMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxFQUFFLENBQUM7SUFFViwrQkFBdUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVRLHNEQUFxQjtBQUc5QiwrQkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyJ9