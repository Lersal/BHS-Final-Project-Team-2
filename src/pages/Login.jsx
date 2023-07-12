function Login () {
    return (
        <div className="border border-gray-300 m-20 flex md:flex-shrink-0">
  {/* sign in */}
  <div className=" h-auto w-2/4 m-5">
    <div className="flex justify-between ">
      <h1 className="font-bold text-3xl my-4"> MASUK</h1>
      <span className="text-sm w-1 mr-5 text-gray-400">wajib diisi*</span>
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
        <a href className>KETENTUAN PENGGUNAAN</a>
        <a href className>KEBIJAKAN PRIVASI</a>
      </div>
      <div className="mt-5 flex flex-col">
        <button className=" bg-black text-white text-xl font-bold py-2 px-10 mb-7 w-full"> <a href="login.php" /> MASUK </button>
        {/* lupa kata sandi */}
        <a href className="underline"> Lupa Kata Sandi?</a>
      </div>
    </form>
  </div>
  {/* separator */}
  <div className="border-l border-gray-300 my-5" />
  {/* sign up */}
  <div className="w-2/4 my-5 ">
    <h1 className="font-bold text-3xl mx-5 my-4 "> BUAT AKUN </h1>
    <p className="text-base mx-5 mt-6 mb-14 "> Jika Anda membuat akun, Anda bisa mendapatkan layanan yang dipersonalisasikan seperti melihat riwayat pembelian dan mendapatkan kupon diskon dengan keanggotaan Anda. Daftar hari ini, gratis!</p>
    <a href className="border border-black py-2 px-10 mx-6 w-full bg-black text-white text-xl font-bold"> DAFTAR</a>
  </div>
</div>

    )
}

export default Login