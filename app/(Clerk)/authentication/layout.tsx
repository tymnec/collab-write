import React from "react";

const LayoutAuthentication = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full mx-auto flex place-items-center justify-center">
      {children}
    </div>
  );
};

export default LayoutAuthentication;
