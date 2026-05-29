import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import Sidebar from "../components/Sidebar";   // 🛠️ PERBAIKAN: Huruf S besar agar tidak crash
import Header from "../components/Header";     // 🛠️ PERBAIKAN: Sekarang akan dipasang
import RightPanel from "../components/RightPanel";
import Footer from "../components/Footer";

export default function MainLayout() {
    return (
        <div className="flex h-screen w-full bg-[#F8FAFC] font-sans antialiased text-slate-800 overflow-hidden">
            
            {/* 1. SIDEBAR (Kiri) - Lebar tetap */}
            <aside className="w-64 hidden lg:block bg-white border-r border-slate-100 flex-shrink-0 h-full">
                <Sidebar />
            </aside>

            {/* 2. AREA KANAN (Header + Konten Utama + Right Panel) */}
            <div className="flex-1 flex flex-col min-w-0 h-full">
                
                {/* 🛠️ PERBAIKAN: Memasang Header di posisi paling atas */}
                <Header />

                {/* AREA BAWAH HEADER: Dibagi menjadi Dashboard Tengah & Panel Kalender Kanan */}
                <div className="flex-1 flex overflow-hidden">
                    
                    {/* MAIN UTAMA (Outlet / Halaman Dashboard) */}
                    <main className="flex-1 p-6 overflow-y-auto bg-[#F8FAFC]">
                        {/* 🛠️ PERBAIKAN: Menghapus container bg-white raksasa agar kartu-kartu dashboard terpisah rapi seperti di gambar */}
                        <div className="space-y-6 max-w-5xl mx-auto">
                            <Outlet />
                        </div>
                    </main>

                    {/* 3. RIGHT PANEL (Kanan) - Kalender, Upcoming Trips & Social Media */}
                    <aside className="w-80 hidden xl:block p-6 border-l border-slate-100 bg-[#F8FAFC] overflow-y-auto h-full">
                        <RightPanel />
                    </aside>

                </div>
            </div>
=======
import Sidebar from "../components/Sidebar";

import RightPanel from "../components/RightPanel"; // Buat komponen baru untuk kalender & schedule

export default function MainLayout() {
    return (
        <div className="flex min-h-screen w-full bg-[#F8F9FA] font-sans antialiased">
            
            {/* SIDEBAR - Lebar tetap, background putih */}
            <aside className="w-64 hidden lg:block bg-white border-r border-slate-100">
                <Sidebar />
            </aside>

            {/* MAIN CONTENT AREA - Area abu-abu dengan container putih membulat */}
            <main className="flex-1 flex flex-col p-4 lg:p-6 gap-6 overflow-y-auto">
                
                {/* Dashboard Container (Kertas Putih Membulat di Gambar) */}
                <div className="bg-white rounded-[2.5rem] shadow-sm min-h-full p-8 overflow-hidden border border-slate-50">
                    <Outlet />
                </div>
            </main>

            {/* RIGHT PANEL - Kalender & Schedule */}
            <aside className="w-80 hidden xl:block bg-[#F8F9FA] p-6 border-l border-slate-100">
                <RightPanel />
            </aside>
>>>>>>> 9641ad4d55f6a07ccc9fa4c5984ff1df3398a38f
            
        </div>
    );
}