import { JSX } from "solid-js";
export interface TTableAction {
    content: JSX.Element | string;
    action: (row: number) => void;
    hint: string;
}
export interface TTableProps {
    columns: string[];
    data: string[][];
    actions?: TTableAction[];
}
export default function Table(props: TTableProps): JSX.Element;
