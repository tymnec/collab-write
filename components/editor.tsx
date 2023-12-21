"use client";

import React from "react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Editor = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <ReactQuill value={value} onChange={setValue} theme="snow"></ReactQuill>
    </div>
  );
};

export default Editor;
