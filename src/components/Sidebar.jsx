import { NavLink } from "react-router-dom";

import {
    MdSpaceDashboard,
    MdPayments,
    MdOutlineMessage
} from "react-icons/md";

import {
    FaUsersCog,
    FaFileInvoiceDollar,
    FaPlus,
    FaSignOutAlt,
    FaBoxOpen,
    FaUsers,
    FaPuzzlePiece
} from "react-icons/fa";

export default function Sidebar() {

    const menuItems = [

        {
            path: "/",
            icon: MdSpaceDashboard,
            label: "Dashboard"
        },

        {
            path: "/ticket",
            icon: FaFileInvoiceDollar,
            label: "Ticket"
        },

        /* PRODUCTS */
        {
            path: "/product",
            icon: FaBoxOpen,
            label: "Products"
        },

        /* CUSTOMERS */
        {
            path: "/customers",
            icon: FaUsers,
            label: "Customers"
        },

        {
            path: "/message",
            icon: MdOutlineMessage,
            label: "Message"
        },

        {
            path: "/transaction",
            icon: MdPayments,
            label: "Transaction"
        },

        {
            path: "/setting",
            icon: FaUsersCog,
            label: "Setting"
        },
        {
            path: "/components",
            icon: FaPuzzlePiece,
            label: "Components"
        },

    ];

    // ACTIVE MENU STYLE
    const menuClass = ({ isActive }) =>
        `flex items-center rounded-2xl px-6 py-4 font-bold transition-all duration-300 group ${
            isActive
                ? "bg-[#14C38E] text-white shadow-lg shadow-emerald-200"
                : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
        }`;

    return (
        <aside className="flex h-screen w-72 flex-col bg-white px-6 py-10 border-r border-slate-100 font-sans">

            {/* LOGO */}
            <div className="px-4 mb-12">

                <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                    Travelingo
                </h1>

            </div>

            {/* MENU */}
            <nav className="flex-1 overflow-y-auto custom-scrollbar">

                <ul className="space-y-2">

                    {menuItems.map((item, index) => (

                        <li key={index}>

                            <NavLink
                                to={item.path}
                                className={menuClass}
                            >

                                <item.icon className="mr-4 text-xl" />

                                <span className="text-sm tracking-wide">
                                    {item.label}
                                </span>

                            </NavLink>

                        </li>

                    ))}

                </ul>

            </nav>

            {/* PROMO CARD */}
            <div className="mt-auto mb-8">

                <div className="bg-[#D1FAE5] p-6 rounded-[2rem] relative overflow-hidden group">

                    {/* DECORATION */}
                    <div className="absolute -right-2 -top-2 w-16 h-16 bg-emerald-200/50 rounded-full blur-xl transition-transform group-hover:scale-150"></div>

                    <h4 className="text-[#065F46] font-black text-lg relative z-10">
                        50% Discount
                    </h4>

                    <p className="text-[#065F46] text-[10px] font-medium leading-relaxed mt-1 opacity-80 relative z-10">
                        Get a discount on certain days and don't miss it.
                    </p>

                    <button className="mt-4 w-8 h-8 bg-orange-400 text-white rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 transition-colors relative z-10">

                        <FaPlus size={10} />

                    </button>

                </div>

            </div>

            {/* LOGOUT */}
            <div className="pt-4 border-t border-slate-50">

                <button className="flex items-center gap-4 px-6 py-2 text-slate-400 font-bold hover:text-rose-500 transition-colors w-full">

                    <FaSignOutAlt className="rotate-180" />

                    <span className="text-sm">
                        Log Out
                    </span>

                </button>

            </div>

        </aside>
    );
}