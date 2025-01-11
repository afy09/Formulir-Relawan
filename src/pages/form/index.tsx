import React from "react";
import Menu from "../menu";
import Berita from "../berita";

const Form = () => {
  return (
    <div className="px-4 py-4 border border-gray-400 rounded-lg mt-4 mb-4">
      <div className="flex gap-2 items-center">
        <div className="px-2  border bg-[#A31D1D] text-white rounded-full">1</div>

        <h1 className="text-[#A31D1D] text-start font-bold text-xl">Pengisian Formulir Relawan</h1>
      </div>

      <form className="mt-4 flex flex-col gap-4">
        {/* NAME */}
        <div>
          <label className=" block mb-1 font-semibold ">Nama Lengkap</label>
          <input type="text" placeholder="Masukkan Nama Lengkap" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" />
        </div>

        {/* JENIS KELAMIN */}
        <div>
          <label className=" block mb-1 font-semibold ">Jenis Kelamin</label>
          <input type="email" placeholder="Masukkan Email" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" />
        </div>

        {/* ALAMAT */}
        <div>
          <label className=" block mb-1 font-semibold ">Alamat</label>
          <input type="text" placeholder="Provinsi" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" />

          <input type="text" placeholder="Kabupaten / Kota" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none mt-5" />

          <input type="text" placeholder="Kecamatan" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none mt-5" />

          <input type="text" placeholder="Kelurahan" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none mt-5" />
        </div>

        {/* EMAIL */}
        <div>
          <label className=" block mb-1 font-semibold ">Email</label>
          <input type="email" placeholder="Masukkan Email" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" />
        </div>

        {/* NO TLPN */}
        <div>
          <label className=" block mb-1 font-semibold ">Nomor Telepon</label>
          <input type="text" placeholder="Masukkan Nomor Telepon" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" />
        </div>

        {/* SCAN KTP */}
        <div>
          <label className=" block mb-1 font-semibold ">Foto KTP</label>
          <input type="file" placeholder="Upload File KTP" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" />
        </div>

        {/* Motivasi */}
        <div>
          <label className=" block mb-1 font-semibold ">Motivasi Menjadi Relawan</label>
          <textarea rows={4} placeholder="Masukkan Motivasi Anda" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" />
        </div>

        {/* Ingin Berkontibusi Dalam Hal */}
        <div>
          <label className=" block mb-1 font-semibold ">Ingin Berkontibusi Dalam Hal</label>
          <textarea rows={4} placeholder="Masukkan Kontribusi" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" />
        </div>

        {/* BUTTON */}
        <div className=" flex justify-end gap-3 mb-10">
          <button className="bg-[#A31D1D] px-7 py-2 text-white rounded-lg">Submit</button>
        </div>
      </form>

      <hr />

      <Menu />
      <Berita />
    </div>
  );
};

export default Form;
