import { Tooltip as KTooltip } from "@kobalte/core";
import "./styles.css";
import { JSX } from "solid-js";

export interface TTooltipProps {
  children: JSX.Element | JSX.Element[];
  content: JSX.Element | string;
}
export default function Tooltip(props: TTooltipProps) {
  return (
    <KTooltip.Root>
      <KTooltip.Trigger>{props.children}</KTooltip.Trigger>
      <KTooltip.Portal>
        <KTooltip.Content class="tooltip__content">
          <KTooltip.Arrow />
          <p>{props.content}</p>
        </KTooltip.Content>
      </KTooltip.Portal>
    </KTooltip.Root>
  );
}
