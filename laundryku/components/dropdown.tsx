import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export interface DropdownElement {
  text: string;
  onClick: () => void;
}

export function Dropdown(props: { elements: DropdownElement[] }) {
  const { elements } = props;
  const [text, setText] = useState("Harian");

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center rounded-full bg-[#7689E7] px-4 py-0.5 font-semibold text-white shadow-sm hover:bg-[#7689E7]/90">
          {text}
          <ChevronDownIcon
            className="-mr-1 h-10 w-8 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {elements.map((element, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2",
                    )}
                    onClick={() => {
                      element.onClick();
                      setText(element.text);
                    }}
                  >
                    {element.text}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
