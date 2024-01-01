'use client'

import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

import cover from '@public/cover-image.jpeg'

const RequireAuthModal = ({
  open = false,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  console.log('🚀 ~ file: RequireAuthModal.tsx:13 ~ open:', open)
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <div className="card w-96 glass">
          <figure>
            <Image src={cover} alt="cover image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>

        <button onClick={() => setOpen(false)}>Deactivate</button>
        <button onClick={() => setOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  )
}

export default RequireAuthModal
