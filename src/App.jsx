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