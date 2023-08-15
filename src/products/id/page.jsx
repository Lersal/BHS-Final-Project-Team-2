import { useEffect, useRef, useState } from "react";
import Nametag from "../../components/Nametag";
import CarouselProductsID from "../../components/CarouselProductsID";
import AccordionChakra from "../../components/Accordion";
import { RiStarSFill } from "react-icons/ri";
import { Select } from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { formatCurrency } from "../../utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { addCart, history } from "../../stores/slices/cartSlice";
import BasicUsage from "../../components/Modal";
function ProductsByID() {
  const selectRef = useRef(null);

  // useSelector ini untuk read data dari redux toolkit nya, dia akan mengambil data dari cartSlice.js tetapi harus melalui store.js
  // const cartRX = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch(); // untuk mengWrite data ke redux toolkit nya

  const [dataProducts, setDataProducts] = useState([
    // https://www.uniqlo.com/id/id/products/E462172-000?colorCode=COL09&sizeCode=SMA002
    {
      code: "462172",
      title: "UT Disney Good Vibes Lengan Pendek",
      price: 199000,
      isNew: true,
      cartStock: 1,
      // filosofi
      text: "Sebuah karya seni spesial yang menggambarkan Mickey Mouse bersama teman-temannya mengikuti irama musik di sebuah pesta, telah hadir di UT!",
      color: [
        // color pertama
        {
          name: "09 Black",
          color: "#000000",
          select: true,
          size: [
            {
              name: "XS",
              total: 6,
              stockHampirHabis: true,
              select: true,
            },
            {
              name: "S",
              total: 8,
              stockHampirHabis: true,
              select: false,
            },
            {
              name: "M",
              total: 10,
              stockHampirHabis: false,
              select: false,
            },
            {
              name: "L",
              total: 10,
              stockHampirHabis: true,
              select: false,
            },
          ],
        },
        // color kedua
        {
          name: "08 White",
          color: "#ffffff",
          select: false,
          size: [
            {
              name: "XS 2",
              total: 6,
              stockHampirHabis: true,
              select: true,
            },
            {
              name: "S 2",
              total: 8,
              stockHampirHabis: true,
              select: false,
            },
            {
              name: "M 2",
              total: 10,
              stockHampirHabis: false,
              select: false,
            },
            {
              name: "L 2",
              total: 10,
              stockHampirHabis: true,
              select: false,
            },
          ],
        },
      ],
      image: [
        {
          id: 1,
          src: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/462172/item/idgoods_09_462172.jpg?width=750",
          select: true,
        },
        {
          id: 2,
          src: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/462172/sub/idgoods_462172_sub1.jpg?width=750",
          select: false,
        },
        {
          id: 3,
          src: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/462172/sub/idgoods_462172_sub2.jpg?width=750",
          select: false,
        },
        {
          id: 4,
          src: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/462172/sub/idgoods_462172_sub3.jpg?width=750",
          select: false,
        },
        {
          id: 5,
          src: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/462172/sub/idgoods_462172_sub7.jpg?width=750",
          select: false,
        },
        {
          id: 6,
          src: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/462172/sub/idgoods_462172_sub9.jpg?width=750",
          select: false,
        },
        {
          id: 7,
          src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462172/sub/goods_462172_sub14.jpg?width=750",
          select: false,
        },
        {
          id: 8,
          src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462172/sub/goods_462172_sub15.jpg?width=750",
          select: false,
        },
        {
          id: 9,
          src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462172/sub/goods_462172_sub17.jpg?width=750",
          select: false,
        },
        {
          id: 10,
          src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462172/sub/goods_462172_sub18.jpg?width=750",
          select: false,
        },
        {
          id: 11,
          src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462172/sub/goods_462172_sub19.jpg?width=750",
          select: false,
        },
        {
          id: 12,
          src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462172/sub/goods_462172_sub20.jpg?width=750",
          select: false,
        },
        {
          id: 13,
          src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462172/sub/goods_462172_sub21.jpg?width=750",
          select: false,
        },
        {
          id: 14,
          src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462172/sub/goods_462172_sub25.jpg?width=750",
          select: false,
        },
        {
          id: 15,
          src: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/462172/sub/idgoods_462172_sub26.jpg?width=750",
          select: false,
        },
        {
          id: 16,
          src: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/462172/sub/idgoods_462172_sub28.jpg?width=750",
          select: false,
        },
      ],
      // data deskripsi akan dilempar ke component
      deskripsi: [
        {
          title: "Ikhtisar",
          text: `Desain yang menyenangkan ini menampilkan karakter Disney sedang
        berpesta dengan teman-teman baiknya dan musik yang bagus. Bagian dari
        koleksi desain orisinal, hanya di UNIQLO. <br />
        <br />
        Disney Good Vibes <br />
        <br />
        Ayo berpesta dengan karakter Disney dan sebarkan GOOD VIBES. Mickey
        sedang memainkan piringan musik sementara karakter Disney lainnya
        bersenang-senang. Desain ini dicetak pada T-shirt fit oversized untuk
        kesan santai.
        <br />
        <br /> ©Disney`,
        },
        {
          title: "Material",
          text: `Kode Produk 462172 <br />
          <br />
          Harap dicatat bahwa produk ini mungkin memiliki ID produk yang
          berbeda, meskipun itu adalah produk yang serupa. <br />
          <br />
          <b>DETAIL KAIN</b>
          <br /> 100% Kapas <br /> <br /> <b>INSTRUKSI PENCUCIAN</b> <br />
          Dicuci dengan mesin menggunakan air dingin, Tidak boleh dilakukan dry
          clean, Keringkan dengan mesin pada suhu rendah. - Beberapa warna
          produk mungkin tidak tersedia.`,
        },
      ],
    },
  ]);

  // const [cart, setCart] = useState([
  //   {
  //     code: "462172",
  //     title: "UT Disney Good Vibes Lengan Pendek",
  //     price: 199000,
  //     size: "S",
  //     color: "09 Black",
  //     image: `https://image.uniqlo.com/UQ/ST3/id/imagesgoods/462172/item/idgoods_09_462172.jpg?width=750`,
  //     cartStock: 1,
  //     totalStock: 6,
  //   },
  // ]);
  const [selectIsActive, setSelectIsActive] = useState(false);

  const handleColorClick = (no) => {
    console.log(no, "=> no color");

    setDataProducts((prevData) => {
      return prevData.map((item) => {
        return {
          ...item,
          color: item.color.map((itemColor, id) => {
            if (id === no) {
              return {
                ...itemColor,
                select: true,
                size: itemColor.size.map((itemSize, id) => {
                  if (id === 0) {
                    return {
                      ...itemSize,
                      select: true,
                    };
                  }
                  return {
                    ...itemSize,
                    select: false,
                  };
                }),
              };
            }
            return {
              ...itemColor,
              select: false,
            };
          }),
        };
      });
    });
  };

  const handleSizeClick = (size) => {
    console.log(size);

    setDataProducts((prevData) => {
      return prevData.map((item) => {
        return {
          ...item,
          cartStock: 1,
          color: item.color.map((itemColor) => {
            return {
              ...itemColor,
              size: itemColor.size.map((itemSize) => {
                if (itemSize.name === size) {
                  return {
                    ...itemSize,
                    select: true,
                  };
                }
                return {
                  ...itemSize,
                  select: false,
                };
              }),
            };
          }),
        };
      });
    });
  };

  const handleClickOutside = (e) => {
    if (selectRef.current && e.target.tagName !== "SELECT") {
      // console.log(selectRef.current);
      // handleSelectClick();
      setSelectIsActive(false);
    }
  };

  function handleCart() {
    const updatedCart = [];
    dataProducts.forEach((product) => {
      product.color.forEach((color) => {
        if (color.select) {
          color.size.forEach((size) => {
            if (size.select) {
              updatedCart.push({
                code: product.code,
                title: product.title,
                price: product.price,
                size: size.name,
                color: color.name,
                image: product.image[0].src.replace("width=750", "width=250"),
                cartStock: Number(product.cartStock),
                totalStock: size.total,
                select: {
                  active: false,
                },
              });
            }
          });
        }
      });
    });

    dispatch(addCart(updatedCart[0]));
    dispatch(history(updatedCart));
    // setCart(updatedCart);
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // handleCart();
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="lg:w-[1200px] w-full max-w-[1200px] mx-auto overflow-hidden">
      <div className="flex flex-col justify-between w-full gap-9">
        <div className="mx-3 lg:mx-0">
          <Nametag name="KOLEKSI ATASAN / T-Shirt Soft Touch Kerah Turtle Lengan Panjang" />
        </div>
        <div className="flex flex-row flex-wrap lg:flex-nowrap w-full">
          <div className="flex flex-col w-full  px-4">
            <CarouselProductsID dataImage={dataProducts[0].image} />
            <div className="flex flex-row w-full justify-between items-center my-4">
              <h1 className="text-lg font-bold">DESKRIPSI</h1>
              <div className="flex flex-col mx-8 mt-1">
                <p className="text-sm">Kode Produk :</p>
                <p className="text-sm">{dataProducts[0].code}</p>
              </div>
            </div>
            <AccordionChakra
              className="md:mt-4 md:mr-8 "
              deskripsi={dataProducts[0].deskripsi}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[60%] px-4 mt-4 mb-16 lg:mb-0 lg:mt-0 lg:ml-10">
            <h1 className="text-4xl font-bold">{dataProducts[0].title}</h1>
            <div className="flex flex-row w-full">
              <h2 className="font-bold text-2xl mt-2 w-64">
                {formatCurrency(dataProducts[0].price)}
              </h2>
              <div className="flex flex-row justify-end items-end w-full">
                <div className="flex flex-row items-center">
                  <RiStarSFill fill="#ebbe00" size={22} />
                  <RiStarSFill fill="#ebbe00" size={22} />
                  <RiStarSFill fill="#ebbe00" size={22} />
                  <RiStarSFill fill="#ebbe00" size={22} />
                  <RiStarSFill fill="#ebbe00" size={22} />
                  <p>(1)</p>
                </div>
              </div>
            </div>
            <h1 className="mt-8 text-base">{dataProducts[0].text}</h1>
            <div className="mt-5">
              <hr className="h-0.5  bg-gray-100 border-0 rounded  dark:bg-gray-100" />
            </div>

            {/* color */}
            <div className="flex flex-col w-full mt-3">
              <div className="flex flex-col ">
                {dataProducts[0].color.map((item) => {
                  if (item.select) {
                    // console.log(id, "=> data color nya");
                    return (
                      <div key={item.name}>
                        <h4 className="text-sm font-bold">
                          WARNA: {item.name}
                        </h4>
                      </div>
                    );
                  }
                })}

                <div className="flex flex-row w-full gap-1.5">
                  {dataProducts[0].color.map((item, id) => (
                    <div
                      key={item.name}
                      className={`${
                        item.select ? "border-black border-2" : "border"
                      } p-0.5 w-[50px] h-[45px] mt-1`}
                    >
                      <button
                        style={{ backgroundColor: item.color }}
                        disabled={item.select}
                        onClick={() => handleColorClick(id)}
                        className={` w-full h-full`}
                      ></button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col mt-3">
                {dataProducts[0].color.map(
                  (item) =>
                    item.select && (
                      <div key={item.name}>
                        <h4 className="text-sm font-bold">
                          UKURAN: {item.size[0].name}
                        </h4>

                        <div className="flex flex-row gap-1.5">
                          {item.size.map((itemSize) => (
                            <div
                              key={itemSize.name}
                              className={`${
                                itemSize.select
                                  ? "border-black border-2"
                                  : "border"
                              } p-0.5 w-[50px] h-[45px] mt-1`}
                            >
                              {/* selected */}
                              <button
                                onClick={() => handleSizeClick(itemSize.name)}
                                style={{
                                  color: !itemSize.select && "black",
                                }}
                                className={`${
                                  itemSize.select && "text-white bg-black"
                                }  w-full h-full text-xs font-semibold`}
                                disabled={itemSize.select}
                              >
                                {itemSize.name}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>

            {/* jumlah */}
            <div className="flex flex-col mt-4">
              <div ref={selectRef} className="flex flex-row w-full mt-3">
                <div className="flex flex-col w-1/2">
                  <p className="text-sm font-bold">JUMLAH</p>
                  <Select
                    defaultValue={"0"}
                    w={"60%"}
                    onClick={() => setSelectIsActive(!selectIsActive)}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setDataProducts((prevData) => {
                        return prevData.map((item) => {
                          return {
                            ...item,
                            cartStock: e.target.value,
                          };
                        });
                      });
                    }}
                    rounded={"sm"}
                    focusBorderColor="blackAlpha.100"
                    borderWidth="2px"
                    _focus={{
                      boxShadow: "none",
                      borderColor: "none",
                    }}
                    icon={selectIsActive ? <BsChevronUp /> : <BsChevronDown />}
                    mt={3}
                  >
                    {dataProducts[0].color.map((item) => {
                      if (item.select) {
                        return item.size.map((sum) => {
                          if (sum.select) {
                            return new Array(sum.total)
                              .fill(0)
                              .map((item_, stock) => (
                                <option key={stock} value={`${stock + 1}`}>
                                  {stock + 1}
                                </option>
                              ));
                          }
                        });
                      }
                    })}
                  </Select>

                  {dataProducts[0].color.map((item) => {
                    if (item.select) {
                      return item.size.map((sum) => {
                        if (sum.select) {
                          if (sum.total <= 5) {
                            return (
                              <h4
                                key={sum.total}
                                className="text-xs text-gray-400 mt-1"
                              >
                                Stok hampir habis {dataProducts[0].cartStock}
                              </h4>
                            );
                          } else {
                            return (
                              <h4
                                key={sum.total}
                                className="text-xs text-gray-400 mt-1"
                              >
                                Stok tersedia {dataProducts[0].cartStock}
                              </h4>
                            );
                          }
                        }
                      });
                    }
                  })}
                </div>
              </div>
            </div>

            {/* <p>{JSON.stringify(cartRX, null, 5)}</p> */}
            {/* button */}
            {/* <button
              onClick={() => handleCart()}
              className="text-center text-white font-bold text-md bg-red-500 p-2.5 mt-8 border"
            >
              TAMBAHKAN KE KERANJANG
            </button> */}
            <BasicUsage actionAdd={handleCart} />
            <div className="mt-5">
              <hr className="h-0.5  bg-gray-100 border-0 rounded  dark:bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsByID;
