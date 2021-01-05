import React, { ReactNode, useEffect, useRef, MouseEvent } from "react"
import ReactDOM from "react-dom"
import { isServer } from "../../../utils/isServer"
import { AnimatePresence, motion } from "framer-motion"

type ModalProps = {
  children: ReactNode
  show: boolean
  onHide: () => void
  buttons: {
    type?: "Primary" | "Cancel"
    label: string
    handler: () => void
  }[]
}

const Modal = ({ buttons, children, show, onHide }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  function handleClickOutside(e: MouseEvent) {
    const modal = modalRef.current as Node
    const target = e.target as Node

    if (!(target === modal || modal.contains(target))) {
      void onHide()
    }
  }

  if (!isServer) {
    return ReactDOM.createPortal(
      <AnimatePresence>
        {show && (
          /* Only additional event, for outside click handling */
          /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-90 p-1 flex justify-center items-center"
            onClick={handleClickOutside}
          >
            <div
              className="bg-gray-50 px-16 py-10 rounded-xl text-center max-w-md w-full"
              ref={modalRef}
              role="dialog"
              aria-modal="true"
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )
  }
  return null
}

export default Modal
