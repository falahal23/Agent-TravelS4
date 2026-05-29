import React from "react";
<<<<<<< HEAD
import { 
  FaStar, 
  FaChevronDown, 
  FaArrowRight, 
  FaMinus, 
  FaWallet, 
  FaRoute, 
  FaUsers 
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="w-full space-y-6 p-1 text-slate-800">
      
      {/* SECTION 1: TRAVEL PACKAGES */}
      <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Travel Packages</h2>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold cursor-pointer bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-100">
            Sort by: <span className="text-blue-600 font-bold">Latest</span> <FaChevronDown size={8} className="text-slate-400" />
          </div>
        </div>

        {/* Grid disesuaikan menjadi 2 kolom agar muat di layout tengah kamu */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <PackageCard 
  title="Cox's Bazar" 
  duration="8 Days, 7 Nights" 
  price="$2,200" 
  rate="4.3" 
  img="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60" 
/>
          <PackageCard 
            title="Sajek Valley" 
            duration="8 Days, 7 Nights" 
            price="$2,200" 
            rate="4.5" 
            img="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500" 
          />
          <PackageCard 
            title="Bandarban" 
            duration="8 Days, 7 Nights" 
            price="$2,200" 
            rate="4.7" 
            img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500" 
          />
        </div>
      </div>

      {/* SECTION 2: TRIP OVERVIEW & TOP DESTINATIONS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* TRIP OVERVIEW */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">Trip Overview</h2>
            <button className="text-slate-400 p-1 hover:bg-slate-50 rounded-md"><FaMinus size={12} /></button>
          </div>

          <div className="relative flex justify-center items-center my-4">
            <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F1F5F9" strokeWidth="12" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0E38B1" strokeWidth="12" 
                strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 67) / 100} strokeLinecap="round" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3B82F6" strokeWidth="12" 
                strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 26.5) / 100} strokeLinecap="round"
                className="origin-center rotate-[241deg]" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#93C5FD" strokeWidth="12" 
                strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 6.5) / 100} strokeLinecap="round"
                className="origin-center rotate-[336deg]" />
            </svg>
            <div className="absolute text-center">
              <span className="block text-xl font-black text-slate-900">2,839</span>
              <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Total Trips</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 pt-3 border-t border-slate-100 text-center text-xs">
            <div>
              <span className="block font-black text-slate-800">6.5%</span>
              <span className="text-[9px] text-slate-400">Cancelled</span>
            </div>
            <div className="border-x border-slate-100">
              <span className="block font-black text-slate-800">26.5%</span>
              <span className="text-[9px] text-slate-400">Booked</span>
            </div>
            <div>
              <span className="block font-black text-slate-800">67%</span>
              <span className="text-[9px] text-slate-400">Done</span>
            </div>
          </div>
        </div>

        {/* TOP DESTINATIONS */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">Top Destinations</h2>
            <button className="text-slate-400 p-1 hover:bg-slate-50 rounded-md"><FaMinus size={12} /></button>
          </div>

          <div className="bg-[#E0EEFF] p-3.5 rounded-2xl flex justify-between items-center mb-4">
            <div>
              <span className="block text-lg font-black text-slate-900">245,930</span>
              <span className="text-[10px] text-blue-600 font-semibold">Total Customers</span>
            </div>
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-slate-800 shadow-sm cursor-pointer hover:bg-slate-50">
              <FaArrowRight size={10} />
            </div>
          </div>

          <div className="space-y-3">
            <DestinationProgress name="Cox's Bazar" percent={75} color="bg-blue-900" img="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=100" />
            <DestinationProgress name="Sajek Valley" percent={55} color="bg-blue-600" img="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=100" />
            <DestinationProgress name="Bandarban" percent={35} color="bg-blue-400" img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100" />
          </div>
        </div>

      </div>

      {/* SECTION 3: REVENUE OVERVIEW */}
      <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Revenue Overview</h2>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold cursor-pointer bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-100">
            Last 8 Months <FaChevronDown size={8} className="text-slate-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          <div className="lg:col-span-3 relative pt-4">
            <div className="absolute left-[34%] top-0 bg-white shadow-md border border-slate-100 px-2 py-1 rounded-xl text-center z-10">
              <span className="block text-[11px] font-black text-slate-900">$76,483</span>
              <span className="text-[8px] text-slate-400 font-medium uppercase tracking-wider">Revenue</span>
            </div>

            <svg className="w-full h-32 overflow-visible" viewBox="0 0 600 150">
              <line x1="0" y1="20" x2="600" y2="20" stroke="#F1F5F9" strokeWidth="1" />
              <line x1="0" y1="60" x2="600" y2="60" stroke="#F1F5F9" strokeWidth="1" />
              <line x1="0" y1="100" x2="600" y2="100" stroke="#F1F5F9" strokeWidth="1" />
              <path 
                d="M 10 100 C 40 140, 60 70, 90 90 C 130 110, 150 150, 190 130 C 220 110, 230 40, 260 40 C 300 40, 320 120, 360 100 C 400 85, 420 95, 450 100 C 500 110, 520 20, 580 20" 
                fill="none" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" 
              />
              <circle cx="260" cy="40" r="4" fill="#FFFFFF" stroke="#1D4ED8" strokeWidth="3" />
            </svg>

            <div className="flex justify-between text-[10px] text-slate-400 font-bold px-1 mt-2">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
            </div>
          </div>

          <div className="space-y-2">
            <RevenueWidget icon={<FaWallet />} label="Earnings" amount="$82,938" bg="bg-[#101E43]" />
            <RevenueWidget icon={<FaRoute />} label="Trips" amount="31,684" bg="bg-blue-600" />
            <RevenueWidget icon={<FaUsers />} label="Customers" amount="834,245" bg="bg-blue-500" />
          </div>
        </div>
      </div>

      {/* SECTION 4: BOOKING HISTORY TABLE */}
      <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Booking History</h2>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold cursor-pointer bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-100">
            Sort by: <span className="text-slate-800 font-bold">Select</span> <FaChevronDown size={8} className="text-slate-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-[#EBF3FC] text-slate-500 font-bold text-[10px] uppercase tracking-wider">
                <th className="p-3 rounded-l-xl">ID</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-center">Duration</th>
                <th className="p-3">Amount</th>
                <th className="p-3 rounded-r-xl">Status</th>
              </tr>
            </thead>
            <tbody className="text-[11px] font-semibold text-slate-700 divide-y divide-slate-100">
              <TableRow id="BL692F" subId="BDAir" date="Apr 16, 2025" from="Dhaka" to="Cox's" timeFrom="16:28" timeTo="18:45" duration="2h 38m" amount="$5,000" status="Completed" />
              <TableRow id="BL692F" subId="BDAir" date="Apr 16, 2025" from="Cox's" to="Dhaka" timeFrom="16:28" timeTo="18:45" duration="2h 38m" amount="$5,000" status="Cancelled" />
              <TableRow id="BL692F" subId="BDAir" date="Apr 16, 2025" from="Dhaka" to="Chitt." timeFrom="16:28" timeTo="18:45" duration="2h 30m" amount="$5,000" status="In Progress" />
            </tbody>
          </table>
        </div>
      </div>

=======
import { FaSearch, FaBell, FaStar, FaMapMarkerAlt, FaFilter, FaChevronRight } from "react-icons/fa";

const TravelDashboardOnly = () => {
  return (
    <div className="min-h-screen bg-[#F0F4F7] p-4 md:p-8 font-sans text-slate-800 flex justify-center items-center">
      
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-6xl bg-white rounded-[3.5rem] shadow-2xl overflow-hidden p-8 md:p-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Hello, Falahal 👋</h1>
            <p className="text-slate-400 text-base font-medium mt-1">Welcome back and explore the world</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <input 
                type="text" 
                placeholder="Search direction" 
                className="bg-[#F8FAFC] border-none rounded-full px-8 py-4 pl-14 w-full md:w-80 focus:ring-2 focus:ring-emerald-500/20 outline-none text-sm font-semibold shadow-inner transition-all" 
              />
              <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-400 size-4" />
            </div>
            <div className="relative p-4 bg-[#F8FAFC] rounded-full text-orange-400 shadow-sm border border-slate-50 cursor-pointer hover:scale-105 transition-transform">
              <FaBell size={20} />
              <span className="absolute top-3.5 right-3.5 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white"></span>
            </div>
          </div>
        </div>

        {/* HERO CARDS - 3 COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <HeroCard 
            title="Mount climbing" 
            loc="Green Mountain" 
            img="https://res.cloudinary.com/dvpv1hm4h/image/upload/f_auto,c_limit,w_1920,q_auto/hero_home_HD_2_b1c66de161" 
          />
          <HeroCard 
            title="Night camping" 
            loc="Lightning Lake" 
            img="https://koa.com/blog/images/setting-up-camp-at-night.jpg?preset=heroimagecropped" 
          />
          <HeroCard 
            title="Mount climbing" 
            loc="Green Mountain" 
            img="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600" 
          />
        </div>

        {/* BOTTOM SECTION - SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* BEST DESTINATION LIST */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-black text-slate-900">Best Destination 🌈</h2>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">100 Destinations found</p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl text-slate-400 font-bold text-xs border border-slate-100 shadow-sm hover:bg-slate-50 transition-all">
                <FaFilter /> Filters
              </button>
            </div>

            <div className="space-y-5">
              <DestItem name="Green wood forest" loc="Telangana" rate="4.8" price="999" img="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200" />
              <DestItem name="Green forest Camp" loc="Channai" rate="4.8" price="999" img="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=200" />
              <DestItem name="Desert Festival" loc="Gujarat" rate="4.8" price="999" img="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=200" />
            </div>
          </div>

          {/* INDIGO PROMO BANNER */}
          <div className="bg-[#1E1B4B] rounded-[3rem] p-10 flex flex-col items-center justify-between text-white relative overflow-hidden shadow-2xl min-h-[350px]">
            {/* Decorative background glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>

            <div className="relative z-10 flex flex-col items-center mt-4">
              <div className="w-24 h-24 bg-[#14C38E] rounded-full flex items-center justify-center border-8 border-white/5 mb-6 shadow-xl">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-20 h-20" />
              </div>
              <h3 className="text-3xl font-black text-center leading-tight mb-3">Let's Explore <br/> the beauty</h3>
              <p className="text-xs text-indigo-300 font-bold uppercase tracking-[0.2em] opacity-80">Get special offers & news</p>
            </div>

            <button className="relative z-10 w-full max-w-xs bg-[#14C38E] py-5 rounded-[1.5rem] font-black text-base hover:bg-[#10a87a] transition-all active:scale-95 shadow-xl shadow-[#14C38E]/30 mb-2">
              Join Now
            </button>
          </div>

        </div>
      </div>
>>>>>>> 9641ad4d55f6a07ccc9fa4c5984ff1df3398a38f
    </div>
  );
};

/* --- MINI COMPONENTS --- */
<<<<<<< HEAD
const PackageCard = ({ title, duration, price, rate, img }) => (
  <div className="bg-white rounded-2xl border border-slate-100 p-2.5 shadow-sm hover:shadow-md transition-all group cursor-pointer">
    <div className="relative h-32 rounded-xl overflow-hidden mb-2">
      <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={title} />
      <div className="absolute top-1.5 right-1.5 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-full flex items-center gap-0.5 text-[9px] font-black text-slate-800">
        {rate} <FaStar className="text-yellow-400" size={7} />
      </div>
    </div>
    <div className="px-1">
      <h4 className="font-bold text-xs text-slate-900 tracking-tight">{title}</h4>
      <p className="text-[10px] text-slate-400">{duration}</p>
      <div className="flex justify-between items-center mt-2 pt-1 border-t border-slate-50">
        <span className="font-extrabold text-slate-900 text-xs">{price}</span>
        <button className="bg-[#1C3FAA] hover:bg-blue-800 text-white font-bold text-[9px] px-3 py-1 rounded-md shadow-sm">
          View
        </button>
      </div>
    </div>
  </div>
);

const DestinationProgress = ({ name, percent, color, img }) => (
  <div className="flex items-center gap-2">
    <img src={img} className="w-8 h-8 rounded-xl object-cover shadow-sm" alt={name} />
    <div className="flex-1">
      <div className="flex justify-between text-[11px] font-bold text-slate-800 mb-0.5">
        <span>{name}</span>
        <span className="text-slate-400 text-[9px]">{percent}%</span>
      </div>
      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div className={`${color} h-full rounded-full`} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  </div>
);

const RevenueWidget = ({ icon, label, amount, bg }) => (
  <div className={`p-2.5 rounded-xl flex items-center gap-2.5 shadow-sm ${bg} text-white`}>
    <div className="p-1.5 rounded-md text-xs bg-white/20">
      {icon}
    </div>
    <div>
      <span className="block text-[8px] opacity-70 font-semibold uppercase tracking-wider">{label}</span>
      <span className="block text-xs font-black tracking-tight">{amount}</span>
    </div>
  </div>
);

const TableRow = ({ id, subId, date, from, to, timeFrom, timeTo, duration, amount, status }) => {
  const statusColors = {
    "Completed": "bg-green-50 text-green-600 border border-green-100",
    "Cancelled": "bg-red-50 text-red-500 border border-red-100",
    "In Progress": "bg-blue-50 text-blue-500 border border-blue-100"
  };

  return (
    <tr className="hover:bg-slate-50/80 transition-colors">
      <td className="p-3">
        <span className="block text-slate-900 font-bold">{id}</span>
        <span className="text-[9px] text-slate-400">{subId}</span>
      </td>
      <td className="p-3 text-slate-500 font-medium whitespace-nowrap">{date}</td>
      <td className="p-3">
        <div className="flex items-center justify-center gap-2 text-center scale-95">
          <div>
            <span className="block text-slate-900 font-bold">{timeFrom}</span>
            <span className="text-[9px] text-slate-400 font-medium">{from}</span>
          </div>
          <div className="flex flex-col items-center justify-center min-w-[50px]">
            <span className="text-[8px] bg-green-100 text-green-700 px-1 py-0.2 rounded font-bold scale-90">{duration}</span>
            <div className="w-full border-t border-dashed border-slate-300 relative mt-0.5">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-slate-400 rounded-full"></div>
            </div>
          </div>
          <div>
            <span className="block text-slate-900 font-bold">{timeTo}</span>
            <span className="text-[9px] text-slate-400 font-medium">{to}</span>
          </div>
        </div>
      </td>
      <td className="p-3 font-bold text-slate-900">{amount}</td>
      <td className="p-3">
        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black tracking-wide inline-block ${statusColors[status] || "bg-slate-100"}`}>
          {status}
        </span>
      </td>
    </tr>
  );
};

export default Dashboard;
=======

const HeroCard = ({ title, loc, img }) => (
  <div className="relative h-80 rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-emerald-100 transition-all cursor-pointer group">
    <img src={img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={title} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
    <div className="absolute bottom-8 left-8 text-white">
      <h4 className="font-black text-lg tracking-tight mb-2">{title}</h4>
      <div className="flex items-center gap-3 opacity-90 text-[10px] font-black uppercase tracking-widest">
        <div className="flex items-center gap-1.5">
          <FaMapMarkerAlt size={10} className="text-[#14C38E]" /> {loc}
        </div>
        <div className="flex items-center gap-1.5 ml-2">
          <FaStar className="text-yellow-400" size={10} /> 4.8
        </div>
      </div>
    </div>
  </div>
);

const DestItem = ({ name, loc, rate, price, img }) => (
  <div className="flex items-center justify-between p-3 hover:bg-[#F8FAFC] rounded-[2rem] transition-all cursor-pointer border border-transparent hover:border-slate-100 group">
    <div className="flex items-center gap-5">
      <div className="relative">
        <img src={img} className="w-16 h-16 rounded-2xl object-cover shadow-md" alt={name} />
        <div className="absolute inset-0 rounded-2xl group-hover:ring-2 ring-emerald-400 transition-all"></div>
      </div>
      <div>
        <h4 className="font-black text-base text-slate-800 tracking-tight">{name}</h4>
        <p className="text-[11px] text-slate-400 font-black flex items-center gap-2 mt-1 uppercase tracking-tighter">
          <span className="flex items-center gap-1"><FaMapMarkerAlt size={9}/> {loc}</span>
          <span className="flex items-center gap-1 ml-2 text-slate-500 font-black italic"><FaStar className="text-yellow-400 not-italic" /> {rate}</span>
        </p>
      </div>
    </div>
    <div className="text-right pr-4">
      <p className="font-black text-slate-900 text-lg tracking-tight">₹{price}<span className="text-xs text-slate-300 ml-1">/night</span></p>
    </div>
  </div>
);

export default TravelDashboardOnly;


>>>>>>> 9641ad4d55f6a07ccc9fa4c5984ff1df3398a38f
