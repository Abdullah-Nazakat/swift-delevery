'use client';
import React from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import CareerBanner from "../../../public/career2.jpeg";

const CareerSecThree = () => {
  const t = useTranslations("Career");

  return (
    <section className="relative w-full h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={CareerBanner}
        alt={t("SendCVTitle")}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Orange content box */}
      <div className="relative z-10 bg-gradient-to-r from-orange-600 to-orange-500 text-white p-10 md:p-16 w-[90%] md:w-[500px] ml-auto mr-10 rounded-sm shadow-xl">
        <h2 className="text-4xl font-extrabold mb-4 leading-tight">
          {t("SendCVTitle")}
        </h2>
        <p className="text-white/90 mb-8 text-sm md:text-base">
          {t("SendCVDesc")}
        </p>
        <button className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all">
          {t("ApplyNow")}
          <Send size={16} className="ml-1" />
        </button>
      </div>
    </section>
  );
};

export default CareerSecThree;
