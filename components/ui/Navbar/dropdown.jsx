// Headless UI 2.x for React, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Transition,
  } from "@headlessui/react";
  
  export default function DropdownsSimple() {
    return (
      <>
        {/* Dropdowns: Simple */}
        <div className="flex justify-end">
          {/* Dropdown Container */}
          <Menu as="div" className="relative inline-block">
            {/* Dropdown Toggle Button */}
            <MenuButton className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-700 bg-purple-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-purple-600 hover:bg-purple-600 hover:text-white focus:ring focus:ring-purple-400/50 active:border-purple-700 active:bg-purple-700 dark:focus:ring-purple-400/90">
              <span>Holy Books</span>
              <svg
                className="hi-mini hi-chevron-down inline-block size-4 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </MenuButton>
            {/* END Dropdown Toggle Button */}
  
            {/* Dropdown */}
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <MenuItems
                modal={false}
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg shadow-xl focus:outline-none dark:shadow-gray-900"
              >
                <div className="divide-y divide-gray-100 rounded-lg bg-white ring-1 ring-black/5 dark:divide-gray-700 dark:bg-gray-800 dark:ring-gray-700">

                  <div className="space-y-1 p-2.5">
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="bhagavadgita"
                          className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                            focus
                              ? "bg-purple-50 text-purple-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                              : "text-gray-700 hover:bg-purple-50 hover:text-purple-800 active:border-purple-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                          }`}
                        >
     
                          <span className="grow">Bhagavad Gita</span>
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="bible"
                          className={`group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium ${
                            focus
                              ? "bg-purple-50 text-purple-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
                              : "text-gray-700 hover:bg-purple-50 hover:text-purple-800 active:border-purple-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600"
                          }`}
                        >

                          <span className="grow">Holy Bible</span>
                        </a>
                      )}
                    </MenuItem>
                  </div>
                  
                </div>
              </MenuItems>
            </Transition>
            {/* END Dropdown */}
          </Menu>
          {/* END Dropdown Container */}
        </div>
        {/* END Dropdowns: Simple */}
  
        {/* Placeholder */}
        {/* <div className="mt-2 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 py-48 text-gray-400 dark:border-gray-700 dark:bg-gray-900">
          Content
        </div> */}
      </>
    );
  }
  