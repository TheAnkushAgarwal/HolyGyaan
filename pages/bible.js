import { useState } from "react";
import TextareaElement from "@/components/ui/Textarea";
import GeneratedTextareaElement from "@/components/ui/GeneratedTextArea";
import axios from "axios";

// Headless UI 2.x for React, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

export default function OffcanvasWithActions() {
  const [textValue, setTextValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [textAns, setTextAns] = useState('');

  const handleTextareaChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleAnswer = (event) =>{
    setTextAns(event.target.value);
  }
  function closeOffcanvas() {
    setIsOpen(false);
  }

  function openOffcanvas() {
    setIsOpen(true);
    axios({
      url: "http://localhost:8000/api/v1/Bible/query",
      data: {
        query: textValue
      },
      method: "post"
    })
      .then((response) => {
        if(response.data.chatMessage.status == "completed")
          setTextAns(response.data.chatMessage.answer)
        else setTextAns("OOPS! feels like rush hour crowd")
      }) 
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <>
      {/* Offcanvas: With Actions */}
      <div>
        {/* Placeholder */}
        <div className=" items-center justify-center rounded-lg  py-32 px-20  h-[65vh]">
          {/* Offcanvas Toggle Button */}
          <h1 className="mx-auto text-4xl text-white my-20 flex items-center justify-center">Holy Bible</h1>
          <TextareaElement value={textValue} onChange={handleTextareaChange} className="my-20"/>
          <button
            onClick={openOffcanvas}
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700 my-20 hover:bg-purple-700 hover:text-white"
          >
            Ask HolyGyaan
          </button>
          {/* END Offcanvas Toggle Button */}
        </div>
        {/* END Placeholder */}

        {/* Offcanvas Container */}
        <Transition appear show={isOpen}>
          <Dialog as="div" className="relative z-90" onClose={closeOffcanvas}>
            {/* Backdrop */}
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-300/75 backdrop-blur-sm dark:bg-gray-800/75" />
            </TransitionChild>
            {/* END Backdrop */}

            {/* Offcanvas */}
            <div className="fixed inset-0 overflow-y-auto overflow-x-hidden">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="absolute right-0 top-0 flex h-dvh w-72 flex-col bg-white shadow-lg dark:bg-gray-900 dark:text-gray-100 dark:shadow-gray-950 sm:w-full md:w-[50%]">
                  {/* Header */}
                  <div className="flex min-h-16 flex-none items-center justify-between border-b border-gray-100 px-5 dark:border-gray-800 md:px-7">
                    <DialogTitle as="h3" className="py-5 font-medium">
                      Psalms Bible
                    </DialogTitle>

                    {/* Close Button */}
                    <button
                      onClick={closeOffcanvas}
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
                    >
                      <svg
                        className="hi-solid hi-x -mx-1 inline-block size-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {/* END Close Button */}
                  </div>
                  {/* END Header */}

                  {/* Content */}
                  <div className="flex grow flex-col overflow-y-auto p-5 md:p-7">
                  
                    {/* Placeholder */}
                    <GeneratedTextareaElement value={textAns} onChange={handleAnswer}/>
{/* 
                    <TextareaElement className= "flex h-full flex-col items-center justify-center gap-5 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700/75"/> */}
                    
                  </div>
                  {/* END Content */}

                  {/* Actions */}
                  <div className="flex flex-none items-center justify-start gap-2 border-t border-gray-100 p-5 dark:border-gray-800 md:px-7">
                    <button
                      onClick={closeOffcanvas}
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-700 bg-purple-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-purple-600 hover:bg-purple-600 hover:text-white focus:ring focus:ring-purple-400/50 active:border-purple-700 active:bg-purple-700 dark:focus:ring-purple-400/90"
                    >
                      Keep asking
                    </button>

                  </div>
                  {/* END Actions */}
                </DialogPanel>
              </TransitionChild>
            </div>
            {/* END Offcanvas */}
          </Dialog>
        </Transition>
        {/* END Offcanvas Container */}
      </div>
      {/* END Offcanvas: With Actions */}
    </>
  );
}
