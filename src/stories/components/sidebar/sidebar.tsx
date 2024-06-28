import { For, JSX, createSignal } from "solid-js";
import { cls } from "../../../utils/class.helper";
import Button from "../button";
import BurgerIcon from "../icons/burger.icon";
import XIcon from "../icons/x.icon";

export interface TMenuItem {
  icon?: JSX.Element;
  label: string;
  route?: string;
  isHeader?: boolean;
  menuItems?: TMenuItem[];
}
export interface TSidebarProps {
  menuItems: TMenuItem[];
  pathname: string;
  title: JSX.Element;
}
export default function Sidebar(props: TSidebarProps) {
  const [menuVisible, setMenuVisible] = createSignal(false);

  return (
    <>
      <div class="flex-col top-0 left-0 w-64 bg-white h-full border-r hidden sm:flex">
        <div class="flex items-center justify-start h-14 border-b pl-4">{props.title}</div>
        <div class="overflow-y-auto overflow-x-hidden flex-grow">
          <ul class="flex flex-col py-4 space-y-1">
            <For each={props.menuItems}>
              {(item) => (
                <li class={cls({ "px-5": !!item.isHeader })}>
                  {item.isHeader ? (
                    <div class="flex flex-row items-center h-8">
                      <div class="text-sm font-light tracking-wide text-gray-500">
                        {item.label}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.route}
                      class={cls({
                        "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 border-l-4 focus:bg-gray-50 pr-6":
                          true,
                        "border-indigo-500 text-gray-800 bg-gray-50":
                          !!item.route && props.pathname.startsWith(item.route),
                        "border-transparent":
                          !item.route || !props.pathname.startsWith(item.route),
                      })}
                    >
                      <span class="inline-flex justify-center items-center ml-4">
                        {item.icon}
                      </span>
                      <span class="ml-2 text-sm tracking-wide truncate">
                        {item.label}
                      </span>
                    </a>
                  )}
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
      <div class="flex sm:hidden absolute top-0 h-14 shadow-md w-full z-50 p-4 bg-white justify-between">
        {props.title}

        <Button variant="Info" class="!w-6 !h-6 p-1 justify-center" onClick={() => setMenuVisible(!menuVisible())}>
          <BurgerIcon class="w-5 h-5" />
        </Button>
      </div>
      <div class={cls({
        "flex-col fixed top-0 z-[52] w-full h-full bg-white p-8 sm:hidden": true,
        "flex": menuVisible(),
        "hidden": !menuVisible()
      })}>
        <button type="button" class="cursor-pointer absolute top-5 right-5 rounded-full p-2" onClick={() => setMenuVisible(false)}>
          <XIcon class="w-6 h-6" />
        </button>
        <ul class="flex flex-col py-4 space-y-1">
          <For each={props.menuItems}>
            {(item) => (
              <li class={cls({ "px-5": !!item.isHeader })}>
                {item.isHeader ? (
                  <div class="flex flex-row items-center h-8">
                    <div class="text-sm font-light tracking-wide text-gray-500">
                      {item.label}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.route}
                    onClick={() => setMenuVisible(false)}
                    class={cls({
                      "relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-100 text-gray-600 hover:text-gray-800 focus:bg-gray-50 pr-6 border-l-4":
                        true,
                      "border-indigo-500 text-gray-800 bg-gray-50":
                        !!item.route && props.pathname.startsWith(item.route),
                      "border-transparent":
                        !item.route || !props.pathname.startsWith(item.route),
                    })}
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      {item.icon}
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                      {item.label}
                    </span>
                  </a>
                )}
              </li>
            )}
          </For>
        </ul>
      </div>
    </>
  );
}
