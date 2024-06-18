import React from "react";

function ImagesArray({ imgArr }) {
  const imageContent = imgArr.map((index) => {
    return (
      <img src={index.src} className="ImageContent  w-10 h-10 " />
      // <img src={index.src} className="ImageContent flex w-40 h-10 gap-y-8 space-x-2 flex-col " />
    );
  });

  return (
    <>
      <div className="Image-container ">
        <div>{imageContent}</div>

        
      </div>
    </>
  );
}

export default ImagesArray;
