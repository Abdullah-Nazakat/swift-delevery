import Image from "next/image";
// import { useTranslations } from "next-intl";
import StepOne from "../../../public/step-1.png"
import StepTwo from "../../../public/step-2.png"
import StepThree from "../../../public/step-3.png"
import StepFour from "../../../public/step-4.png"


// const t = useTranslations('HomeProcess')

const steps = [
    {
        id: 1,
        title: "Place Order",
        description:
            "Enter package details and select your preferred delivery option",
        image: StepOne,
    },
    {
        id: 2,
        title: "Track Package",
        description:
            "Monitor your delivery in real-time with our GPS tracking system",
        image: StepTwo,
    },
    {
        id: 3,
        title: "Fast Delivery",
        description: "Our professional couriers deliver your package with care",
        image: StepThree,
    },
    {
        id: 4,
        title: "Receive & Confirm",
        description:
            "Get your package delivered safely to your doorstep without any hassle.",
        image: StepFour,
    },
];

export default function HomeProcess() {
    return (
        <section className="py-12 px-4 md:px-8 bg-[#FDE047]">
            <div className="mx-auto">
                <div className="text-center mb-12 animate-fadeIn">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1e293b] mb-4">
                        A Four Step Process
                    </h2>
                    <p className="text-[#475569] text-lg max-w-2xl mx-auto">
                        Comprehensive delivery solutions tailored to meet your unique
                        requirements
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="bg-[#FFFBEB] rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 relative group animate-popIn"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-3xl z-0 pointer-events-none">
                              <div
  className="absolute top-[-10px] right-[-10px] w-20 h-20 [background:linear-gradient(135deg,#FF8904_0%,#FDC700_100%)] transform rotate-12 rounded-bl-3xl shadow-md"
></div>

                            </div>

                            <div className="relative h-48 w-full mb-6 rounded-2xl overflow-hidden z-10 border-4 border-white shadow-sm">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="text-center relative z-10">
                                <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-[#475569] text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
