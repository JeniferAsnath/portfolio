import Image from "next/image";
import React from "react";

const NodeIcon = () => {
  return (
    <div className="flex h-48 items-center justify-center">
      <Image src="/nodejs-icon.svg" width={80} height={80} alt="" />
    </div>
  );
};

export default NodeIcon;
