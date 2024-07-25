import Image from "next/image";
import React from "react";

const ReactIcon = () => {
  return (
    <div className="flex h-48 items-center justify-center">
      <Image src="/react-2.svg" width={80} height={80} alt=""/>
    </div>
  );
};

export default ReactIcon;
