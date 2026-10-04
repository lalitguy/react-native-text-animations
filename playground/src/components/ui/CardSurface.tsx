"use dom";

import React from "react";

const CardSurface = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-surface p-2 md:p-3 lg:p-4 rounded-md md:rounded-lg lg:rounded-xl">
      {children}
    </div>
  );
};

export default CardSurface;
