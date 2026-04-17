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