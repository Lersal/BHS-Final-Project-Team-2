import { useState } from "react";
import Nametag from "../../components/Nametag";
import CarouselProductsID from "../../components/CarouselProductsID";
import AccordionChakra from "../../components/Accordion";

function ProductsByID() {
  // eslint-disable-next-line no-unused-vars
  const [dataProducts, setDataProducts] = useState([
    // https://www.uniqlo.com/id/id/products/E462172-000?colorCode=COL09&sizeCode=SMA002
    {
      code: "462172",
      title: "UT Disney Good Vibes Lengan Pendek",
      price: 199000,
      isNew: true,
      text: "Sebuah karya seni spesial yang menggambarkan Mickey Mouse bersama teman-temannya mengikuti irama musik di sebuah pesta, telah hadir di UT!",
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
      deskripsi: [
        {
          title: "Ikhtisar",
          text: `Desain yang menyenangkan ini menampilkan karakter Disney sedang
        berpesta dengan teman-teman baiknya dan musik yang bagus. Bagian dari
        koleksi desain orisinal, hanya di UNIQLO. <br />
        <br />\
        Disney Good Vibes <br />
        <br />\
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
            <AccordionChakra
              className="mt-4"
              deskripsi={dataProducts[0].deskripsi}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[60%] px-4 mt-4 mb-16 lg:mb-0 lg:mt-0 lg:pl-16 bg-red-400"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductsByID;
