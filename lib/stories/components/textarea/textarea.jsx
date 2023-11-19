import { TextField } from "@kobalte/core";
export default function Textarea(props) {
    return (<TextField.Root>
      {props.label && (<TextField.Label class="text-gray-600 text-light text-small">{props.label}</TextField.Label>)}
      <TextField.TextArea class="w-full p-2 bg-white rounded mb-2 border border-1 outline-0 
        focus:shadow-md focus:shadow-blue-50 focus:border-blue-500 transition-all 
        duration-300 " value={props.value} placeholder={props.placeholder} onInput={props.onInput}/>
    </TextField.Root>);
}
