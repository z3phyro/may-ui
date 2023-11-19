import { BackgroundVariantColor, EUiVariant, } from "../../../core/types/ui-variants.type";
export default function Badge(props) {
    return (<span class={`p-1 text-sm rounded text-center ${BackgroundVariantColor[props.variant ?? EUiVariant.Neutral]} ${props.class}`}>
      {props.children}
    </span>);
}
