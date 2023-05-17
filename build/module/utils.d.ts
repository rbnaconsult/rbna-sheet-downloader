interface XLSXOptions {
    filename: string;
}
declare function downloadXLSXSpreadsheet(rows: any[], options?: XLSXOptions): void;
export { downloadXLSXSpreadsheet };
export type { XLSXOptions };
