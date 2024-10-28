import Analysis from "@/components/analysis/Analysis";
import LastOrders from "@/components/lastorders/LastOrders";
import SalesTrend from "@/components/salestrend/SalesTrend";
import TopPlatform from "@/components/topplatform/TopPlatform";
import React from "react";

export default function Dashboard() {
  return (
    <div className="mt-5 px-5 max-w-[1400px] mx-auto w-full flex flex-col gap-5">
      <div className="desktop:flex-row flex-col flex gap-5 w-full items-center">
        <SalesTrend />
        <Analysis />
      </div>
      <div className="desktop:flex-row flex-col flex w-full gap-5">
        <LastOrders />
        <TopPlatform />
      </div>
    </div>
  );
}
