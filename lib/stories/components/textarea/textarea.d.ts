export interface TTextareaProps {
    label?: string;
    value: string;
    onInput: (event: Event) => void;
    placeholder?: string;
}
export default function Textarea(props: TTextareaProps): import("solid-js").JSX.Element;
