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

// ---------------- HOME ----------------
const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#1a2b3b] mb-4 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-400 text-sm mb-10 max-w-2xl mx-auto leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button
          onClick={() => toast.success("Feature coming soon!")}
          className="bg-[#0D3B31] text-white px-8 py-2.5 rounded-md flex items-center gap-2 mx-auto font-bold hover:bg-[#154d41] transition-all mb-20"
        >
          <span className="text-xl">+</span> Add a Friend
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {[
          { l: "Total Friends", v: friends.length },
          { l: "On Track", v: friends.filter(f => f.status === 'on-track').length },
          { l: "Need Attention", v: friends.filter(f => f.status === 'overdue').length },
          { l: "Interactions This Month", v: "12" },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-gray-100 p-10 rounded-xl text-center shadow-sm">
            <p className="text-5xl font-bold text-[#1a2b3b] mb-3">{s.v}</p>
            <p className="text-sm text-gray-400 font-medium">{s.l}</p>
          </div>
        ))}
      </div>

      {/* Your Friends Section Title */}
      <h2 className="text-2xl font-bold text-[#1a2b3b] mb-8 text-left">Your Friends</h2>

      {/* Friends Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {friends.map((f) => (
          <Link 
            key={f.id} 
            to={`/friend/${f.id}`} 
            className="bg-white border border-gray-100 rounded-[35px] p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            {/* Friend Image */}
            <div className="relative w-24 h-24 mx-auto mb-6">
               <img 
                 src={f.picture} 
                 className="w-full h-full rounded-full object-cover border-4 border-gray-50 shadow-sm group-hover:scale-105 transition-transform" 
                 alt={f.name} 
               />
            </div>
            
            {/* Friend Info */}
            <h3 className="font-bold text-2xl text-[#1a2b3b] mb-1">{f.name}</h3>
            <p className="text-sm text-[#8E9BAE] font-medium mb-4">{f.days_since_contact}d ago</p>
            
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {f.tags && f.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="bg-[#E6F9F1] text-[#48C78E] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Status Badge */}
            <div className={`text-[11px] uppercase font-bold px-6 py-2.5 rounded-full text-white inline-block shadow-sm ${
                f.status === "overdue" 
                  ? "bg-[#FF5C5C]" 
                  : f.status === "almost due" 
                    ? "bg-[#F2AC44]" 
                    : "bg-[#0D3B31]"
            }`}>
              {f.status}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// ---------------- TIMELINE ----------------
const Timeline = () => {
  const [filter, setFilter] = useState("All");

  // LocalStorage থেকে ডাটা রিড করা
  const timelineData = JSON.parse(localStorage.getItem("timeline") || "[]");

  // ফিল্টার লজিক
  const filteredData = filter === "All" 
    ? timelineData 
    : timelineData.filter(item => item.type === filter);

  // টাইপ অনুযায়ী আইকন রিটার্ন করার ফাংশন
  const getIcon = (type) => {
    if (type === 'Text') return textIcon;
    if (type === 'Video') return videoIcon;
    return callIcon; // Default icon for Call/Meetup
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 min-h-screen">
      {/* হেডিং */}
      <h1 className="text-5xl font-bold text-[#1a2b3b] mb-10">Timeline</h1>
      
      {/* C2. Timeline Filter */}
      <div className="mb-8">
        <select 
          onChange={(e) => setFilter(e.target.value)}
          className="p-3 bg-white border border-gray-100 rounded-lg text-[10px] font-bold text-gray-400 uppercase tracking-widest outline-none w-48 shadow-sm cursor-pointer"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call / Meetup</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      {/* টাইমলাইন লিস্ট */}
      <div className="space-y-3">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="flex items-center gap-6 p-5 bg-white border border-gray-50 rounded-2xl shadow-sm hover:border-gray-200 transition-all">
              {/* আইকন বক্স */}
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl">
                <img 
                  src={getIcon(item.type)} 
                  className="h-6 w-6 object-contain opacity-80" 
                  alt={item.type} 
                />
              </div>
              
              {/* টেক্সট কন্টেন্ট */}
              <div>
                <p className="text-md font-bold text-gray-800">
                  {item.type} <span className="text-gray-400 font-medium">with {item.friendName || item.with}</span>
                </p>
                <p className="text-[10px] font-bold text-gray-300 mt-0.5">{item.date}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-400 font-medium italic">
            No interactions found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

// ---------------- STATS (PIE CHART) ----------------
const Stats = () => {
  // ১. LocalStorage থেকে ডাটা সংগ্রহ করা
  const timelineData = JSON.parse(localStorage.getItem("timeline") || "[]");

  // ২. ডাটা প্রসেস করা (টাইপ অনুযায়ী গণনা করা)
  const data = [
    { name: 'Call', value: timelineData.filter(i => i.type === 'Call').length },
    { name: 'Text', value: timelineData.filter(i => i.type === 'Text').length },
    { name: 'Video', value: timelineData.filter(i => i.type === 'Video').length },
  ];

  // টোটাল ইন্টারঅ্যাকশন সংখ্যা
  const totalInteractions = timelineData.length;

  // ফিগমা কালার থিম অনুযায়ী কালার প্যালেট
  const COLORS = ['#0D3B31', '#8B5CF6', '#10B981']; 

  return (
    <div className="max-w-7xl mx-auto py-20 px-10 min-h-screen">
      <h1 className="text-5xl font-bold text-[#1a2b3b] mb-16 text-center">Friendship Analytics</h1>
      
      <div className="bg-white p-16 rounded-[48px] border border-gray-100 shadow-sm max-w-4xl mx-auto">
        <h3 className="text-gray-400 font-bold mb-10 text-lg uppercase tracking-widest text-center">
          By Interaction Type
        </h3>
        
        {/* চার্ট কন্টেইনার */}
        <div className="h-80 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={85}
                outerRadius={115}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
          
          {/* চার্টের মাঝখানের টোটাল নাম্বার (Donut Center Text) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1">Total</p>
            <p className="text-6xl font-bold text-[#0D3B31]">{totalInteractions}</p>
          </div>
        </div>

        {/* কাস্টম লেজেন্ড (Legend) */}
        <div className="flex justify-center gap-10 mt-12">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-3 text-sm font-bold text-gray-500">
              <span 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              {item.name}: {item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ---------------- FRIEND DETAILS ----------------
const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriend(data.find((f) => f.id === parseInt(id))));
  }, [id]);

  // ইন্টারঅ্যাকশন হ্যান্ডলার ফাংশন
  const handleInteraction = (type) => {
    if (!friend) return;

    // ১. নতুন টাইমলাইন এন্ট্রি তৈরি
    const newEntry = {
      id: Date.now(),
      with: friend.name, // টাইমলাইন পেজে দেখানোর জন্য
      type: type,        // আইকন দেখানোর জন্য
      category: type,    // ফিল্টার করার জন্য
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    };

    // ২. LocalStorage এ সেভ করা (পুরানো ডাটার সাথে নতুনটি যোগ করা)
    const existingTimeline = JSON.parse(localStorage.getItem("timeline") || "[]");
    localStorage.setItem("timeline", JSON.stringify([newEntry, ...existingTimeline]));

    // ৩. টোস্ট নোটিফিকেশন দেখানো
    toast.success(`${type} with ${friend.name} logged!`);
  };

  if (!friend) return <div className="p-20 text-center font-bold text-gray-400">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-12 gap-8 bg-[#F9FAFB]">
      {/* বাম পাশের প্রোফাইল কার্ড */}
      <div className="md:col-span-4 space-y-4">
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 text-center shadow-sm">
          <img src={friend.picture} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-50 object-cover" alt="" />
          <h2 className="text-2xl font-bold text-[#0D3B31]">{friend.name}</h2>
          <div className="flex justify-center gap-2 mt-2">
            <span className="bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase">{friend.status}</span>
            <span className="bg-green-100 text-[#0D3B31] text-[10px] px-3 py-1 rounded-full font-bold uppercase">FAMILY</span>
          </div>
          <p className="text-sm text-gray-500 mt-6 italic">"{friend.bio}"</p>
          <p className="text-[10px] text-gray-400 mt-2 uppercase font-semibold">Preferred: email</p>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-2">
          <button className="w-full py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <Clock size={16}/> Snooze 2 Weeks
          </button>
          <button className="w-full py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            Archive
          </button>
          <button className="w-full py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold text-red-500 flex items-center justify-center gap-2 hover:bg-red-50 transition">
            Delete
          </button>
        </div>
      </div>

      {/* ডান পাশের কন্টেন্ট এরিয়া */}
      <div className="md:col-span-8 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <p className="text-3xl font-bold text-[#0D3B31]">{friend.days_since_contact}</p>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Days Since Contact</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <p className="text-3xl font-bold text-[#0D3B31]">{friend.goal}</p>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Goal (Days)</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <p className="text-xl font-bold text-[#0D3B31]">{friend.next_due_date}</p>
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal কার্ড */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-1">Relationship Goal</h3>
            <p className="text-sm text-gray-500">Connect every <span className="font-bold text-gray-800">{friend.goal} days</span></p>
          </div>
          <button className="px-4 py-1 border border-gray-200 rounded-lg text-xs font-bold text-gray-400">Edit</button>
        </div>

        {/* Quick Check-in (এখানে handleInteraction কানেক্ট করা হয়েছে) */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
          <h3 className="font-bold text-sm mb-6 text-left text-gray-800">Quick Check-in</h3>
          <div className="grid grid-cols-3 gap-4">
            <button 
              onClick={() => handleInteraction('Call')}
              className="p-6 border border-gray-50 rounded-xl hover:bg-gray-50 transition group"
            >
              <img src={callIcon} className="w-8 mx-auto mb-2 opacity-70 group-hover:opacity-100" alt="call" />
              <p className="text-xs font-semibold text-gray-600">Call</p>
            </button>

            <button 
              onClick={() => handleInteraction('Text')}
              className="p-6 border border-gray-50 rounded-xl hover:bg-gray-50 transition group"
            >
              <img src={textIcon} className="w-8 mx-auto mb-2 opacity-70 group-hover:opacity-100" alt="text" />
              <p className="text-xs font-semibold text-gray-600">Text</p>
            </button>

            <button 
              onClick={() => handleInteraction('Video')}
              className="p-6 border border-gray-50 rounded-xl hover:bg-gray-50 transition group"
            >
              <img src={videoIcon} className="w-8 mx-auto mb-2 opacity-70 group-hover:opacity-100" alt="video" />
              <p className="text-xs font-semibold text-gray-600">Video</p>
            </button>
          </div>
        </div>

        {/* Recent Interactions কার্ড */}
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-sm text-gray-800">Recent Interactions</h3>
            <button className="text-[10px] font-bold text-gray-400 border border-gray-100 px-3 py-1 rounded-lg hover:bg-gray-50 transition">
              Full History
            </button>
          </div>

          <div className="space-y-4">
            {/* এখানে ডাটা স্ট্যাটিক রাখা হয়েছে, আপনি চাইলে localStorage থেকে শেষ ৩টি ডাটা এখানে দেখাতে পারেন */}
            <div className="flex items-center justify-between p-4 border border-gray-50 rounded-xl bg-[#FDFDFD]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-xl">
                  <img src={textIcon} className="w-5 opacity-70" alt="text" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">Text</p>
                  <p className="text-[10px] text-gray-400">Asked for career advice</p>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 font-medium">Jan 28, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------- APP ----------------
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
        <Toaster position="bottom-center" />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friend/:id" element={<FriendDetails />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}