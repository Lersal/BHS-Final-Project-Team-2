import { Link } from "react-router-dom";

function Login() {
    return (
      <div>
        <div>
          <div className="mt-20 mx-20 pb-8 border-b border-gray-300">
            <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 90 40"
              width={90}
              height={40}
              role="img"
              aria-label="ユニクロ｜UNIQLO"
              >      
              <title>ユニクロ｜UNIQLO</title>
              <path fill="red" d="M50 0h40v40H50zM0 0h40v40H0z" />
              <g fill="#fff">
                <path d="M79.48 5.47h2.53v12.64h-2.53zM63.47 13.9a4.21 4.21 0 0 1-8.42 0V5.47h2.53v8.43a1.68 1.68 0 1 0 3.36 0V5.47h2.53zM75.26 34.53h-8.42V21.89h2.53V32h5.89v2.53zM75.26 18.11h-2.53l-3.36-7.22v7.22h-2.53V5.47h2.53l3.36 7.22V5.47h2.53v12.64zM59.26 21.89a4.21 4.21 0 0 0-4.21 4.22v4.21a4.21 4.21 0 0 0 4.21 4.21 4.34 4.34 0 0 0 .82-.07l.86 2.6h2.53l-1.25-3.75a4.2 4.2 0 0 0 1.25-3v-4.2a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 1 1-3.36 0v-4.21a1.68 1.68 0 1 1 3.36 0zM80.74 21.89a4.22 4.22 0 0 0-4.22 4.22v4.21a4.21 4.21 0 0 0 8.42 0v-4.21a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 0 1-3.37 0v-4.21a1.68 1.68 0 0 1 3.37 0z" />
                <g>
                  <path d="M22.74 15.16H34.1v2.52H22.74zM24 5.47h8.84V8H24zM14.74 5.47H7.15V8h5.06v7.16H5.9v2.52h11.36v-2.52h-2.52V5.47zM22.74 22.31v12.22H34.1V22.31zM31.57 32h-6.31v-7.16h6.31zM7.15 22.31l-1.28 6.12h2.52l.76-3.59h5.07L12.73 32H5.14l-.51 2.53h10.11l2.52-12.22H7.15z" />
                </g>
              </g>
            </svg>
            </Link>
        
          </div>
        </div>
        <div className="border border-gray-300 m-20 flex md:flex-shrink-0">
          {/* sign in */}
          <div className=" h-auto w-2/4 m-5">
            <div className="flex justify-between ">
              <h1 className="font-bold text-3xl my-4"> MASUK</h1>
<span className="text-sm w-10 mr-5 text-gray-400">wajib diisi*</span>
            </div>
            <p className="text-base my-6"> Masuk dengan alamat email dan kata sandi Anda.</p>
            {/* form */}
            <form action="login" method="post">
              {/* email */}
              <div className="mb-5 flex flex-col">
                <label className="text-xl" htmlFor="email"> Alamat Email <span className="text-gray-400">*</span></label>
                <input className="border-b border-black w-auto py-2 px-4 mb-3 placeholder:w-auto bg-gray-100" type="email" id="email" placeholder="Masukan alamat email Anda" required />
              </div> 
              {/* password */}
              <div className="mb-5 flex flex-col">
                <label htmlFor="password" className="text-xl">Kata Sandi <span className="text-gray-400">*</span></label>
                <input className="border-b border-black w-auto py-2 px-4 mb-2 bg-gray-100" type="password" id="password" required />
                <p className="text-sm text-gray-400 mb-4"> kata sandi terdiri dari 8 karakter</p>
              </div>
              {/* ketentuan & kebijakan */}
              <div className="mb-5 text-base underline font-bold flex flex-col">
                <Link className>KETENTUAN PENGGUNAAN</Link>
                <Link className>KEBIJAKAN PRIVASI</Link>
              </div>
              <div className="mt-5 flex flex-col">
                <button className=" bg-black text-white text-xl font-bold py-2 px-10 mb-7 w-full"> <a href="login.php" /> MASUK </button>
                {/* lupa kata sandi */}
                <Link className="underline"> Lupa Kata Sandi?</Link>
              </div>
            </form>
          </div>
          {/* separator */}
          <div className="border-l border-gray-300 my-5" />
          {/* sign up */}
          <div className="w-2/4 my-5 ">
            <h1 className="font-bold text-3xl mx-5 my-4 "> BUAT AKUN </h1>
            <p className="text-base mx-5 mt-6 mb-14 "> Jika Anda membuat akun, Anda bisa mendapatkan layanan yang dipersonalisasikan seperti melihat riwayat pembelian dan mendapatkan kupon diskon dengan keanggotaan Anda. Daftar hari ini, gratis!</p>
            <Link to="/Register" className="border border-black py-2 px-10 mx-6 w-full bg-black text-white text-xl font-bold"> DAFTAR</Link>
          </div>
        </div>
      </div>


    );
}

export default Login;