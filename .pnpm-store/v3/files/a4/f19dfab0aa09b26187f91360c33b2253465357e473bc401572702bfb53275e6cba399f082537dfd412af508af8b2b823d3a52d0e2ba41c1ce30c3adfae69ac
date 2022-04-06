import { ZBarSymbolType } from './enum';
export interface Point {
    x: number;
    y: number;
}
export declare class Symbol {
    type: ZBarSymbolType;
    typeName: string;
    data: Int8Array;
    points: Array<Point>;
    time: number;
    cacheCount: number;
    quality: number;
    private constructor();
    static createSymbolsFromPtr(ptr: number, buf: ArrayBuffer): Array<Symbol>;
    decode(encoding?: string): string;
}
