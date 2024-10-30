"use client"

import * as React from "react"
import type { Dispatch, SetStateAction } from "react"
import { useRouter } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import { Drawer } from "vaul"

import { cn } from "@automa/utils"

import { useMediaQuery } from "./hooks"

export function Modal({
  children,
  className,
  showModal,
  setShowModal,
  onClose,
  desktopOnly,
  preventDefaultClose,
}: {
  children: React.ReactNode
  className?: string
  showModal?: boolean
  setShowModal?: Dispatch<SetStateAction<boolean>>
  onClose?: () => void
  desktopOnly?: boolean
  preventDefaultClose?: boolean
}) {
  const router = useRouter()

  const closeModal = ({ dragged }: { dragged?: boolean } = {}) => {
    if (preventDefaultClose && !dragged) {
      return
    }
    // fire onClose event if provided
    onClose && onClose()

    // if setShowModal is defined, use it to close modal
    if (setShowModal) {
      setShowModal(false)
      // else, this is intercepting route @modal
    } else {
      router.back()
    }
  }
  const { isMobile } = useMediaQuery()

  if (isMobile && !desktopOnly) {
    return (
      <Drawer.Root
        open={setShowModal ? showModal : true}
        onOpenChange={(open) => {
          if (!open) {
            closeModal({ dragged: true })
          }
        }}
      >
        <Drawer.Overlay className="fixed inset-0 z-40 bg-gray-100 bg-opacity-10 backdrop-blur" />
        <Drawer.Portal>
          <Drawer.Content
            className={cn(
              "fixed bottom-0 left-0 right-0 z-50 mt-24 rounded-t-[10px] border-t border-gray-200 bg-white",
              className,
            )}
          >
            <VisuallyHidden.Root>
              <Drawer.Title>teste</Drawer.Title>
              <Drawer.Description>teste</Drawer.Description>
            </VisuallyHidden.Root>
            <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit">
              <div className="my-3 h-1 w-12 rounded-full bg-gray-300" />
            </div>
            {children}
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    )
  }

  return (
    <Dialog.Root
      open={setShowModal ? showModal : true}
      onOpenChange={(open) => {
        if (!open) {
          closeModal()
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay
          // for detecting when there's an active opened modal
          id="modal-backdrop"
          className="fixed inset-0 z-40 animate-fade-in bg-gray-100 bg-opacity-50 backdrop-blur-md"
        />
        <Dialog.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
          className={cn(
            "fixed inset-0 z-40 m-auto max-h-fit w-full max-w-md animate-scale-in overflow-hidden border border-gray-200 bg-white p-0 shadow-xl sm:rounded-2xl",
            className,
          )}
        >
          <VisuallyHidden.Root>
            <Dialog.Title>teste</Dialog.Title>
            <Dialog.Description>teste</Dialog.Description>
          </VisuallyHidden.Root>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
