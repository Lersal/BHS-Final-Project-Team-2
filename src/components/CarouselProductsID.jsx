import { useState } from "react";
import { GrDown, GrFormNext, GrFormPrevious, GrUp } from "react-icons/gr";

// eslint-disable-next-line react/prop-types
function CarouselProductsID({ dataImage }) {
  const [incrementImg, setIncrementImg] = useState(0);
  const [imgSlide, setImgSlide] = useState(0);
  const [imgProducts, setImgProducts] = useState(dataImage);
  function handleUpClick() {
    if (incrementImg >= 2) {
      setIncrementImg(incrementImg - 2);
    }
  }

  function handleDownClick() {
    // console.log(incrementImg);
    if (incrementImg < imgProducts.length - 12) {
      setIncrementImg(incrementImg + 2);
    }
  }

  function leftSlide(idImg) {
    setTimeout(() => {
      //   console.log(idImg, "left");
      if (idImg <= 0) {
        setImgProducts((prev) =>
          prev.map((item) =>
            16 == item.id
              ? { ...item, select: true }
              : { ...item, select: false }
          )
        );
      } else {
        setImgProducts((prev) =>
          prev.map((item) =>
            idImg == item.id
              ? { ...item, select: true }
              : { ...item, select: false }
          )
        );
      }

      if (imgSlide > 0) {
        setImgSlide(imgSlide - 1);
      } else {
        setImgSlide(imgProducts.length - 1);
      }
    }, 300);
  }

  function rightSlide(idImg) {
    setTimeout(() => {
      //   console.log(idImg, "right");
      if (idImg + 2 >= 17) {
        setImgProducts((prev) =>
          prev.map((item) =>
            1 == item.id
              ? { ...item, select: true }
              : { ...item, select: false }
          )
        );
      } else {
        setImgProducts((prev) =>
          prev.map((item) =>
            idImg + 2 == item.id
              ? { ...item, select: true }
              : { ...item, select: false }
          )
        );
      }

      if (imgSlide < imgProducts.length - 1) {
        setImgSlide(imgSlide + 1);
      } else {
        setImgSlide(0);
      }
    }, 300);
  }

  return (
    // create component carousel
    <div className="flex flex-row w-full">
      {/* 4 * 4 ga ada button next atau previous */}
      <div className="flex flex-col w-48 ">
        <div className="grid grid-cols-2 gap-3">
          {imgProducts
            .slice(incrementImg, incrementImg + 12)
            .map((item, id) => (
              // if selected => border p-2
              <div
                key={id}
                className={`${
                  item.select ? "border" : "none"
                } border-black p-1`}
              >
                <img src={item.src} alt="" />
              </div>
            ))}
        </div>
        <div className={`${imgProducts.length >= 12 ? "block" : "hidden"}`}>
          <div className="mt-5">
            <hr className="h-0.5  bg-gray-100 border-0 rounded  dark:bg-gray-300" />
          </div>
          {/* button up or down */}
          <div className="flex flex-row w-full mt-2 gap-3 justify-center ">
            {/* if up = +2 */}
            {/* if down = -2 */}
            <button onClick={handleUpClick}>
              <GrUp />
            </button>
            <button onClick={handleDownClick}>
              <GrDown />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full  mx-8 relative">
        <img src={imgProducts[imgSlide].src} alt="" />
        <button
          onClick={() => leftSlide(imgSlide)}
          className="absolute top-64 py-4 px-2 bg-[#f3f3f3] bg-opacity-25 hover:bg-gray-400 hover:opacity-30"
        >
          <GrFormPrevious className="w-8 h-8" />
        </button>
        <button
          onClick={() => rightSlide(imgSlide)}
          className="absolute top-64 right-0 py-4 px-2 bg-[#f3f3f3] bg-opacity-25 hover:bg-gray-400 hover:opacity-30"
        >
          <GrFormNext className="w-8 h-8" />
        </button>
        <span className="text-sm mt-1">
          {imgSlide + 1}/{imgProducts.length}
        </span>
      </div>
    </div>
  );
}

export default CarouselProductsID;
