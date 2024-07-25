import Image from "next/image";
import React from "react";

const WordPressIcon = () => {
  
  return (
    <div className="flex h-48 items-center justify-start">
      <Image src="/wordpress-icon.svg" width={80} height={80} alt=""/>
    </div>
  );
};

export default WordPressIcon;
