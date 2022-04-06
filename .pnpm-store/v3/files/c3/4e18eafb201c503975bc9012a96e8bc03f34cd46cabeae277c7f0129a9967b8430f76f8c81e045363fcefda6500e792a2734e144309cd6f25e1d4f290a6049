import { HTMLAdaptor } from './HTMLAdaptor.js';
import { OptionList } from '../util/Options.js';
export declare class JsdomAdaptor extends HTMLAdaptor<HTMLElement, Text, Document> {
    static OPTIONS: OptionList;
    static cjkPattern: RegExp;
    options: OptionList;
    constructor(window: Window, options?: OptionList);
    fontSize(_node: HTMLElement): any;
    fontFamily(_node: HTMLElement): any;
    nodeSize(node: HTMLElement, _em?: number, _local?: boolean): [number, number];
    nodeBBox(_node: HTMLElement): {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
}
export declare function jsdomAdaptor(JSDOM: any, options?: OptionList): HTMLAdaptor<HTMLElement, Text, Document>;
