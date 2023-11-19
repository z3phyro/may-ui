import { Tooltip as KTooltip } from "@kobalte/core";
import "./styles.css";
export default function Tooltip(props) {
    return (<KTooltip.Root>
      <KTooltip.Trigger>{props.children}</KTooltip.Trigger>
      <KTooltip.Portal>
        <KTooltip.Content class="tooltip__content">
          <KTooltip.Arrow />
          <p>{props.content}</p>
        </KTooltip.Content>
      </KTooltip.Portal>
    </KTooltip.Root>);
}
