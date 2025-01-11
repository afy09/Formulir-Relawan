import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import halaman
import PageUtama from "./pages/PageUtama";
import Tentang from "./pages/menu/tentang";
import Misi from "./pages/menu/misi";
import Program from "./pages/menu/program";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Tambahkan navigasi jika diperlukan */}
        <Routes>
          <Route path="/" element={<PageUtama />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/visimisi" element={<Misi />} />
          <Route path="/program" element={<Program />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
