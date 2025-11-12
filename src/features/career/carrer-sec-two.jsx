'use client';
import React from "react";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

const jobs = [
  { typeKey: "FullTime", titleKey: "FoodDistributor", descKey: "FoodDistributorDesc" },
  { typeKey: "PartTime", titleKey: "FleetDistributor", descKey: "FleetDistributorDesc" },
  { typeKey: "PartTime", titleKey: "FleetManager", descKey: "FleetManagerDesc" },
];

const CareerSecTwo = () => {
  const t = useTranslations("Career");

  return (
    <div className="flex flex-wrap justify-center gap-8 py-12 bg-white">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="w-80 bg-white border-t-4 border-orange-500 shadow-md rounded-md p-8 hover:-translate-y-1 hover:shadow-xl transition duration-300"
        >
          <div className="inline-block bg-orange-100 text-orange-500 text-sm font-semibold px-3 py-1 rounded mb-4">
            {t(job.typeKey)}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t(job.titleKey)}</h3>
          <p className="text-gray-600 mb-6">{t(job.descKey)}</p>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-lg hover:bg-orange-500 hover:text-white transition duration-300">
            <Send />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerSecTwo;
