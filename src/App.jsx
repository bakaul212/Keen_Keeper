import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, } from "recharts";
import {Legend, Tooltip } from 'recharts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";

import {
  Home as HomeIcon,
  Clock,
  BarChart3,
  UserPlus,
} from "lucide-react";

import toast, { Toaster } from "react-hot-toast";

// Assets
import logo from "./assets/logo.png";
import callIcon from "./assets/call.png";
import textIcon from "./assets/text.png";
import videoIcon from "./assets/video.png";
import facebookIcon from "./assets/facebook.png";
import instagramIcon from "./assets/instagram.png";
import twitterIcon from "./assets/twitter.png";

// ---------------- NAVBAR ----------------
const Navbar = () => (
  <nav className="flex justify-between items-center px-10 py-4 bg-white border-b sticky top-0 z-50 shadow-sm">
    <Link to="/">
      <img src={logo} alt="KeenKeeper" className="h-8" />
    </Link>

    <div className="flex gap-4"> {/* গ্যাপ কিছুটা কমিয়ে ৪ করা হয়েছে ডিজাইনের সাথে মেলাতে */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
            isActive 
              ? "bg-[#0D3B31] text-white shadow-md" // অ্যাক্টিভ থাকলে ফিগমার মতো স্টাইল
              : "text-gray-400 hover:text-gray-600" // ইন-অ্যাক্টিভ থাকলে হালকা ধূসর
          }`
        }
      >
        <HomeIcon size={18} /> Home
      </NavLink>

      <NavLink
        to="/timeline"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
            isActive 
              ? "bg-[#0D3B31] text-white shadow-md" 
              : "text-gray-400 hover:text-gray-600"
          }`
        }
      >
        <Clock size={18} /> Timeline
      </NavLink>

      <NavLink
        to="/stats"
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
            isActive 
              ? "bg-[#0D3B31] text-white shadow-md" 
              : "text-gray-400 hover:text-gray-600"
          }`
        }
      >
        <BarChart3 size={18} /> Stats
      </NavLink>
    </div>
  </nav>
);

// ---------------- FOOTER ----------------
const Footer = () => (
  <footer className="bg-[#0D3B31] text-white py-16 px-10 mt-auto text-center border-t border-gray-800">
    <h2 className="text-5xl font-bold mb-4 italic tracking-tighter">KeenKeeper</h2>
    <p className="text-gray-300 text-sm mb-10 max-w-2xl mx-auto font-medium opacity-90 leading-relaxed">
      Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
    </p>

    <div className="mb-10">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-6">Social Links</p>
      <div className="flex justify-center gap-5">
        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition shadow-sm">
          <img src={instagramIcon} alt="Instagram" className="h-5 object-contain" />
        </a>
        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition shadow-sm">
          <img src={facebookIcon} alt="Facebook" className="h-5 object-contain" />
        </a>
        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition shadow-sm">
          <img src={twitterIcon} alt="Twitter/X" className="h-5 object-contain" />
        </a>
      </div>
    </div>

    <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
        © 2026 KEENKEEPER. ALL RIGHTS RESERVED.
      </p>
      <div className="flex gap-8 text-[11px] text-gray-400 font-bold uppercase tracking-widest">
        <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors duration-200">Cookies</a>
      </div>
    </div>
  </footer>
); 