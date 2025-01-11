import React, { useState } from "react";
import Menu from "../menu";
import Berita from "../berita";
import Foother from "../../components/foother/foother";
import axios from "axios";
import Lottie from "lottie-react";
import AnimatinSukses from "./icon/animasi-succses-udin.json";

const Form = () => {
  const [nama, setnama] = useState<string>("");
  const [jenis_kelamin, setjenis_kelamin] = useState<string>("");
  const [tempat, settempat] = useState<string>("");
  const [tanggal_lahir, settanggal_lahir] = useState<string>("");
  const [provinsi, setprovinsi] = useState<string>("");
  const [kabupaten, setkabupaten] = useState<string>("");
  const [kecamatan, setkecamatan] = useState<string>("");
  const [kelurahan, setkelurahan] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [no_hp, setno_hp] = useState<string>("");
  const [motivasi, setmotivasi] = useState<string>("");
  const [kontribusi, setkontribusi] = useState<string>("");
  const [ktp, setktp] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("jenis_kelamin", jenis_kelamin);
    formData.append("tempat", tempat);
    formData.append("tanggal_lahir", tanggal_lahir);
    formData.append("provinsi", provinsi);
    formData.append("kabupaten", kabupaten);
    formData.append("kecamatan", kecamatan);
    formData.append("kelurahan", kelurahan);
    formData.append("email", email);
    formData.append("no_hp", no_hp);
    formData.append("motivasi", motivasi);
    formData.append("kontribusi", kontribusi);
    formData.append("ktp", ktp as Blob);
    try {
      const response = await axios.post("https://relawan.rekapitung.id/api/formulir", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        setShowPopup(true);
      }
    } catch (error) {
      alert("gagal mengirim data");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="px-4 py-4 border border-gray-400 rounded-lg mt-4 mb-4">
        <div className="flex gap-2 items-center">
          <div className="px-2 border bg-[#A31D1D] text-white rounded-full">1</div>
          <h1 className="text-[#A31D1D] text-start font-bold text-xl">Pengisian Formulir Relawan</h1>
        </div>

        <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Nama */}
          <div>
            <label className="block mb-1 font-semibold">Nama Lengkap</label>
            <input type="text" name="nama" placeholder="Masukkan Nama Lengkap" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={nama} onChange={(e) => setnama(e.target.value)} />
          </div>

          {/* Jenis Kelamin */}
          <div>
            <label className="block mb-1 font-semibold">Jenis Kelamin</label>
            <select name="jenis_kelamin" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={jenis_kelamin} onChange={(e) => setjenis_kelamin(e.target.value)}>
              <option value="" disabled>
                Pilih Jenis Kelamin
              </option>
              <option value="laki-laki">Laki-Laki</option>
              <option value="wanita">Wanita</option>
            </select>
          </div>

          {/* Tempat */}
          <div>
            <label className="block mb-1 font-semibold">Tempat Lahir</label>
            <input type="text" name="tempat" placeholder="Masukkan Tempat Lahir" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={tempat} onChange={(e) => settempat(e.target.value)} />
          </div>

          {/* Tanggal Lahir */}
          <div>
            <label className="block mb-1 font-semibold">Tanggal Lahir</label>
            <input type="date" name="tanggal_lahir" placeholder="Masukkan Tanggal Lahir" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={tanggal_lahir} onChange={(e) => settanggal_lahir(e.target.value)} />
          </div>

          {/* Alamat */}
          <div>
            <label className="block mb-1 font-semibold">Alamat</label>
            <input type="text" name="provinsi" placeholder="Provinsi" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={provinsi} onChange={(e) => setprovinsi(e.target.value)} />
            <input type="text" name="kabupaten" placeholder="Kabupaten / Kota" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none mt-5" value={kabupaten} onChange={(e) => setkabupaten(e.target.value)} />
            <input type="text" name="kecamatan" placeholder="Kecamatan" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none mt-5" value={kecamatan} onChange={(e) => setkecamatan(e.target.value)} />
            <input type="text" name="kelurahan" placeholder="Kelurahan" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none mt-5" value={kelurahan} onChange={(e) => setkelurahan(e.target.value)} />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input type="email" name="email" placeholder="Masukkan Email" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={email} onChange={(e) => setemail(e.target.value)} />
          </div>

          {/* Nomor Telepon */}
          <div>
            <label className="block mb-1 font-semibold">Nomor Telepon</label>
            <input type="text" name="no_hp" placeholder="Masukkan Nomor Telepon" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={no_hp} onChange={(e) => setno_hp(e.target.value)} />
          </div>

          {/* Foto KTP */}
          <div>
            <label className="block mb-1 font-semibold">Foto KTP</label>
            <input
              type="file"
              name="ktp"
              className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none"
              onChange={(e) => {
                const file = e.target.files?.[0] || null; // Mendapatkan file pertama yang dipilih atau null
                setktp(file); // Memperbarui state dengan file
              }}
            />
          </div>

          {/* Motivasi */}
          <div>
            <label className="block mb-1 font-semibold">Motivasi Menjadi Relawan</label>
            <textarea rows={4} name="motivasi" placeholder="Masukkan Motivasi Anda" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={motivasi} onChange={(e) => setmotivasi(e.target.value)} />
          </div>

          {/* Kontribusi */}
          <div>
            <label className="block mb-1 font-semibold">Ingin Berkontribusi Dalam Hal</label>
            <textarea rows={4} name="kontribusi" placeholder="Masukkan Kontribusi" className="bg-gray-100 px-3 py-2 w-full rounded-lg outline-none" value={kontribusi} onChange={(e) => setkontribusi(e.target.value)} />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3 mb-10">
            <button type="submit" className={`bg-[#A31D1D] px-7 py-2 text-white rounded-lg`}>
              {isSubmitting ? "Mengirim..." : "Submit"}
            </button>
          </div>
        </form>

        <hr />

        <Menu />
        <Berita />
        <Foother />
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-999999">
          <div className="bg-white px-12 py-8 rounded-2xl text-center flex flex-col justify-center">
            <div className=" flex justify-center">
              <Lottie className="w-52 h-52" animationData={AnimatinSukses} loop={false} />
            </div>
            <p className="text-black font-semibold text-xl">Berhasil Mendaftar</p>
            <div className="w-full">
              <button className="mt-4 px-4 py-2 border border-[#A31D1D] text-[#A31D1D] w-full rounded-lg " onClick={() => window.location.reload()}>
                Lanjut
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
