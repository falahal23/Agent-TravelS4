<<<<<<< HEAD
import { FaRegBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
    const [search, setSearch] = useState("");

    return (
        <header className="flex justify-between items-center px-8 py-5 bg-[#F8FAFC]">
            
            {/* 🔥 BAGIAN KIRI: Title & Search Bar */}
            <div className="flex items-center gap-8 flex-1">
                <h1 className="text-xl font-bold text-slate-800">Dashboard</h1>
                
                <div className="relative w-full max-w-sm">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-[#EBF0FA] text-sm text-slate-700 rounded-full pl-11 pr-4 py-2.5 outline-none transition-all focus:ring-2 focus:ring-blue-100 placeholder-slate-400 font-medium"
                    />
                </div>
            </div>

            {/* 🔥 BAGIAN KANAN: Notification & Profile */}
            <div className="flex items-center gap-6">
                
                {/* Notification Icon */}
                <button className="relative p-2 text-slate-600 hover:text-slate-800 transition-colors">
                    <FaRegBell className="text-[22px]" />
                    {/* Red dot badge */}
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                {/* Profile Section */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="flex flex-col text-right">
                        <span className="text-sm font-bold text-slate-800 leading-tight">Farzana Akhi</span>
                        <span className="text-[10px] font-bold text-slate-400">Admin</span>
                    </div>
                    <img
                        src="/images/foto.png" 
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover bg-slate-200 border border-slate-100"
                    />
                </div>
                
=======
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { MdLogout } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const settingsRef = useRef(null);

    const data = ["Dashboard", "Orders", "Customers", "Reports", "Travel Mobil", "Travel Kapal"];

    const filtered = data.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        function handleClickOutside(event) {
            if (settingsRef.current && !settingsRef.current.contains(event.target)) {
                setShowSettings(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        alert("Anda telah berhasil Log Out!");
        setShowSettings(false);
        navigate("/login");
    };

    return (
        <header className="sticky top-0 z-40 flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-xl border-b border-white/10 transition-all overflow-visible shadow-2xl">
            {/* Background Glow Effect - Membuat header terasa lebih glossy */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {/* 🔥 SEARCH BAR - Glossy Dark */}
            <div id="search-bar" className="relative w-full max-w-md z-50">
                <div className="relative flex items-center group">
                    <FaSearch className="absolute left-4 text-white/30 group-focus-within:text-blue-400 transition-colors" />
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search menu..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setShowModal(true)}
                        className="w-full bg-white/5 border border-white/10 text-sm text-white rounded-full pl-11 pr-16 py-2.5 outline-none transition-all duration-300 focus:bg-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 placeholder-white/20"
                    />
                    <div className="absolute right-3 hidden sm:flex items-center bg-black/40 px-2 py-1 rounded-lg border border-white/10 shadow-sm">
                        <span className="text-[10px] font-bold text-white/40 tracking-tighter">⌘K</span>
                    </div>
                </div>

                {/* 🔥 DROPDOWN SEARCH - Black Glossy */}
                {showModal && search && (
                    <div className="absolute top-full mt-3 w-full bg-gray-950/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden py-2 animate-in slide-in-from-top-2 duration-200">
                        {filtered.length > 0 ? (
                            filtered.map((item, index) => (
                                <div
                                    key={index}
                                    className="px-5 py-3 text-sm text-white/70 hover:bg-blue-600 hover:text-white cursor-pointer transition-all flex items-center gap-3 font-medium"
                                    onClick={() => {
                                        setSearch(item);
                                        setShowModal(false);
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                    {item}
                                </div>
                            ))
                        ) : (
                            <div className="px-4 py-4 text-sm text-white/30 text-center italic">
                                No results found for "{search}"
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* 🔥 RIGHT SECTION: Icons & Profile */}
            <div id="icons-container" className="flex items-center space-x-3 sm:space-x-6 relative z-50">
                
                <div className="flex items-center space-x-2">
                    {/* Notification */}
                    <button className="relative p-2.5 rounded-xl text-white/50 hover:bg-white/10 hover:text-blue-400 transition-all">
                        <FaBell className="text-lg" />
                        <span className="absolute top-2 right-2.5 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                    </button>

                    {/* Chart Icon */}
                    <button className="p-2.5 rounded-xl hover:bg-white/10 transition-all text-xl grayscale hover:grayscale-0">
                        <FcAreaChart />
                    </button>

                    {/* 🔥 Settings - Glossy Dropdown */}
                    <div className="relative" ref={settingsRef}>
                        <button 
                            onClick={() => setShowSettings(!showSettings)}
                            className={`p-2.5 rounded-xl transition-all ${
                                showSettings ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "text-white/50 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            <SlSettings className="text-lg" />
                        </button>

                        {showSettings && (
                            <div className="absolute right-0 mt-4 w-56 bg-gray-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 py-3 origin-top-right animate-in fade-in zoom-in duration-200">
                                <div className="px-5 py-2 mb-2 border-b border-white/5">
                                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">User Menu</p>
                                </div>
                                <button 
                                    onClick={() => setShowSettings(false)}
                                    className="w-full flex items-center px-5 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white transition-all font-semibold"
                                >
                                    <FaUserCircle className="mr-3 text-lg text-blue-400" />
                                    My Profile
                                </button>
                                
                                <div className="h-px bg-white/5 my-2 mx-4" />
                                
                                <button 
                                    onClick={handleLogout}
                                    className="w-full flex items-center px-5 py-3 text-sm text-rose-400 hover:bg-rose-500/10 transition-all font-bold"
                                >
                                    <MdLogout className="mr-3 text-lg" />
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block h-8 w-px bg-white/10 shadow-glow"></div>

                {/* Profile Section */}
                <div className="flex items-center space-x-4 cursor-pointer group">
                    <div className="hidden sm:flex flex-col text-right">
                        <span className="text-[10px] text-white/40 font-black uppercase tracking-tighter">Admin Account</span>
                        <span className="text-sm font-black text-white group-hover:text-blue-400 transition-colors tracking-tight">Falahal Nabil</span>
                    </div>
                    <div className="relative">
                        <img
                            src="/images/foto.png"
                            alt="Profile"
                            className="w-10 h-10 rounded-xl object-cover border border-white/20 group-hover:border-blue-500 transition-all shadow-xl"
                        />
                        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-gray-950 rounded-full shadow-sm"></div>
                    </div>
                </div>

>>>>>>> 9641ad4d55f6a07ccc9fa4c5984ff1df3398a38f
            </div>
        </header>
    );
}