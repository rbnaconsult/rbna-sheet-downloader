"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadXLSXSpreadsheet = void 0;
const XLSX = __importStar(require("xlsx"));
// Leo: I want to disable this rule on tsconfig as well
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function downloadXLSXSpreadsheet(rows, options) {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    worksheet['!cols'] = getColumnWidths(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados Extraídos');
    XLSX.writeFile(workbook, `${(options === null || options === void 0 ? void 0 : options.filename) || 'Planilha'}.xlsx`, {
        compression: true,
    });
}
exports.downloadXLSXSpreadsheet = downloadXLSXSpreadsheet;
const MAX_ROW_WIDTH = 1000;
function getColumnWidths(rows) {
    const headerColumn = Object.entries(rows[0] || {});
    return headerColumn.map(([header, cellValue]) => {
        const minWidth = String(header).length;
        const maxWidth = Math.min(String(cellValue).length, MAX_ROW_WIDTH);
        const widthInCharsLenght = Math.max(minWidth, maxWidth);
        return { wch: widthInCharsLenght };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE2QjtBQU03Qix1REFBdUQ7QUFDdkQsOERBQThEO0FBQzlELFNBQVMsdUJBQXVCLENBQUMsSUFBVyxFQUFFLE9BQXFCO0lBQ2pFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNyRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFFBQVEsS0FBSSxVQUFVLE9BQU8sRUFBRTtRQUNsRSxXQUFXLEVBQUUsSUFBSTtLQUNsQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBYVEsMERBQXVCO0FBWGhDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQztBQUMzQixTQUFTLGVBQWUsQ0FBQyxJQUErQjtJQUN0RCxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNuRCxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFO1FBQzlDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDdkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyJ9