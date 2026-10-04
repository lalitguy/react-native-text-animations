"use dom";

import React from "react";

const CardSurface = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-surface p-2 md:p-3 lg:p-4 rounded-lg md:rounded-xl lg:rounded-2xl">
      {children}
    </div>
  );
};

export default CardSurface;
