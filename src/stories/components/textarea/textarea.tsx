import { TextField } from "@kobalte/core";
import { JSX } from "solid-js";

export interface TTextareaProps extends JSX.HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  class?: string;
  name: string;
}
export default function Textarea(props: TTextareaProps) {
  return (
    <TextField.Root class={props.class}>
      {props.label && (
        <TextField.Label class="text-gray-600 text-light text-sm">
          {props.label}
        </TextField.Label>
      )}
      <TextField.TextArea
        name={props.name}
        class="w-full p-2 bg-white rounded mb-2 border border-1 outline-0 
        focus:shadow-md focus:shadow-blue-50 focus:border-blue-500 transition-all 
        duration-300 "
        rows={props.rows ?? 4}
        value={props.value}
        placeholder={props.placeholder}
        onInput={props.onInput}
      />
    </TextField.Root>
  );
}
