import { Switch as KSwitch } from "@kobalte/core";
import "./styles.css";
import { createSignal } from "solid-js";
export default function Switch(props) {
    const [checked, setChecked] = createSignal(props.checked);
    const handleChange = (val) => {
        setChecked(val);
        props.onChange?.(val);
    };
    return (<KSwitch.Root checked={checked()} onChange={handleChange} class="switch">
      {props.label && <KSwitch.Label class="switch__label">{props.label}</KSwitch.Label>}
      <KSwitch.Input class="switch__input"/>
      <KSwitch.Control class="switch__control">
        <KSwitch.Thumb class="switch__thumb"/>
      </KSwitch.Control>
    </KSwitch.Root>);
}
