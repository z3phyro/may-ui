export default function Breadcrumbs(props) {
    return (<nav class="mb-4 select-none">
      <ol class="flex items-center gap-2">
        {props.links.map((link, i) => (<li class="flex items-center">
            {link.href ? (<a aria-disabled={!link.href} class={`${link.active ? "text-blue-500" : "text-gray-600"}`} href={link.href ?? "#"}>
                {link.title}
              </a>) : (<span class={`${link.active ? "text-blue-500" : "text-gray-600"}`}>
                {link.title}
              </span>)}
            {i < props.links.length - 1 && <span class="ml-2">/</span>}
          </li>))}
      </ol>
    </nav>);
}
