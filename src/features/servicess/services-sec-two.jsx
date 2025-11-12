'use client'
import React from "react";
import Image from "next/image";
import ServiceImage from "../../../public/Services-Swift.jpg";
import { useTranslations } from "next-intl";

const ServicesSecTwo = () => {
  const t = useTranslations("Services"); 

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center mb-4">
            <span className="w-10 h-[2px] bg-orange-500 mr-3"></span>
            <span className="text-orange-500 font-semibold text-lg">
              {t("ExploreOurAgency") || "Explore Our Agency"}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            {t("ServicesSectionTitle") ||
              "We are one of the most reliable and flexible companies in Greece."}
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {t("ServicesSectionDesc") ||
              "We are one of the most reliable and flexible companies in Greece, offering consistency, adaptability, and continuous support in every collaboration. Our clients trust us for our prompt response and the quality of our services — elements that make us a solid choice in the market."}
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src={ServiceImage}
            alt={t("ServiceImageAlt") || "Delivery service interaction"}
            width={600}
            height={400}
            className="rounded-md shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSecTwo;
