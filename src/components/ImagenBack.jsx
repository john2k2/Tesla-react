import React from "react";

export const ImagenBack = ({ imagen, alt }) => {
  return (
    <>
      <img
        className="absolute top-0 z-0 h-full w-full object-cover"
        src={imagen}
        alt={alt}
      />
    </>
  );
};
