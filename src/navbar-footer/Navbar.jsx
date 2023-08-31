import React from "react";
import "./NavbarStyle.css";

const Navbar = () => {
  return (
    <div>
      {/* navigation start */}
      <nav>
        {/* logo start */}
        <div className="kiri">
          <div className="logo">
            <a href="">
              <img src="../assets/uniqlo.png" alt="Home" title="Uniqlo" />
            </a>
          </div>
          {/* logo end */}
          {/* menu start */}
          <div className="menu">
            <ul>
              <li className="wanita">
                <a href="">WANITA</a>
              </li>
              <li className="pria">
                <a href="">PRIA</a>
              </li>
              <li className="anak">
                <a href="">ANAK</a>
              </li>
              <li className="bayi">
                <a href="">BAYI</a>
              </li>
            </ul>
          </div>
        </div>
        {/* menu end */}
        <div className="kanan">
          <div className="icon">
            <a href="">
              <i data-feather="search">SEARCH</i>
            </a>
            <a href="">
              <i data-feather="user">LOG IN</i>
            </a>
            <a href="">
              <i data-feather="heart">WISHLIST</i>
            </a>
            <a href="">
              <i data-feather="shopping-cart">SHOPING CART</i>
            </a>
          </div>
        </div>
      </nav>
      {/* navigation end */}
      {/* dropdown menu start */}
      {/* dropdown wanita */}
      <div className="dropdown-wanita">
        <ul>
          <h3>ATASAN</h3>
          <li>
            <a href="">koleksi atasan</a>
          </li>
          <li>
            <a href="">T-shirt lengan pendek</a>
          </li>
          <li>
            <a href="">T-shirt lengan panjang</a>
          </li>
          <li>
            <a href="">atasan crop</a>
          </li>
          <li>
            <a href="">bra top</a>
          </li>
          <li>
            <a href="">UT (Graphic t-SHirt)</a>
          </li>
          <li>
            <a href="">koleksi sweat dan jaket hoodie</a>
          </li>
          <li>
            <a href="">kemeja dan blues (lengan panjang)</a>
          </li>
          <li>
            <a href="">kemeja dan blues (lengan pendek)</a>
          </li>
          <li>
            <a href="">cardigan</a>
          </li>
          <li>
            <a href="">sweater</a>
          </li>
        </ul>
        <ul>
          <h3>GAUN</h3>
          <li>
            <a href="">gaun</a>
          </li>
        </ul>
        <ul>
          <h3>MODEST WEAR</h3>
          <li>
            <a href="">modest wear</a>
          </li>
        </ul>
        <ul>
          <h3>LUARAN</h3>
          <li>
            <a href="">koleksiluaran</a>
          </li>
          <li>
            <a href="" />
            jaket parka
          </li>
          <li>
            <a href="">jaket dan blazer</a>
          </li>
          <li>
            <a href="">air sense</a>
          </li>
          <li>
            <a href="">ultra light down</a>
          </li>
        </ul>
        <ul>
          <h3>DALAMAN</h3>
          <li>
            <a href="">koleksi dalaman</a>
          </li>
          <li>
            <a href="">BRA tanpa kawat</a>
          </li>
          <li>
            <a href="">bratop</a>
          </li>
          <li>
            <a href="">AIRism</a>
          </li>
          <li>
            <a href="">HEATTECH</a>
          </li>
          <li>
            <a href="">dalaman atas</a>
          </li>
          <li>
            <a href="">legging</a>
          </li>
          <li>
            <a href="">celana dalam</a>
          </li>
          <li>
            <a href="">kaos kaki</a>
          </li>
        </ul>
        <ul>
          <h3>SPORT UTILITY WEAR</h3>
          <li>
            <a href="">sport utility wear</a>
          </li>
        </ul>
        <ul>
          <h3>BAWAHAN</h3>
          <li>
            <a href="">koleksi bawahan</a>
          </li>
          <li>
            <a href="">jeans</a>
          </li>
          <li>
            <a href="">celana legging</a>
          </li>
          <li>
            <a href="">celana relax dan lebar</a>
          </li>
          <li>
            <a href="">airsense</a>
          </li>
          <li>
            <a href="">celana sweat</a>
          </li>
          <li>
            <a href="">celana kasual</a>
          </li>
          <li>
            <a href="">celana panjang dan celana angkel</a>
          </li>
          <li>
            <a href="">celana pendek dan rok celana</a>
          </li>
        </ul>
        <ul>
          <h3>LOUNGEWEAR</h3>
          <li>
            <a href="">koleksi loungewear</a>
          </li>
          <li>
            <a href="">piyama</a>
          </li>
          <li>
            <a href="">relaco</a>
          </li>
          <li>
            <a href="">sandal rumah</a>
          </li>
        </ul>
        <ul>
          <h3>PAKAIAN MATERNITY</h3>
          <li>
            <a href="">pakaian maternity</a>
          </li>
        </ul>
        <ul>
          <h3>ROK</h3>
          <li>
            <a href="">rok</a>
          </li>
        </ul>
        <ul>
          <h3>AKSESORIS</h3>
          <li>
            <a href="">koleksi aksesoris</a>
          </li>
          <li>
            <a href="">topi</a>
          </li>
          <li>
            <a href="">tas</a>
          </li>
          <li>
            <a href="">syal</a>
          </li>
          <li>
            <a href="">ikat pinggang</a>
          </li>
          <li>
            <a href="">sepatu dan sandal</a>
          </li>
          <li>
            <a href="">payung</a>
          </li>
          <li>
            <a href="">kacamata hitam</a>
          </li>
          <li>
            <a href="">lainya</a>
          </li>
        </ul>
      </div>
      {/* dropdown pria */}
      <div className="dropdown-pria">
        <ul>
          <h3>ATASAN</h3>
          <li>
            <a href="">koleksi atasan</a>
          </li>
          <li>
            <a href="">T-shirt (lengan panjang)</a>
          </li>
          <li>
            <a href="">T-shirt (lengan pendek)</a>
          </li>
          <li>
            <a href="">UT (graphic T-shirt)</a>
          </li>
          <li>
            <a href="">kaos polo</a>
          </li>
          <li>
            <a href="">koleksi sweat dan jaket hoodie</a>
          </li>
          <li>
            <a href="">kemeja kasual (lengan panjang)</a>
          </li>
          <li>
            <a href="">kemeja kasual (lengan pendek)</a>
          </li>
          <li>
            <a href="">kemeja formal</a>
          </li>
          <li>
            <a href="">sweater dan cardigan</a>
          </li>
        </ul>
        <ul>
          <h3>LOUNGEWEAR</h3>
          <li>
            <a href="">koleksi loungewear</a>
          </li>
          <li>
            <a href="">piyama</a>
          </li>
          <li>
            <a href="">sandal rumah</a>
          </li>
        </ul>
        <ul>
          <h3>LUARAN</h3>
          <li>
            <a href="">koleksi luaran</a>
          </li>
          <li>
            <a href="">blouson dan jaket parka</a>
          </li>
          <li>
            <a href="">jaket dan blazer</a>
          </li>
          <li>
            <a href="">airsense</a>
          </li>
          <li>
            <a href="">ultra light down</a>
          </li>
        </ul>
        <ul>
          <h3>AKSESORIS</h3>
          <li>
            <a href="">koleksi aksesoris</a>
          </li>
          <li>
            <a href="">topi</a>
          </li>
          <li>
            <a href="">syal</a>
          </li>
          <li>
            <a href="">tas</a>
          </li>
          <li>
            <a href="">ikat pinggang</a>
          </li>
          <li>
            <a href="">sepatu dan sandal</a>
          </li>
          <li>
            <a href="">payung</a>
          </li>
          <li>
            <a href="">kacamata</a>
          </li>
          <li>
            <a href="">lainya</a>
          </li>
        </ul>
        <ul>
          <h3>BAWAHAN</h3>
          <li>
            <a href="">koleksi bawahan</a>
          </li>
          <li>
            <a href="">celana relax dan lebar</a>
          </li>
          <li>
            <a href="">jeans</a>
          </li>
          <li>
            <a href="">chino</a>
          </li>
          <li>
            <a href="">air sense</a>
          </li>
          <li>
            <a href="">celana sweat</a>
          </li>
          <li>
            <a href="">celana panjang dan angkel</a>
          </li>
          <li>
            <a href="">celana pendek</a>
          </li>
        </ul>
        <ul>
          <h3>SPORT UTILITY WEAR</h3>
          <li>
            <a href="">sport utility wear</a>
          </li>
        </ul>
        <ul>
          <h3>DALAMAN</h3>
          <li>
            <a href="">koleksi dalaman</a>
          </li>
          <li>
            <a href="">AIRism</a>
          </li>
          <li>
            <a href="">heattech</a>
          </li>
          <li>
            <a href="">dalaman atas</a>
          </li>
          <li>
            <a href="">legging</a>
          </li>
          <li>
            <a href="">celana dalam </a>
          </li>
          <li>
            <a href="">kaos kaki</a>
          </li>
        </ul>
      </div>
      {/* dropdown anak */}
      <div className="dropdown-anak">
        <ul>
          <h3>ATASAN</h3>
          <li>
            <a href="">koleksi atasan</a>
          </li>
          <li>
            <a href="">T-shirt</a>
          </li>
          <li>
            <a href="">UT (graphic T-shirt)</a>
          </li>
          <li>
            <a href="">koleksi sweat dan jaket hoodie</a>
          </li>
          <li>
            <a href="">kemeja dan blues</a>
          </li>
          <li>
            <a href="">sweater dan cardigan</a>
          </li>
        </ul>
        <ul>
          <h3>DALAMAN</h3>
          <li>
            <a href="">koleksi dalaman</a>
          </li>
          <li>
            <a href="">dalaman</a>
          </li>
          <li>
            <a href="">AIRism</a>
          </li>
          <li>
            <a href="">heattech</a>
          </li>
          <li>
            <a href="">BRA</a>
          </li>
          <li>
            <a href="">legging dan celana ketat</a>
          </li>
          <li>
            <a href="">celana dalam</a>
          </li>
          <li>
            <a href="">kaos kaki</a>
          </li>
        </ul>
        <ul>
          <h3>LUARAN</h3>
          <li>
            <a href="">koleksi luaran</a>
          </li>
          <li>
            <a href="">bluoson dan jaket parka</a>
          </li>
        </ul>
        <ul>
          <h3>LOUNGEWEAR</h3>
          <li>
            <a href="">koleksi loungewear</a>
          </li>
          <li>
            <a href="">loungewear dan piyama</a>
          </li>
          <li>
            <a href="">relaco</a>
          </li>
        </ul>
        <ul>
          <h3>BAWAHAN</h3>
          <li>
            <a href="">koleksi bawahan</a>
          </li>
          <li>
            <a href="">celana panjang</a>
          </li>
          <li>
            <a href="">celana pendek</a>
          </li>
          <li>
            <a href="">rok</a>
          </li>
        </ul>
        <ul>
          <h3>AKSESORIS</h3>
          <li>
            <a href="">koleksi aksesoris</a>
          </li>
          <li>
            <a href="">lainya</a>
          </li>
        </ul>
        <ul>
          <h3>GAUN</h3>
          <li>
            <a href="">gaun</a>
          </li>
        </ul>
        <ul>
          <h3>SPORT UTILITY WEAR</h3>
          <li>
            <a href="">sport utility wear</a>
          </li>
        </ul>
      </div>
      {/* dropdown bayi */}
      <div className="dropdown-bayi">
        <ul>
          <h3>NEWBORN (6-18BULAN)</h3>
          <li>
            <a href="">pakaian newborn</a>
          </li>
          <li>
            <a href="">aksesoris</a>
          </li>
        </ul>
        <ul>
          <h3>NEWBORN (18-24BULAN)</h3>
          <li>
            <a href="">koleksi newborn</a>
          </li>
          <li>
            <a href="">luaran</a>
          </li>
          <li>
            <a href="">one piece</a>
          </li>
          <li>
            <a href="">atasan</a>
          </li>
          <li>
            <a href="">baju terusan</a>
          </li>
          <li>
            <a href="">legging</a>
          </li>
          <li>
            <a href="">UT (graphic T-shirt)</a>
          </li>
          <li>
            <a href="">gaun</a>
          </li>
          <li>
            <a href="">AIRism</a>
          </li>
          <li>
            <a href="">kaos kaki</a>
          </li>
          <li>
            <a href="">aksesoris</a>
          </li>
        </ul>
        <ul>
          <h3>TODDLER (3-4TAHUN)</h3>
          <li>
            <a href="">koleksi balita</a>
          </li>
          <li>
            <a href="">atasan</a>
          </li>
          <li>
            <a href="">bawahan</a>
          </li>
          <li>
            <a href="">luaran</a>
          </li>
          <li>
            <a href="">piyama</a>
          </li>
          <li>
            <a href="">gaun</a>
          </li>
          <li>
            <a href="">UT (graphic T-shirt)</a>
          </li>
          <li>
            <a href="">heattech</a>
          </li>
          <li>
            <a href="">dalaman atas</a>
          </li>
          <li>
            <a href="">AIRism</a>
          </li>
          <li>
            <a href="">kaos kaki</a>
          </li>
          <li>
            <a href="">aksesoris</a>
          </li>
        </ul>
      </div>
      {/* dropdown menu end */}
      {/* this is script of icons start  */}
      {/* this is script of icons end */}
    </div>
  );
};

export default Navbar;
