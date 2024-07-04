'use client'

import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Dispatch, Fragment, SetStateAction } from 'react'

import coverImage from '@public/images/albums/ab67706f00000002bdeb1c317ac2dd10f2397e4c.jpeg'

const AuthModalWithAlbum = ({
  open = false,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const closeModal = () => setOpen(false)

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex flex-col min-h-full items-center justify-center p-4 text-center md:space-y-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl p-14 text-left align-middle shadow-xl transition-all bg-gradient-to-b from-amber-900 via-gray-600 to-black">
                  <div className="flex flex-col justify-center gap-10">
                    <div className="relative flex flex-col md:flex-row md:space-x-8 space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-3xl mx-auto">
                      <div className="w-full md:w-1/2 grid place-items-center">
                        <Image alt="cover-image" src={coverImage} />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col space-y-6 p-3 items-center">
                        <Dialog.Title
                          as="h3"
                          className="font-black text-white md:text-3xl text-xl"
                        >
                          {' '}
                          Start listening with a free Spotify account
                        </Dialog.Title>
                        <div className="flex flex-col md:space-y-4 md:w-4/6">
                          <button className="btn btn-success rounded-full w-full">
                            Sign up for free
                          </button>
                          <button className="btn btn-outline rounded-full w-full">
                            Download app
                          </button>
                        </div>

                        <p className="text-sm font-black text-zinc-600">
                          Already have an account?
                          <button>
                            <span className="text-white pl-2">Log In</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <button className="text-gray-300 hover:text-white md:text-lg">
                Close
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default AuthModalWithAlbum
