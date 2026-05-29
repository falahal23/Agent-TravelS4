import React, { Suspense } from "react";
import "./assets/tailwind.css";
import Loading from "./components/Loading";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// PAGES
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
<<<<<<< HEAD
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const DataKontak = React.lazy(() => import("./pages/DataKontak"));
const Membership = React.lazy(() => import("./pages/Membership"));
const RiwayatInteraksi = React.lazy(() => import("./pages/RiwayatInteraksi"));
const DataTransaksi = React.lazy(() => import("./pages/DataTransaksi"));  
const LaporanTransaksi = React.lazy(() => import("./pages/LaporanTransaksi"));
const AktivitasUser = React.lazy(() => import("./pages/AktivitasUser"));
const Marketing = React.lazy(() => import("./pages/Marketing"));

=======
const Wisata = React.lazy(() => import("./pages/Wisata"));
const KelolaBooking = React.lazy(() => import("./pages/KelolaBooking"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
>>>>>>> 9641ad4d55f6a07ccc9fa4c5984ff1df3398a38f
// TAMBAHKAN INI:
const DetailCustomer = React.lazy(() => import("./pages/DetailCustomer")); 

const VerifikasiPembayaran = React.lazy(() => import("./pages/VerifikasiPembayaran"));
const KategoriPaket = React.lazy(() => import("./pages/KategoriPaket"));
const Testimoni = React.lazy(() => import("./pages/Testimoni"));
<<<<<<< HEAD
=======
const LaporanTransaksi = React.lazy(() => import("./pages/LaporanTransaksi"));
>>>>>>> 9641ad4d55f6a07ccc9fa4c5984ff1df3398a38f

// PRODUCT
const Product = React.lazy(() => import("./pages/Products"));
const DetailProduct = React.lazy(() => import("./pages/DetailProducts"));
const ComponentsPage = React.lazy(() => import("./pages/Components"));

// AUTH
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

// ERROR
const ErrorPage = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* MAIN */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
<<<<<<< HEAD
          <Route path="/data-kontak" element={<DataKontak />} />
          <Route path="/riwayat-interaksi" element={<RiwayatInteraksi />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/data-transaksi" element={<DataTransaksi />} />
          <Route path="/kategori-paket" element={<KategoriPaket />} />
          <Route path="/testimoni" element={<Testimoni />} />
=======
          <Route path="/paket-wisata" element={<Wisata />} />
          <Route path="/kelola-booking" element={<KelolaBooking />} />
          <Route path="/kategori-paket" element={<KategoriPaket />} />
          <Route path="/testimoni" element={<Testimoni />} />
          <Route path="/orders" element={<Orders />} />
          
>>>>>>> 9641ad4d55f6a07ccc9fa4c5984ff1df3398a38f
          {/* CUSTOMERS MANAGEMENT */}
          <Route path="/customers" element={<Customers />} />
          {/* TAMBAHKAN RUTE PARAMETER INI: */}
          <Route path="/customers/:id" element={<DetailCustomer />} />

          <Route path="/verifikasi-pembayaran" element={<VerifikasiPembayaran />} />
          <Route path="/laporan-transaksi" element={<LaporanTransaksi />} />
<<<<<<< HEAD
          <Route path="/aktivitas-user" element={<AktivitasUser />} />
          <Route path="/marketing" element={<Marketing />} />
=======

>>>>>>> 9641ad4d55f6a07ccc9fa4c5984ff1df3398a38f
          {/* PRODUCT */}
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/components" element={<ComponentsPage />} />

          {/* ERROR */}
          <Route path="/error-400" element={<ErrorPage errorCode="400" />} />
          <Route path="/maintenance" element={<ErrorPage errorCode="401" />} />
          <Route path="/error-500" element={<ErrorPage errorCode="500" />} />
          <Route path="*" element={<ErrorPage errorCode="404" />} />
        </Route>

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;