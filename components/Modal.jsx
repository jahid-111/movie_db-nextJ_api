"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const router = useRouter();
  const modalRef = useRef(null);

  const onHide = useCallback(() => {
    router.back();
  }, [router]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onHide();
      }
    },
    [onHide]
  );

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-gray-700 bg-green-500/30 shadow-md border flex flex-col p-2 rounded-md dark:bg-opacity-95 "
    >
      <span
        onClick={onHide}
        className=" my-3 flex justify-between cursor-pointer"
      >
        <h3>
          Press <code className=" border  p-1 bg-red-400">ESC</code>
        </h3>

        <div>
          <h3 className="text-2xl text-red-700">X</h3>
        </div>
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
