import Image from "next/image";
import React from "react";

const AppleAndroidIcon = () => {
  return (
    <div className="flex h-48 items-center justify-center ">
      <Image src="/apple-android.svg" width={80} height={80} alt=""/>
    </div>
  );
};

export default AppleAndroidIcon;
