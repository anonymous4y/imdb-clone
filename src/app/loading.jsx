import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center">
      <Image className="h-96" src="spinner.svg" alt="loading..."></Image>
    </div>
  );
};

export default loading;
