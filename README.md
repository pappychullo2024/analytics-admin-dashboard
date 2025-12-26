# 📊 Analytics Admin Dashboard

A product-style analytics admin dashboard inspired by modern analytics platforms.  
Built with Next.js App Router, this project focuses on clean UI architecture, data visualization, and scalable layout patterns.

---

## 🚀 Live Demo
👉 https://YOUR-VERCEL-URL.vercel.app

---

## 🧠 Overview

This dashboard simulates a real-world analytics product, providing an overview of key metrics such as users, sessions, revenue, and recent activity.  
The goal of this project was to practice **building production-style dashboards**, not just static UI screens.

Key focus areas:
- Component reusability
- App Router architecture
- Visual hierarchy & readability
- Data visualization
- UI polish and animations

---

## ✨ Features

- 📈 **KPI Cards** with gradient visuals and clear hierarchy
- 📊 **Interactive Area Charts** for traffic and revenue analytics
- 🎛️ **Filter & Controls Bar** (date range, channel, device)
- 📋 **Orders & Customers Pages** with tables and status indicators
- 🧭 **Shared Admin Layout** using route groups
- 🎨 **Smooth Animations** with Framer Motion
- 📱 **Responsive Design** across screen sizes

---

## 🧱 Tech Stack

- **:contentReference[oaicite:0]{index=0}** (App Router)
- **:contentReference[oaicite:1]{index=1}**
- Tailwind CSS
- Recharts (data visualization)
- Framer Motion (animations)

---

## 🗂️ Project Structure

```txt
src/
 ├─ app/
 │   ├─ (admin)/
 │   │   ├─ layout.js
 │   │   ├─ dashboard/
 │   │   ├─ orders/
 │   │   ├─ customers/
 │   │   └─ settings/
 ├─ components/
 │   ├─ Sidebar.jsx
 │   ├─ StatsCard.jsx
 │   ├─ Chart.jsx
 │   ├─ DataTable.jsx
 │   └─ TopControls.jsx
