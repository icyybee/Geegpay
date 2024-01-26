"use client"

import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "./dashboard/page";
import { DarkModeProvider } from "@/context/DarkModeContext";
import 'animate.css'

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

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
