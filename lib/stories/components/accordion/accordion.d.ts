import { JSX } from "solid-js";
import "./styles.css";
import { TUiVariant } from "../../../core/types/ui-variants.type";
export type TAccordionItem = {
    header: JSX.Element | string;
    content: JSX.Element | string;
    key: string;
};
export interface TAccordionProps {
    items: TAccordionItem[];
    defaultValue?: string[];
    variant?: TUiVariant;
    disabled?: boolean;
}
export default function Accordion(props: TAccordionProps): JSX.Element;
