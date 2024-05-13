import { Switch as KSwitch } from "@kobalte/core";
import "./styles.css";
import { createSignal } from "solid-js";

export interface TSwitchProps {
  onChange?: (val: boolean) => void;
  checked: boolean;
  label?: string;
}
export default function Switch(props: TSwitchProps) {
  const [checked, setChecked] = createSignal(props.checked);

  const handleChange = (val: boolean) => {
    setChecked(val);
    props.onChange?.(val);
  };

  return (
    <KSwitch.Root checked={checked()} onChange={handleChange} class="switch">
      {props.label && <KSwitch.Label class="switch__label">{props.label}</KSwitch.Label>}
      <KSwitch.Input class="switch__input" />
      <KSwitch.Control class="switch__control">
        <KSwitch.Thumb class="switch__thumb" />
      </KSwitch.Control>
    </KSwitch.Root>
  );
}
