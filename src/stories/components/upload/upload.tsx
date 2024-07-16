import { JSX } from "solid-js";
import { EUiVariant, TextColor } from "../../../core/types/ui-variants.type";
import { cls } from "../../../utils/class.helper";

export interface TUploadProps {
  error?: string;
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  required?: boolean;
  onChange?: JSX.EventHandler<HTMLInputElement, Event>;
  ref?: (element: HTMLInputElement) => void;
  class?: string;
  testId?: string;
  autofocus?: boolean;
  accept?: string;
}

export default function Upload(props: TUploadProps) {
  return (
    <div
      class={cls({ "relative group": true, [props.class!]: !!props.class })}
    >
      {" "}
      {props.label && (
        <label class="text-gray-600 text-light text-sm">
          {props.label}
        </label>
      )}
      <input
        name={props.name ?? props.label}
        class={cls({
          "w-full p-2 bg-white rounded mb-2 border outline-0 focus:shadow-md transition-all duration-300 min-h-[42px]":
            true,
          "border-red-500 focus:shadow-red-50 focus:border-red-500":
            !!props.error,
          "focus:border-blue-500 focus:shadow-blue-50": !props.error,
          "text-gray-400 cursor-not-allowed": !!props.disabled,
        })}
        type="file"
        placeholder={props.placeholder}
        aria-invalid={!!props.error}
        aria-errormessage={`${props.name}-error`}
        onchange={props.onChange}
        disabled={props.disabled}
        required={props.required}
        accept={props.accept}
        data-testid={props.testId}
        autofocus={props.autofocus}
      />
      <span
        id={`${props.name}-error`}
        role="alert"
        class={`block text-xs ${TextColor[EUiVariant.Danger]}`}
      >
        {props.error}
      </span>
    </div>
  );
}

