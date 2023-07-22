import React from "react"
import { Link } from "react-router-dom"

function Register () {
    return (
        <div>
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