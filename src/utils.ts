import * as XLSX from 'xlsx';

interface XLSXOptions {
  filename: string;
}

// Leo: I want to disable this rule on tsconfig as well
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function downloadXLSXSpreadsheet(rows: any[], options?: XLSXOptions) {
  const worksheet = XLSX.utils.json_to_sheet(rows);
  worksheet['!cols'] = getColumnWidths(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados Extraídos');
  XLSX.writeFile(workbook, `${options?.filename || 'Planilha'}.xlsx`, {
    compression: true,
  });
}

const MAX_ROW_WIDTH = 1000;
function getColumnWidths(rows: Record<string, unknown>[]) {
  const headerColumn = Object.entries(rows[0] || {});
  return headerColumn.map(([header, cellValue]) => {
    const minWidth = String(header).length;
    const maxWidth = Math.min(String(cellValue).length, MAX_ROW_WIDTH);
    const widthInCharsLenght = Math.max(minWidth, maxWidth);
    return { wch: widthInCharsLenght };
  });
}

export { downloadXLSXSpreadsheet };
export type { XLSXOptions };
