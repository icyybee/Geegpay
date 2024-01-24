"use client"

import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { DarkModeProvider } from "@/context/DarkModeContext";
import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import('./dashboard/page'), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return (
    <DarkModeProvider>
      {loading ? (
        <Loader />
      ) : (
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      )}
    </DarkModeProvider>
  );
}
