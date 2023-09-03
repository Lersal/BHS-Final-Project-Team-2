import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Footer from "../components/Footer";
import Header from "../components/header";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";

function Home() {
  return (
    <div>
      <Header />
      {/* section 1 */}
      <Link to="/products">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img
              src="https://im.uniqlo.com/global-cms/spa/res138f77b8a5662dd65f0793abbfe661b4fr.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://im.uniqlo.com/global-cms/spa/res0cc37c3cc4928c836f5f85c180e8755efr.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://im.uniqlo.com/global-cms/spa/rese99be8c20965cd5f3cda0e231b61af6efr.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://im.uniqlo.com/global-cms/spa/res0ffcb22d4425cc33ed93217226ba01c1fr.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="flex flex-row">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res18d928333f4ab87e0d783d7aa7581376fr.jpg"
                alt=""
                className="w-8/12 h-auto"
              />
              <div className="w-1/3 bg-white">
                <div className="mt-40 mx-12">
                  <h2 className="text-2xl font-bold my-4">
                    Menampilkan serial TV anime terkenal!
                  </h2>
                  <h2 className="text-2xl font-bold">My Hero Academia</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-row">
              <img
                src="https://im.uniqlo.com/global-cms/spa/resbcfbfc2c4a1da152e2dd5e5410e47706fr.jpg"
                alt=""
                className="w-8/12 h-auto"
              />
              <div className="w-4/12 h-auto bg-white">Test</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-row">
              <img
                src="https://im.uniqlo.com/global-cms/spa/resc96493a2fa172e160d763865fb910eb1fr.jpg"
                alt=""
                className="w-8/12 h-auto"
              />
              <div className="w-4/12 h-auto bg-white">Test</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://im.uniqlo.com/global-cms/spa/res7664e8b85464917ace1d39120cd55003fr.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/resa8a32328a038a0c2ee68f1047a0b898dfr.jpg"
                alt=""
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2">
                  Pilihan outfit untuk cuaca yang
                </h2>
                <h2 className="text-4xl text-white font-bold mt-2 mb-4">
                  cerah.
                </h2>
                <p className="text-xl text-white font-bold my-2">
                  Koleksi Summer Essentials
                </p>
                <button className="p-3 mt-2 bg-white opacity-80 font-bold hover:opacity-50">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/resf7f80994164624e9cd559976d9987922fr.jpg"
                alt=""
                className="brightness-90"
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2">
                  Bawahan fungsional untuk
                </h2>
                <h2 className="text-4xl text-white font-bold mt-2 mb-4">
                  melengkapi gaya Anda.
                </h2>
                <p className="text-xl text-white font-bold my-2">
                  Koleksi Celana Pendek
                </p>
                <button className="p-3 mt-2 bg-white opacity-80 font-bold hover:opacity-50">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res1653030875b44b42e078e65c37630feefr.jpg"
                alt=""
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2">
                  Outfit favorit untuk dikenakan
                </h2>
                <h2 className="text-4xl text-white font-bold my-2">
                  Jaket &gt;sehari-hari.
                </h2>
                <p className="text-4xl text-white font-bold mt-2">
                  Koleksi T-Shirt
                </p>
                <button className="p-3 mt-2 bg-white opacity-80 font-bold hover:opacity-50">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/resc20b7865d1b985738283d8b6801dd4ecfr.jpg"
                alt=""
                className="brightness-90"
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2">
                  Tampil stylish dengan kemeja
                </h2>
                <h2 className="text-4xl text-white font-bold my-2 ">
                  Spring/&gt;berbahan sejuk.
                </h2>
                <p className="text-4xl text-white font-bold mt-2">
                  Koleksi Kemeja{" "}
                </p>
                <button className="p-3 mt-2 bg-white opacity-80 font-bold hover:opacity-50">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res579210cde26bf6f35207430bdca6467ffr.jpg"
                alt=""
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2">
                  Jaket tahan air berkualitas, tersedia
                </h2>
                <h2 className="text-4xl text-white font-bold mt-2 mb-4">
                  dalam warna biru
                </h2>
                <p className="text-xl text-white font-bold my-2">
                  Jaket Parka Reversibel (Water-Repellent)
                </p>
                <h2 className="text-3xl text-white font-bold">Rp599.000</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res38f088fc4e942acd3ecca58f13ec0c37fr.jpg"
                alt=""
                className="brightness-90"
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2">
                  Ringan, fungsional, dan desain yang
                </h2>
                <h2 className="text-4xl text-white font-bold mt-2 mb-4">
                  Stylish.
                </h2>
                <p className="text-xl text-white font-bold my-2">
                  Jaket Parka Lapis Jersey Lembut (Water-Repellent)
                </p>
                <h2 className="p-3 mt-2 text-white font-bold">Rp499.000</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/rescf3e372e5f0847980418681f62f0ff06fr.jpg"
                alt=""
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2">
                  Jaket Stylish dengan detail
                </h2>
                <h2 className="text-4xl text-white font-bold mt-2 mb-4">
                  fungsional./h2&gt;
                  <p className="text-xl text-white font-bold my-2">
                    Jaket Blouson Pendek Utilitas
                  </p>
                </h2>
                <h2 className="p-3 mt-2 text-white font-bold">Rp999.000</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/resc2e998b9e64f0b7a8a4d3f469ce69fb8fr.jpg"
                alt=""
                className="brightness-90"
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2 ">
                  Spring/Summer 2023 UNIQLO
                </h2>
                <h2 className="text-4xl text-white font-bold mt-2 mb-4">
                  Season Catalog
                </h2>
                <p className="text-xl text-white font-bold my-2">
                  Seni Kehidupan Sehari-hari
                </p>
                <h2 className="p-3 mt-2 text-white font-bold">SELENGKAPNYA</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="flex flex-row">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res373e944074db7fde1261f316a597922ffr.jpg"
                alt=""
                className="w-2/3 h-auto "
              />
              <div className="w-1/3 h-auto">
                <div className="mt-40 mx-12">
                  <h2 className="text-2xl font-bold my-4">
                    Tampilan high-waist membuat kaki terlihat panjang.
                  </h2>
                  <p className="text-xl font-bold my-2">
                    Celana Legging Ultra Stretch Denim
                  </p>
                  <h2 className="text-2xl font-bold">Rp399.000</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-row">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res6a844088a01d5f6faaa8792d864d92b5fr.jpg"
                alt=""
                className="w-2/3 h-auto "
              />
              <div className="w-1/3 h-auto">
                <div className="mt-40 mx-12">
                  <h2 className="text-2xl font-bold my-4">
                    Jeans ramping dalam berbagai warna.
                  </h2>
                  <p className="text-xl font-bold my-2">
                    Jeans Warna Ultra Stretch
                  </p>
                  <h2 className="text-2xl font-bold">Rp499.000</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-row">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res96098676e4459ae85243f1d6ebb06f1efr.jpg"
                alt=""
                className="w-2/3 h-auto "
              />
              <div className="w-1/3 h-auto">
                <div className="mt-40 mx-12">
                  <h2 className="text-2xl font-bold my-4">
                    Polo lembut &amp; cepat kering untuk gaya kasual.
                  </h2>
                  <p className="text-xl font-bold my-2">
                    Kaos Polo Dry Pique Lengan Pendek
                  </p>
                  <h2 className="text-2xl font-bold">Rp299.000</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-row">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res85031226407a11389500b2b5094057c8fr.jpg"
                alt=""
                className="w-2/3 h-auto"
              />
              <div className="w-1/3 h-auto">
                <div className="mt-40 mx-12">
                  <h2 className="text-2xl font-bold my-4">
                    Terasa lembut &amp; tidak mudah kursut.
                  </h2>
                  <p className="text-xl font-bold my-2">
                    Blus Rayon Lengan Pendek
                  </p>
                  <h2 className="text-2xl font-bold">Rp399.000</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="flex flex-row">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res02dbef0b7f5a3eead6f019c0716a16b8fr.jpg"
                alt=""
                className="w-2/3 h-auto"
              />
              <div className="w-1/3 bg-white">
                <div className="mt-40 mx-12">
                  <h2 className="text-2xl font-bold my-4">
                    Polo cepat kering berbahan pique yang lembut.
                  </h2>
                  <p className="text-xl font-bold my-2">
                    KIDS Kaos Polo Dry Pique
                  </p>
                  <h2 className="text-2xl font-bold">Rp199.000</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-row">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res2a7cb7bac02841552102c9351bed94f3fr.jpg"
                alt=""
                className="w-2/3 h-auto"
              />
              <div className="w-1/3 bg-purple-400">
                <div className="mt-40 mx-12">
                  <h2 className="text-2xl font-bold my-4">
                    Terasa elastis untuk memudahkan gerak si kecil.
                  </h2>
                  <p className="text-xl font-bold my-2">
                    KIDS Celena Tapered Ultra Stretch
                  </p>
                  <h2 className="text-2xl font-bold">Rp299.000</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-row">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res686c861e0fcc1423ae017154c5286ddcfr.jpg"
                alt=""
                className="w-2/3 h-auto"
              />
              <div className="w-1/3 bg-purple-400">
                <div className="mt-40 mx-12">
                  <h2 className="text-2xl font-bold my-4">
                    Biarkan si kecil bergerak bebas dengan penuh gaya.
                  </h2>
                  <p className="text-xl font-bold my-2">
                    GIRLS Rok Model Celana Lipit Kotak
                  </p>
                  <h2 className="text-2xl font-bold">Rp299.000</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-row">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res278b1931c559f33df32e1a783a9e48bffr.jpg"
                alt=""
                className="w-2/3 h-auto"
              />
              <div className="w-1/3 bg-purple-400">
                <div className="mt-40 mx-12">
                  <h2 className="text-2xl font-bold my-4">
                    Berbahan `AIRism` untuk kenyamanan setiap saat.
                  </h2>
                  <p className="text-xl font-bold my-2">
                    GIRLS AIRism Katun Gaun (Tie Dye)
                  </p>
                  <h2 className="text-2xl font-bold">Rp199.000</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img
              src="https://im.uniqlo.com/global-cms/spa/resda9076b0b4025727183507b6db99ef5dfr.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://im.uniqlo.com/global-cms/spa/res5fb2c7fe63a2794b1a74aab108fa0bc9fr.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://im.uniqlo.com/global-cms/spa/rese0571453f95d933090e976c7b7302350fr.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://im.uniqlo.com/global-cms/spa/res3c74064ec1cc0cea543226b3bb170c1afr.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res190759ba49295cd77fd0f2d6094c1536fr.jpg"
                alt=""
                className="brightness-90"
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2">
                  Mame Kurogouchi
                </h2>
                <p className="text-white my-4">
                  Koleksi yang mengajakmu untuk bergerak bebas
                </p>
                <button className="p-3 mt-2 bg-white opacity-80 font-bold hover:opacity-50">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res6e634491884217fe23f869b4aea47555fr.jpg"
                alt=""
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2">
                  JW Anderson
                </h2>
                <p className="text-white my-4">
                  Menampilkan gaya hidup sporty.
                </p>
                <button className="p-3 mt-2 bg-white opacity-80 font-bold hover:opacity-50">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res1d2e6b8dc768f0c8656bcc6e7875989efr.jpg"
                alt=""
                className="brightness-90"
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2">
                  INES DE LA FRESSANGE
                </h2>
                <p className="text-white my-4">
                  Temukan koleksi Ines de la Fressange di sini.
                </p>
                <button className="p-3 mt-2 bg-white opacity-80 font-bold hover:opacity-50">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/rescd29c680a851488410a7e3acd7138910fr.jpg"
                alt=""
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2">J Brand</h2>
                <p className="text-white my-4">Jeans stylish masa kini.</p>
                <button className="p-3 mt-2 bg-white opacity-80 font-bold hover:opacity-50">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={true}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/resc71af24aed491fee2d7508aaa41a6d47fr.jpg"
                alt=""
                className="brightness-90"
              />
              <div className="absolute top-28 left-16">
                <h2 className="text-4xl text-white font-bold my-2 drop-shadow-2xl">
                  Spring/Summer 2023 UNIQLO
                </h2>
                <h2 className="text-4xl text-white font-bold my-2 drop-shadow-2xl">
                  Season Catalog
                </h2>
                <p className="text-white my-4 drop-shadow-md">
                  Seni Kehidupan Sehari-hari
                </p>
                <button className="p-3 mt-2 bg-white opacity-80 font-bold hover:opacity-50 drop-shadow-2xl">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res4df6354a62eb79e95220c1be5e5ecc76fr.jpg"
                alt=""
                className="brightness-90"
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2 drop-shadow-md">
                  LifeWear Magazine Issue 08
                </h2>
                <p className="text-white my-4">
                  Sebuah majalah untuk menyampaikan konsep LifeWear. Konsep
                  edisi ke-8 adalah "Sebuah seni kehidupan sehari-hari".
                </p>
                <button className="p-3 mt-2 bg-white opacity-80 font-bold hover:opacity-50">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/resc8ee5b536f254f5835146d1d94f7711bfr.jpg"
                alt=""
                className="brightness-90"
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2">
                  Koleksi sederhana &amp; berkualitas untuk sehari-hari.
                </h2>
                <p className="text-white my-4">
                  Masterpiece 2023 Spring/Summer
                </p>
                <button className="p-3 mt-2 bg-white opacity-80 font-bold hover:opacity-50">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res05662a097e23de506f14464427c133e8fr.jpg"
                alt=""
                className="brightness-90"
              />
              <div className="absolute bottom-1/3 left-16">
                <h2 className="text-4xl text-white font-bold my-2 shadow-md">
                  UNIQLO Update
                </h2>
                <p className="text-white my-4">
                  Telusuri produk, koleksi, dan update terbaru kami di sini.
                </p>
                <button className="p-3 mt-2 bg-white opacity-80 font-bold hover:opacity-50">
                  SELENGKAPNYA
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Link>

      <Footer />
    </div>
  );
}

export default Home;
