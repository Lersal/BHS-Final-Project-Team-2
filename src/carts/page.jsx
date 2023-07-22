import Nametag from "../components/Nametag";
import { useEffect, useRef, useState } from "react";
import { Select } from "@chakra-ui/react";
import { GrFormClose } from "react-icons/gr";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { formatCurrency } from "../utils/formatCurrency";

function CartUniqlo() {
  const [totalCart, setTotalCart] = useState([
    {
      total_produk: 0,
      total_harga: 0,
    },
  ]);
  const [dataCart, setDataCart] = useState([
    {
      id: 1,
      title: "HEATTECH T-Shirt Fleece Kerah Turtle Lengan Panjang",
      id_product: "449750",
      warna: "68 BLUE",
      size: "Wanita S",
      price: 199000,
      src: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449750001/item/goods_68_449750001.jpg?width=250",
      jumlah: 3,
      select: {
        active: false,
      },
    },
    {
      id: 2,
      title: "Jeans Ultra Stretch",
      id_product: "450242",
      warna: "68 BLUE",
      size: "Uniseks 38inch",
      price: 599000,
      src: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/450242/item/idgoods_68_450242.jpg?width=250",
      jumlah: 1,
      select: {
        active: false,
      },
    },
    {
      id: 3,
      title: "Jaket AirSense (Ultra Light) Serupa Wol",
      id_product: "455074",
      warna: "69 NAVY",
      size: "Pria S",
      price: 899000,
      src: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/448034/item/idgoods_69_448034.jpg?width=250",
      jumlah: 1,
      select: {
        active: false,
      },
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelectClick = (no) => {
    setIsOpen(!isOpen);
    setDataCart((prevData) => {
      return prevData.map((item) => {
        if (item.id == no) {
          return {
            ...item,
            select: {
              active: !item.select.active,
            },
          };
        }
        return {
          ...item,
          select: {
            active: false,
          },
        };
      });
    });
  };

  const handleClickOutside = (e) => {
    if (selectRef.current && e.target.tagName !== "SELECT") {
      console.log(selectRef.current);
      handleSelectClick();
    }
  };

  const calculateTotalCart = () => {
    const totalProduk = dataCart.reduce(
      (acc, item) => acc + parseInt(item.jumlah),
      0
    );
    const totalHarga = dataCart.reduce(
      (acc, item) => acc + item.price * parseInt(item.jumlah),
      0
    );

    const persentasePPN = 0.1;
    const pajak = totalHarga * persentasePPN;

    setTotalCart([
      { total_produk: totalProduk, total_harga: totalHarga, ppn: pajak },
    ]);
  };

  function changeJumlahCart(target, val) {
    setDataCart((prevData) => {
      return prevData.map((item) => {
        if (item.id == target) {
          return {
            ...item,
            jumlah: val,
          };
        }
        return {
          ...item,
        };
      });
    });
  }

  function removeCart(target) {
    return setDataCart((prevData) => {
      return prevData.filter((item) => item.id != target);
    });
  }

  useEffect(() => {
    calculateTotalCart();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dataCart]);

  return (
    <div className="lg:w-[1200px] w-full max-w-[1200px] mx-auto overflow-hidden">
      <div className="flex flex-col justify-between w-full gap-9">
        <div className="mx-3 lg:mx-0">
          <Nametag name="KERANJANG BELANJA" />
        </div>
        <p className="text-3xl font-bold lg:block hidden">KERANJANG BELANJA</p>
        {dataCart.length === 0 ? (
          <>
            {loading ? (
              <p className="mx-3"> Loading...</p>
            ) : (
              <div className="flex flex-col px-4 w-full lg:w-1/2">
                <p>Keranjang Anda saat ini kosong.</p>

                <button className="text-center lg:w-1/2 bg-black py-3 px-20 font-semibold text-white mt-4">
                  Lanjut Belanja
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            {loading ? (
              <p className="mx-3"> Loading...</p>
            ) : (
              <div className="flex flex-row flex-wrap lg:flex-nowrap w-full">
                <div className="flex flex-col w-full">
                  {dataCart.map((item, id) => (
                    <div key={id}>
                      <div className="flex flex-col w-full mb-6">
                        <img
                          src={item.src}
                          alt=""
                          className="md:hidden mx-3 object-cover mb-3"
                        />
                        <div className="flex flex-row w-full">
                          <img
                            src={item.src}
                            alt=""
                            className="hidden md:block object-cover"
                          />
                          <div className="flex flex-col w-full">
                            <div className="flex flex-row justify-between w-full">
                              <div className="flex flex-col w-full ml-3 md:ml-6">
                                <div className="flex flex-col w-full">
                                  <p className="text-xl font-semibold">
                                    {item.title}
                                  </p>
                                  <p className="text-lg mt-1 text-gray-500">
                                    Kode Produk: {item.id_product}
                                  </p>
                                  <p className="text-lg mt-1">
                                    Warna: {item.warna}
                                  </p>
                                  <p className="text-lg mt-1">
                                    Ukuran: {item.size}
                                  </p>
                                  <p className="font-bold mt-4">
                                    {formatCurrency(item.price)}
                                  </p>
                                </div>
                                <div
                                  ref={selectRef}
                                  className="flex flex-row w-full mt-3"
                                >
                                  <div className="flex flex-col w-1/2">
                                    <p className="text-sm font-bold">JUMLAH</p>
                                    <Select
                                      defaultValue={item.jumlah}
                                      w={"60%"}
                                      onClick={() => {
                                        handleSelectClick(item.id);
                                        // console.log(item.select.active);
                                      }}
                                      onChange={(e) => {
                                        changeJumlahCart(
                                          item.id,
                                          e.target.value
                                        );
                                        setLoading(true);
                                        setIsOpen(false);
                                        setTimeout(() => {
                                          handleSelectClick();
                                          setLoading(false);
                                        }, 500);
                                      }}
                                      rounded={"sm"}
                                      focusBorderColor="blackAlpha.100"
                                      borderWidth="2px"
                                      _focus={{
                                        boxShadow: "none",
                                        borderColor: "none",
                                      }}
                                      icon={
                                        item.select.active ? (
                                          <BsChevronUp />
                                        ) : (
                                          <BsChevronDown />
                                        )
                                      }
                                      mt={3}
                                    >
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                    </Select>
                                  </div>
                                  <div className="flex flex-col md:justify-center justify-end items-end w-1/2">
                                    <p className="text-sm font-bold">
                                      SUBTOTAL : {""}
                                      <span>
                                        {formatCurrency(
                                          item.price * item.jumlah
                                        )}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <GrFormClose
                                onClick={() => {
                                  removeCart(item.id);
                                  setLoading(true);
                                  setTimeout(() => {
                                    setLoading(false);
                                  }, 500);
                                }}
                                className="text-3xl mr-3 md:mr-0 cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col w-full lg:w-[60%] px-4 mt-4 mb-16 lg:mb-0 lg:mt-0 lg:pl-16">
                  <div className="flex flex-col border w-full p-5">
                    <p className="text-lg font-bold">
                      RINGKASAN PESANAN| {totalCart[0].total_produk} PRODUK
                    </p>
                    <div className="flex flex-row justify-between w-full my-4 ">
                      <p>Subtotal produk</p>
                      <p>{formatCurrency(totalCart[0].total_harga)}</p>
                    </div>
                    <div className="flex flex-row justify-between w-full font-bold text-lg">
                      <p>SUBTOTAL</p>
                      <p>{formatCurrency(totalCart[0].total_harga)}</p>
                    </div>
                    <div className="flex flex-row justify-between w-full ">
                      <p>Termasuk PPN</p>
                      <p>{formatCurrency(totalCart[0].ppn)}</p>
                    </div>
                    <div className="flex flex-row justify-between w-full mt-4 mb-1 font-bold text-lg">
                      <p>TOTAL PESANAN</p>
                      <p>{formatCurrency(totalCart[0].total_harga)}</p>
                    </div>
                  </div>
                  <h2 className="text-lg font-bold mt-3 mb-1">
                    KETENTUAN PENGGUNAAN
                  </h2>
                  <p className="my-2  ">
                    Dengan menekan tombol pembayaran, Anda setuju dengan syarat
                    dan ketentuan kami.
                  </p>
                  <p className="my-2 underline font-bold text-sm">
                    KETENTUAN PENGGUNAAN
                  </p>
                  <div className="flex flex-col justify-between">
                    <button className="text-white text-lg bg-red-500 font-bold py-3 border ">
                      LANJUTKAN KE PEMBAYARAN
                    </button>
                    <button className="text-lg font-bold py-3 mt-3 border border-black">
                      LANJUTKAN KE PEMBAYARAN
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CartUniqlo;
