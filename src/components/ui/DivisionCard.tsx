import NextImage from "next/image";
import { motion } from "framer-motion";

interface DivisionCardProps {
  imageSrc: string;
  title: string;
  desc: string;
  align: "left" | "right";
  highlight?: boolean;
  learnMore?: boolean;
}

export default function DivisionCard({
  imageSrc,
  title,
  desc,
  align,
  highlight = false,
  learnMore = false,
}: DivisionCardProps) {
  const isLeftAligned = align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      // Main card container with no internal padding, just border radius and shadow
      className={`relative w-full rounded-3xl shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden
        ${highlight ? "bg-blue-600 text-white" : "bg-white text-black"}`
      }
    >
      <div
        // This inner div acts as the content wrapper, applying padding to text and controlling flex order
        className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16
          ${isLeftAligned ? "md:flex-row" : "md:flex-row-reverse"}`}
      >
        {/* Image Block: Now truly full-bleed within its flex column */}
        <div className="relative w-full md:w-1/2 h-64 overflow-hidden">
          <NextImage
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        
        {/* Text Content Block */}
        <div className={`flex flex-col gap-4 w-full md:w-1/2 p-8 ${isLeftAligned ? "text-left" : "text-right"}`}>
          <h4 className="text-3xl font-bold">{title}</h4>
          <p className="text-lg">{desc}</p>
          {learnMore && (
            <div className={`mt-4 ${isLeftAligned ? "text-left" : "text-right"}`}>
              <a
                href="#"
                className={`inline-flex items-center gap-2 font-medium transition-colors
                  ${highlight ? "text-white hover:text-gray-200" : "text-blue-600 hover:text-blue-800"}`
                }
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}