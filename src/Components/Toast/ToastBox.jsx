import React, { useState } from "react";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useUser } from "../../Context/userContext";
import ToastItem from "./Toast";

export default function ToastBox({ content, error = false }) {
  const { toastList } = useUser();

  // console.log(toastList);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={`position-fixed top-0 end-0 ${
        toastList.length ? "w-100" : "w-0"
      }`}
      style={{ zIndex: 1000 }}
    >
      <ToastContainer position="top-end" className="p-3">
        {toastList && toastList.length ? (
          toastList.map((toast, idx) => (
            <ToastItem key={idx} toast={toast} idx={idx} />
          ))
        ) : (
          <></>
        )}
      </ToastContainer>
    </div>
  );
}
