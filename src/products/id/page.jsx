import { useState } from "react";
import Nametag from "../../components/Nametag";
import CarouselProductsID from "../../components/CarouselProductsID";

function ProductsByID() {
  // eslint-disable-next-line no-unused-vars
  const [dataProducts, setDataProducts] = useState([
    {
      code: "462172",
      title: "UT Disney Good Vibes Lengan Pendek",
      price: 199000,
      isNew: true,
      desc: "Sebuah karya seni spesial yang menggambarkan Mickey Mouse bersama teman-temannya mengikuti irama musik di sebuah pesta, telah hadir di UT!",
      color: [
        // color pertama
        {
          name: "09 Black",
          color: "#000000",
          size: [
            {
              name: "Uniseks XS",
              total: 6,
              stockHampirHabis: true,
            },
            {
              name: "Uniseks S",
              total: 8,
              stockHampirHabis: true,
            },
            {
              name: "Uniseks M",
              total: 10,
              stockHampirHabis: false,
            },
            {
              name: "Uniseks L",
              total: 10,
              stockHampirHabis: true,
            },
          ],
        },
        // color kedua
        {
          name: "08 White",
          color: "#ffffff",
          size: [
            {
              name: "Uniseks XS",
              total: 6,
              stockHampirHabis: true,
            },
            {
              name: "Uniseks S",
              total: 8,
              stockHampirHabis: true,
            },
            {
              name: "Uniseks M",
              total: 10,
              stockHampirHabis: false,
            },
            {
              name: "Uniseks L",
              total: 10,
              stockHampirHabis: true,
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
    },
  ]);

  return (
    <div className="lg:w-[1200px] w-full max-w-[1200px] mx-auto overflow-hidden">
      <div className="flex flex-col justify-between w-full gap-9">
        <div className="mx-3 lg:mx-0">
          <Nametag name="KOLEKSI ATASAN / T-Shirt Soft Touch Kerah Turtle Lengan Panjang" />
        </div>
        <div className="flex flex-row flex-wrap lg:flex-nowrap w-full">
          <div className="flex flex-col w-full  ">
            <CarouselProductsID dataImage={dataProducts[0].image} />
            <div className="flex flex-row w-full justify-between items-center">
              <h1 className="text-lg font-bold">DESKRIPSI</h1>
              <div className="flex flex-col mx-8 mt-1">
                <p className="text-sm">Kode Produk :</p>
                <p className="text-sm">{dataProducts[0].code}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-[60%] px-4 mt-4 mb-16 lg:mb-0 lg:mt-0 lg:pl-16 bg-red-400"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductsByID;
