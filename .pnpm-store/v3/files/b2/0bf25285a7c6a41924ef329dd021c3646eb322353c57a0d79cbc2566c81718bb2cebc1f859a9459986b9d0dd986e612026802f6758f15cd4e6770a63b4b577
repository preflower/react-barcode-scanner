import { CppObject } from './CppObject';
import { Image } from './Image';
import { Symbol } from './Symbol';
import { ZBarSymbolType, ZBarConfigType } from './enum';
export declare class ImageScanner extends CppObject {
    static create(): Promise<ImageScanner>;
    destroy(): void;
    setConfig(sym: ZBarSymbolType, conf: ZBarConfigType, value: number): number;
    enableCache(enable?: boolean): void;
    recycleImage(image: Image): void;
    getResults(): Array<Symbol>;
    scan(image: Image): number;
}
