import { GrFormNext } from "react-icons/gr";

function CardLocation() {
  return (
    <div className="mt-3">
      <div className="border-t border-1 w-full"></div>
      <div className="flex row justify-between items-center mt-3">
        <div className="flex flex-col w-full ">
          <p className="text-sm">UNIQLO BINTARO JAYA XCHANGE MALL</p>
          <p className="text-sm my-1">26.8 km</p>
          <p className="text-sm">WANITA, PRIA, ANAK, BAYI</p>
          <p className="text-sm">Toko besar, Parkir Tersedia</p>
        </div>
        <div className="flex-none w-7 h-7">
          <GrFormNext className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default CardLocation;
