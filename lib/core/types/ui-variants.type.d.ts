import { ObjectValues } from "../../utils/object-values.helper";
export declare const EUiVariant: {
    readonly Danger: "Danger";
    readonly Info: "Info";
    readonly Success: "Success";
    readonly Warning: "Warning";
    readonly Neutral: "Neutral";
    readonly White: "White";
    readonly Black: "Black";
};
export type TUiVariant = ObjectValues<typeof EUiVariant>;
export type TUiVariantDict = {
    [id in TUiVariant]: string;
};
export declare const BorderVariantColor: TUiVariantDict;
export declare const BackgroundVariantColor: TUiVariantDict;
export declare const TextVariantColor: TUiVariantDict;
