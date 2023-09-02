import React from "react"
import { Link } from "react-router-dom"

function Register () {
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
            <div className="border rounded shadow-md w-7/12 h-auto my-20 mx-20 px-5 py-4">
                {/* heading */}
                <h1 className="font-bold text-4xl pb-6">BUAT AKUN</h1>
                <div className="flex">
                    <p className="text-base pb-5 pr-3"> Anda akan menerima email konfirmasi ke alamat email Anda yang terkait dengan akun. Harap pastikan untuk memeriksa email yang masuk dari UNIQLO.</p>
                    <span className="text-sm text-gray-400">wajib diisi*</span>
                </div>
                {/* form */}
                <form action="" method="post">
                    {/* email */}
                    <div className="mb-5 grid grid-cols-3 gap-0.5">
                        <label htmlFor="email" className="text-base font-bold py-3 w-full h-10 mr-5"> 
                            ALAMAT EMAIL
                            <span className="text-gray-400">*</span>
                        </label>
                        <input type="email" id="email" className="border-b border-gray-400 placeholder:w-full pl-4 w-full col-span-2  py-3 mr-5 bg-gray-100" placeholder="Masukan alamat email Anda" required />
                    </div>
                    {/* password */}
                    <div className="mb-5 grid grid-cols-3 gap-0.5">
                        <label htmlFor="password" className="text-base font-bold py-3 w-full h-10 mr-5"> 
                            KATA SANDI
                            <span className="text-gray-400">*</span>
                        </label>
                        <input type="password" id="password" className="border-b border-gray-400 mr-5 pl-4 py-3 w-full col-span-2 bg-gray-100" required />
                    </div>
                    {/* date */}
                    <div className="mb-5 grid grid-cols-3 gap-0.5 ">
                        <label htmlFor="date" className="text-base font-bold py-3 w-full h-10 mr-5 "> TANGGAL LAHIR</label>
                        <input type="date" id="date" className="border-b border-gray-400 py-3 pl-4  bg-gray-100" />
                    </div>
                    {/* nomor handphone */}
                    <div className="mb-5 grid grid-cols-3 gap-0.5 ">
                        <label htmlFor="number" className="text-base font-bold py-3 w-full h-10 mr-5 "> NOMOR HANDPHONE</label>
                        <input type="number" id="number" className="border-b border-gray-400 py-3 pl-4  bg-gray-100" />
                    </div>
                    {/* gender */}
                    <div className="mb-7 grid grid-cols-3">
                        <label htmlFor="gender" className="text-base mr-14 font-bold"> JENIS KELAMIN</label>
                        <div>
                            <input type="radio" id="gender" name="gender" className="text-base pr-4" /> LAKI-LAKI 
                            <input type="radio" id="gender" name="gender" className="text-base ml-6" /> PEREMPUAN 
                        </div>   
                    </div>
                    {/* confirmation newsletter */}
                    <div className="mb-5">
                        <label htmlFor="newsletter" className="text-base font-bold"> KONFIRMASI LANGGANAN </label>
                        <div className="ml-4">
                            <input type="checkbox" id="newsletter" className="text-base w-4 h-4" /> Newsletter UNIQLO
                        </div>
                    </div>
                    {/* separator */}
                    <div className="border-t-4 w-auto my-5 mx-2" ></div>
                    {/* perjanjian keanggotaan */}
                    <div className="mb-4">
                        <h2 className="text-lg font-bold pb-4">PERJANJIAN KEANGGOTAAN</h2>
                        <p className="text-base"> Dengan membuat akun, Anda setuju dengan persyaratan penggunaan dan kebijakan privasi UNIQLO</p>
                    </div>
                    <div className="mb-4">
                        <input type="checkbox" className="w-4 h-4 text-base" required /> Saya setuju dengan PERSYARATAN PENGGUNAAN dan KEBIJAKAN PRIVASI UNIQLO
                    </div>
                    {/* ketentuan & kebijakan */}
                    <div className="mb-4">
                        <Link className="underline text-base">KETENTUAN PENGGUNAAN</Link>
                        <Link className="underline text-base">KEBIJAKAN PRIVASI</Link>
                    </div>
                    <div className="mt-5">
                        <button type="submit" className="border rounded bg-black text-white font-bold px-5 py-4 my-8 mx-4">DAFTAR</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Register